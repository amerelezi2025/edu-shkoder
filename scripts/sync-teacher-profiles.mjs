import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const profiles = [
  { file: 'valdet-luga.html', slug: 'valdet-luga', accent: 'linear-gradient(135deg,#FF6B35,#FFD166)', phone: '+355676516773', instagram: 'https://www.instagram.com/libra.education/' },
  { file: 'mirsada-bala.html', slug: 'mirsada-bala', accent: 'linear-gradient(135deg,#0ea5e9,#38bdf8)', phone: '+355694830000', instagram: 'https://www.instagram.com/easy.international.courses/' },
  { file: 'roberta-naraci.html', slug: 'roberta-naraci', accent: 'linear-gradient(135deg,#38bdf8,#60a5fa)', phone: '+355674060071' },
  { file: 'diana-boriqi.html', slug: 'diana-boriqi', accent: 'linear-gradient(135deg,#059669,#34d399)', phone: '+355673890074' },
  { file: 'elvira-bushati.html', slug: 'elvira-bushati', accent: 'linear-gradient(135deg,#d97706,#fbbf24)', phone: '+355674061081' },
  { file: 'frida-luani.html', slug: 'frida-luani', accent: 'linear-gradient(135deg,#f59e0b,#fcd34d)', phone: '+355683704370' },
  { file: 'dr-bendis-hoxha.html', slug: 'dr-bendis-hoxha', accent: 'linear-gradient(135deg,#fbbf24,#fde68a)', phone: '+355692136564' },
  { file: 'naxhija-milla.html', slug: 'naxhija-milla', accent: 'linear-gradient(135deg,#7c3aed,#a78bfa)', phone: '+355692627187' },
  { file: 'miranda-bala.html', slug: 'miranda-bala', accent: 'linear-gradient(135deg,#dc2626,#f87171)', phone: '+355692516062', instagram: 'https://www.instagram.com/easy.international.courses/' },
  { file: 'aferdita-bruceti.html', slug: 'aferdita-bruceti', accent: 'linear-gradient(135deg,#be185d,#f472b6)', phone: '+355697724356' },
  { file: 'valbona-vila.html', slug: 'valbona-vila', accent: 'linear-gradient(135deg,#d97706,#fbbf24)', phone: '+355670000286' }
];

function instagramButton(instagram) {
  if (!instagram) return '';
  return `\n            <a href="${instagram}" target="_blank" rel="noopener noreferrer" class="btn-profile" style="background:#e1306c;">📸 Instagram</a>`;
}

for (const profile of profiles) {
  const filePath = path.join(root, profile.file);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing', profile.file);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

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
