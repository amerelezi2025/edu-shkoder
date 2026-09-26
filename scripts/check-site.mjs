import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { COURSES, TEACHERS, TEACHER_PROFILE_PATHS } = require('../site-data.js');
const publicTeachers = TEACHERS.filter(teacher => !teacher.courseIds.includes('konkursi-kangur'));
const htmlFiles = fs.readdirSync(root).filter(file => file.endsWith('.html'));
const errors = [];

function fail(message) {
  errors.push(message);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function readProjectFile(relativePath, sourceLabel) {
  const filePath = path.resolve(root, relativePath);
  const relative = path.relative(root, filePath);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    fail(`${sourceLabel} points outside the site: ${relativePath}`);
    return null;
  }
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    fail(`${sourceLabel} points to a missing file: ${relativePath}`);
    return null;
  }
  return fs.readFileSync(filePath, 'utf8');
}

function checkReference(sourceFile, reference) {
  const value = reference.trim();
  if (!value || value === '#' || /^(?:mailto:|tel:|javascript:|data:)/i.test(value)) return;

  let url;
  try {
    url = new URL(value, `https://edushkoder.com/${sourceFile}`);
  } catch {
    fail(`${sourceFile} has an invalid link: ${value}`);
    return;
  }

  if (!['edushkoder.com', 'www.edushkoder.com'].includes(url.hostname.toLowerCase())) return;

  const pathname = decodeURIComponent(url.pathname);
  let relativeTarget = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  if (!path.extname(relativeTarget)) relativeTarget = path.join(relativeTarget, 'index.html');
  const targetHtml = readProjectFile(relativeTarget, sourceFile);
  if (!targetHtml || !url.hash || url.hash === '#') return;

  const fragment = decodeURIComponent(url.hash.slice(1));
  const idPattern = new RegExp(`(?:\\bid|\\bname)=["']${fragment.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}["']`);
  if (!idPattern.test(targetHtml)) fail(`${sourceFile} links to a missing anchor: ${value}`);
}

const courseIds = new Set(COURSES.map(course => course.id));
for (const course of COURSES) {
  if (course.meta.some(item => /^\d+\s+mësues(?:e)?\b/i.test(item))) {
    fail(`${course.name} has a hard-coded teacher count; course counts must come from teacher assignments.`);
  }
  const courseFile = course.id === 'konkursi-kangur' ? 'konkursi-kangur-shkoder.html' : `${course.id}.html`;
  const html = readProjectFile(courseFile, `Course ${course.name}`);
  if (!html) continue;

  if (!/<title>\s*[^<]+<\/title>/i.test(html)) fail(`${courseFile} is missing a page title.`);
  if (!/<meta\s+name="description"\s+content="[^"]+"\s*\/>/i.test(html)) {
    fail(`${courseFile} is missing a page description.`);
  }

  if (course.id !== 'konkursi-kangur') {
    const expected = publicTeachers
      .filter(teacher => teacher.courseIds.includes(course.id))
      .map(teacher => teacher.name)
      .sort();
    const listed = [...html.matchAll(/class="teacher-name"[^>]*>([^<]+)</g)]
      .map(match => match[1].trim())
      .sort();
    if (JSON.stringify(listed) !== JSON.stringify(expected)) {
      fail(`${courseFile} teacher cards do not match the shared teacher assignments. Expected: ${expected.join(', ') || '(none)'}; found: ${listed.join(', ') || '(none)'}.`);
    }
  }
}

for (const teacher of TEACHERS) {
  for (const courseId of teacher.courseIds) {
    if (!courseIds.has(courseId)) fail(`${teacher.name} refers to unknown course ${courseId}.`);
  }
  const profile = TEACHER_PROFILE_PATHS[teacher.name];
  if (!profile) fail(`${teacher.name} has no profile page mapping.`);
  else {
    const profileHtml = readProjectFile(profile, `Teacher ${teacher.name}`);
    if (profileHtml && !teacher.courseIds.includes('konkursi-kangur')) {
      const name = profileHtml.match(/<h1 itemprop="name">([^<]+)<\/h1>/)?.[1];
      const subject = profileHtml.match(/<div class="profile-sub" itemprop="jobTitle">([^<]+)<\/div>/)?.[1];
      const note = profileHtml.match(/<p[^>]*itemprop="description">([^<]*)<\/p>/)?.[1];
      if (name !== escapeHtml(teacher.name)) fail(`${profile} name does not match the shared teacher record.`);
      if (subject !== escapeHtml(teacher.subject)) fail(`${profile} subject does not match the shared teacher record.`);
      if (note !== escapeHtml(teacher.note)) fail(`${profile} description does not match the shared teacher record.`);
    }
  }
}

const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const courseFallback = Number(index.match(/id="heroCourseCount">(\d+)</)?.[1]);
const teacherFallback = Number(index.match(/id="heroTeacherCount">(\d+)</)?.[1]);
if (courseFallback !== COURSES.length) fail(`Homepage course fallback is ${courseFallback}; expected ${COURSES.length}.`);
if (teacherFallback !== publicTeachers.length) fail(`Homepage teacher fallback is ${teacherFallback}; expected ${publicTeachers.length}.`);

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const isRedirect = /<meta\s+http-equiv=["']refresh|location\.replace\(/i.test(html);
  if (isRedirect) {
    if (!/<meta\s+name=["']robots["']\s+content=["']noindex,\s*follow["']/i.test(html)) {
      fail(`${file} is a redirect page and should be excluded from search indexing.`);
    }
  } else {
    if (!/<title>\s*[^<]+<\/title>/i.test(html)) fail(`${file} is missing a page title.`);
    if (!/<meta\s+name=["']description["']\s+content=["'][^"']{40,}["']/i.test(html)) {
      fail(`${file} is missing a useful search description.`);
    }
    if (!/<link\s+rel=["']canonical["']\s+href=["']https:\/\/edushkoder\.com\//i.test(html)) {
      fail(`${file} is missing its canonical URL.`);
    }
    for (const property of ['og:title', 'og:description', 'og:url', 'og:image']) {
      if (!new RegExp(`<meta\\s+property=["']${property}["']\\s+content=["'][^"']+`, 'i').test(html)) {
        fail(`${file} is missing its ${property} share preview.`);
      }
    }
  }
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    checkReference(file, match[1]);
  }
}

const sitemapPath = path.join(root, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const match of sitemap.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/gi)) {
    checkReference('sitemap.xml', match[1]);
  }
}

if (errors.length) {
  console.error(`Site check found ${errors.length} issue${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Site check passed: ${COURSES.length} courses, ${publicTeachers.length} teachers, course pages and internal links are consistent.`);
}
