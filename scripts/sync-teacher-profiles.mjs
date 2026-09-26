import fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { TEACHERS, TEACHER_PROFILE_PATHS } = require('../site-data.js');
const profiles = TEACHERS
  .filter(teacher => !teacher.courseIds.includes('konkursi-kangur'))
  .map(teacher => {
    const file = TEACHER_PROFILE_PATHS[teacher.name];
    if (!file) throw new Error(`No profile page is mapped for ${teacher.name}`);
    if (!teacher.phone) throw new Error(`No phone is configured for ${teacher.name}`);
    return {
      file,
      slug: file.replace(/\.html$/, ''),
      accent: teacher.accent,
      phone: `+${teacher.phone}`,
      instagram: teacher.instagram
    };
  });

function instagramButton(instagram) {
  if (!instagram) return '';
  return `\n            <a href="${instagram}" target="_blank" rel="noopener noreferrer" class="btn-profile" style="background:#e1306c;">📸 Instagram</a>`;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

for (const profile of profiles) {
  const filePath = path.join(root, profile.file);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing', profile.file);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  const teacher = TEACHERS.find(item => TEACHER_PROFILE_PATHS[item.name] === profile.file);
  const name = escapeHtml(teacher.name);
  const subject = escapeHtml(teacher.subject);
  const note = escapeHtml(teacher.note);

  html = html.replace(
    /(<section class="page-hero">[\s\S]*?<h1>)[\s\S]*?(<\/h1>\s*<p>)[\s\S]*?(<\/p>)/,
    (_, beforeName, beforeSummary, afterSummary) => `${beforeName}${name}${beforeSummary}Mësime private ${subject} në Shkodër — 1 me 1, orar fleksibël.${afterSummary}`
  );
  html = html.replace(/<h1 itemprop="name">[\s\S]*?<\/h1>/, () => `<h1 itemprop="name">${name}</h1>`);
  html = html.replace(/(<div class="profile-sub" itemprop="jobTitle">)[\s\S]*?(<\/div>)/, (_, before, after) => `${before}${subject}${after}`);
  html = html.replace(/(<p[^>]*itemprop="description">)[\s\S]*?(<\/p>)/, (_, before, after) => `${before}${note}${after}`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${name} - Mësues/e ${subject} në Shkodër | EduShkodër</title>`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, () => `<meta property="og:title" content="${name} - Mësues/e ${subject} në Shkodër | EduShkodër" />`);

  html = html.replace(
    /(<div class="profile-avatar" style="background:)[^"]+(">)/,
    `$1${profile.accent}$2`
  );

  html = html.replace(
    /(<div class="teacher-avatar">)/,
    `<div class="teacher-avatar" style="background:${profile.accent};">`
  );

  const bookingHref = `https://edushkoder.com/?teacher=${profile.slug}#booking`;
  html = html.replace(
    /href="https:\/\/edushkoder\.com\/#booking"/g,
    `href="${bookingHref}"`
  );

  html = html.replace(
    /"telephone": "\+355696147703"/,
    `"telephone": "${profile.phone}"`
  );

  if (profile.instagram) {
    if (html.includes('"sameAs"')) {
      html = html.replace(/"sameAs":\s*\[[^\]]*\]/, `"sameAs": ["${profile.instagram}"]`);
    } else {
      html = html.replace(
        /("areaServed": "[^"]+")/,
        `$1,\n  "sameAs": ["${profile.instagram}"]`
      );
    }

    const waLine = html.match(/<a href="https:\/\/wa\.me\/(\d+)" target="_blank" class="btn-wa">/);
    if (waLine && !html.includes('📸 Instagram')) {
      html = html.replace(
        /(<a href="https:\/\/wa\.me\/\d+" target="_blank" class="btn-wa">[^<]+<\/a>)/,
        `$1${instagramButton(profile.instagram)}`
      );
    }
  }

  fs.writeFileSync(filePath, html);
  console.log('Updated', profile.file);
}
