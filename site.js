const OWNER = {
  phone: '355696147703',
  displayPhone: '+355 69 614 7703',
  waLink: 'https://wa.me/355696147703'
};

// ============================================================
// EMAILJS — Ndryshoni 3 vlerat më poshtë me ato nga emailjs.com
// ============================================================
const EMAILJS_SERVICE_ID  = 'service_frret0b';
const EMAILJS_TEMPLATE_ID = 'template_f40rtpw';
const EMAILJS_PUBLIC_KEY  = 'Hdl3J45ByqrNpr_ZM';
// ============================================================

const COURSES = [
  {
    id: 'general-1-6',
    name: 'Të Përgjithshme (Klasa 1-6)',
    category: 'Lëndë Shkollore',
    icon: 'fa-school',
    gradient: 'linear-gradient(135deg,#FF6B35,#FFD166)',
    description: 'Kurs mbështetës për nxënësit e klasave 1-6 me ndihmë në detyra, përsëritje të mësimit dhe punë të rregullt gjatë javës.',
    meta: ['1 me 1', 'Klasa 1-6', 'Valdet Luga'],
    featured: true
  },
  {
    id: 'fillore-1-5',
    name: 'Fillore (Klasa 1-5)',
    category: 'Lëndë Shkollore',
    icon: 'fa-book-open',
    gradient: 'linear-gradient(135deg,#f97316,#fb923c)',
    description: 'Për nxënësit e ciklit fillor me fokus në matematikë dhe gjuhë shqipe, sidomos te bazat, shpjegimet e qarta dhe ushtrimet e përditshme.',
    meta: ['Matematikë & Gjuhë Shqipe', 'Klasa 1-5', 'Valdet Luga'],
    featured: true
  },
  {
    id: 'matematike',
    name: 'Matematikë',
    category: 'Lëndë Shkollore',
    icon: 'fa-square-root-alt',
    gradient: 'linear-gradient(135deg,#d97706,#fbbf24)',
    description: 'Orë private në matematikë për sqarimin e temave, ushtrimeve dhe përforcimin e bazës në nivele të ndryshme shkollore.',
    meta: ['3 mësuese', '1 me 1', 'Shkodër']
  },
  {
    id: 'anglisht',
    name: 'Anglisht',
    category: 'Gjuhë të Huaja',
    icon: 'fa-language',
    gradient: 'linear-gradient(135deg,#059669,#34d399)',
    description: 'Mësime individuale në anglisht për nxënës që duan të përmirësojnë gjuhën, notat ose komunikimin e përditshëm.',
    meta: ['2 mësuese', '1 me 1', 'Shkodër']
  },
  {
    id: 'gjermanisht',
    name: 'Gjermanisht',
    category: 'Gjuhë të Huaja',
    icon: 'fa-globe-europe',
    gradient: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    description: 'Mësime në gjermanisht për fillestarë dhe nxënës që kërkojnë mbështetje të rregullt në gramatikë, lexim dhe komunikim.',
    meta: ['2 mësuese', '1 me 1', 'Shkodër']
  },
  {
    id: 'italisht',
    name: 'Italisht',
    category: 'Gjuhë të Huaja',
    icon: 'fa-globe',
    gradient: 'linear-gradient(135deg,#dc2626,#f87171)',
    description: 'Mësime private italisht për përforcim në shkollë dhe për përdorim praktik në të folur e në të shkruar.',
    meta: ['1 mësuese', '1 me 1', 'Shkodër']
  },
  {
    id: 'kimi-biologji',
    name: 'Kimi / Biologji',
    category: 'Shkenca',
    icon: 'fa-flask',
    gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    description: 'Mbështetje individuale në kimi dhe biologji. Në listë është shënuar edhe mësuesja që jep vetëm kimi.',
    meta: ['2 mësuese', '1 me 1', 'Shkodër']
  },
  {
    id: 'gjuhe-letersi',
    name: 'Gjuhë / Letërsi',
    category: 'Lëndë Shkollore',
    icon: 'fa-book',
    gradient: 'linear-gradient(135deg,#be185d,#f472b6)',
    description: 'Orë private për gjuhë shqipe dhe letërsi me fokus te kuptimi i tekstit, analiza dhe përmirësimi i shkrimit.',
    meta: ['2 mësuese', '1 me 1', 'Shkodër']
  },
  {
    id: 'fizike',
    name: 'Fizikë',
    category: 'Shkenca',
    icon: 'fa-bolt',
    gradient: 'linear-gradient(135deg,#2563eb,#60a5fa)',
    description: 'Mësime individuale në fizikë për sqarimin e formulave, ushtrimeve dhe temave bazë të lëndës.',
    meta: ['1 mësuese', '1 me 1', 'Shkodër']
  }
];

const TEACHERS = [
  {
    name: 'Valdet Luga',
    phone: '355676516773',
    subject: 'Të Përgjithshme (Klasa 1-6) / Fillore (Klasa 1-5)',
    maps: 'https://www.google.com/maps/place/Shkolla+9+vje%C3%A7are+%22Xheladin+Fishta%22/@42.072249,19.5096125,3a,75y,18.53h,68.01t/data=!3m7!1e1!3m5!1sNGjmr4z7FK536rWpzJSeHA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D21.98714872480049%26panoid%3DNGjmr4z7FK536rWpzJSeHA%26yaw%3D18.527216042522184!7i13312!8i6656!4m6!3m5!1s0x134e00e551f038b5:0xe5ca464a635d68e0!8m2!3d42.0725363!4d19.5087931!16s%2Fg%2F11c1wwv25_?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['general-1-6', 'fillore-1-5'],
    accent: 'linear-gradient(135deg,#FF6B35,#FFD166)',
    featured: true,
    note: 'Eksperiencë 37 vjeçare në mësimdhënie. Diplomuar në vitin 1989 me mesatare maksimale, ushtron profesionin me përkushtim duke i kushtuar vëmendje të veçantë empatisë dhe gjithpërfshirjes të secilit nxënës. Përgatitje ditore e mësimeve dhe program i avancuar. Mbështetje në tekste jashtëshkollore dhe program i personalizuar sipas nevojave të fëmijëve.',
    instagram: 'https://www.instagram.com/libra.education/'
  },
  {
    name: 'Mirsada Kadia',
    phone: '355684830000',
    subject: 'Gjermanisht',
    maps: 'https://www.google.com/maps/place/Universiteti+i+Shkodr%C3%ABs+%22Luigj+Gurakuqi%22/@42.0663747,19.5101781,3a,75y,302.59h,77.26t/data=!3m7!1e1!3m5!1sWjhnIF2WEkpkOPeY6XCEWw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.742345076382705%26panoid%3DWjhnIF2WEkpkOPeY6XCEWw%26yaw%3D302.58838241255006!7i13312!8i6656!4m6!3m5!1s0x134e00fcd146f0df:0xbee74fa0b9f6dbfa!8m2!3d42.0662237!4d19.5095856!16s%2Fm%2F0264mz5?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjermanisht'],
    accent: 'linear-gradient(135deg,#0ea5e9,#38bdf8)'
  },
  {
    name: 'Roberta Naraci',
    phone: '355674060071',
    subject: 'Gjermanisht',
    maps: 'https://www.google.com/maps/place/Shkolla+e+mesme+Teknike+Pyjore+%E2%80%9CKole+Margjini%E2%80%9D/@42.0690468,19.5241354,3a,75y,73.5h,81.77t/data=!3m7!1e1!3m5!1shajw5qc7JNzO0dy1bUmmFw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.23161271848251%26panoid%3Dhajw5qc7JNzO0dy1bUmmFw%26yaw%3D73.49779449416356!7i13312!8i6656!4m6!3m5!1s0x134e01f85c2a6ed1:0xb3575bbf7aea15c4!8m2!3d42.0694939!4d19.5240147!16s%2Fg%2F11qnvn0sv7?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjermanisht'],
    accent: 'linear-gradient(135deg,#38bdf8,#60a5fa)'
  },
  {
    name: 'Diana Boriqi',
    phone: '355673890074',
    subject: 'Anglisht',
    maps: 'https://www.google.com/maps/place/Shkolla+9-vje%C3%A7are+%22Ndre+Mjeda%22/@42.0630321,19.506876,3a,75y,150.75h,71.73t/data=!3m7!1e1!3m5!1sN3ZtAgiK4qaqZIVqsNbcow!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D18.272063414824743%26panoid%3DN3ZtAgiK4qaqZIVqsNbcow%26yaw%3D150.75104675711057!7i13312!8i6656!4m6!3m5!1s0x134e011eba67a377:0x78fd26a6b71638dd!8m2!3d42.062877!4d19.5052845!16s%2Fg%2F11g6qv45m_?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['anglisht'],
    accent: 'linear-gradient(135deg,#059669,#34d399)'
  },
  {
    name: 'Vaelza Golemi',
    phone: '355692511260',
    subject: 'Anglisht',
    maps: 'https://www.google.com/maps/place/Qendra+Tregtare/@42.0687823,19.5078719,3a,75y,58.93h,84.82t/data=!3m7!1e1!3m5!1sTEGLyOjvh0IiScBEjmjUDw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.176114915128949%26panoid%3DTEGLyOjvh0IiScBEjmjUDw%26yaw%3D58.93163660727847!7i13312!8i6656!4m6!3m5!1s0x134e01e7e2e5b22d:0x8b1e44c017df8696!8m2!3d42.068996!4d19.5082158!16s%2Fg%2F11jdhclxdp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['anglisht'],
    accent: 'linear-gradient(135deg,#34d399,#6ee7b7)',
    note: 'Mësuese që nga viti 2007, ushtron profesionin në një nga shkollat elitare të qytetit. Puna e saj ka në qendër komunikimin dhe mësimin jashtë kornizave të metodave tradicionale. Empatia dhe komunikimi janë thelbësore në punën e saj me nxënës të çdo moshe dhe klase.'
  },
  {
    name: 'Elvira Bushati',
    phone: '355674061081',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Bexhisteni/@42.0713151,19.5095681,3a,75y,62.1h,79.94t/data=!3m7!1e1!3m5!1shC2yz2-19tc3YiwhqKTkjw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D10.062013162893408%26panoid%3DhC2yz2-19tc3YiwhqKTkjw%26yaw%3D62.09952613697949!7i13312!8i6656!4m7!3m6!1s0x134e013d85987cbd:0x70bfdcd5fa9ed649!8m2!3d42.0538844!4d19.4979228!10e5!16s%2Fg%2F1thv1v7v?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#d97706,#fbbf24)'
  },
  {
    name: 'Frida Luani',
    phone: '355683704370',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Gjuhadol,+Shkod%C3%ABr,+Albania/@42.0681554,19.5134996,17z/data=!3m1!4b1!4m6!3m5!1s0x134e00f942f52a21:0xb80935a0ee44b22d!8m2!3d42.0688576!4d19.5158999!16s%2Fg%2F1tgw29t0?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#f59e0b,#fcd34d)'
  },
  {
    name: 'Dr. Bendis Hoxha',
    phone: '355692136564',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Rruga+Europa,+Shkod%C3%ABr,+Albania/@42.0769808,19.5127879,17z/data=!3m1!4b1!4m6!3m5!1s0x134e00f4011c4b5f:0xb8230d8b5e825604!8m2!3d42.0769808!4d19.5153628!16s%2Fg%2F1th548l6?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#fbbf24,#fde68a)'
  },
  {
    name: 'Naxhija Milla',
    phone: '355692627187',
    subject: 'Kimi',
    maps: 'https://www.google.com/maps/place/Bexhisteni/@42.0704094,19.509197,3a,75y,70.12h,106.5t/data=!3m7!1e1!3m5!1s_DMyWluhPqX5deGfaR8UAQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-16.50211282562364%26panoid%3D_DMyWluhPqX5deGfaR8UAQ%26yaw%3D70.12165077524617!7i13312!8i6656!4m6!3m5!1s0x134e013d85987cbd:0x70bfdcd5fa9ed649!8m2!3d42.0538844!4d19.4979228!16s%2Fg%2F1thv1v7v?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['kimi-biologji'],
    accent: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    note: 'Jep vetëm kimi.'
  },
  {
    name: 'Miranda Bala',
    phone: '355692516062',
    subject: 'Italisht',
    maps: 'https://www.google.com/maps/place/AZA+Electronics/@42.070416,19.5122621,17z/data=!3m1!4b1!4m6!3m5!1s0x134e00fa2420fe11:0xaebef4c9349b86f9!8m2!3d42.070416!4d19.514837!16s%2Fg%2F11c5rqzz4y?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['italisht'],
    accent: 'linear-gradient(135deg,#dc2626,#f87171)'
  },
  {
    name: 'Afërdita Bruçeti',
    phone: '355697724356',
    subject: 'Letërsi / Gjuhë',
    maps: 'https://www.google.com/maps/place/Maarif+Shkod%C3%ABr+Campus/@42.0771351,19.510363,3a,75y,357.24h,75.91t/data=!3m7!1e1!3m5!1sRu4Ox7D1T2cNSvuW8lnwZQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.089699759148104%26panoid%3DRu4Ox7D1T2cNSvuW8lnwZQ%26yaw%3D357.2386476441965!7i13312!8i6656!4m6!3m5!1s0x134e015ea8e708e1:0x62bd438bbc0e1614!8m2!3d42.0771233!4d19.5106265!16s%2Fg%2F11l1s445gf?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjuhe-letersi'],
    accent: 'linear-gradient(135deg,#be185d,#f472b6)'
  },
  {
    name: 'Valbona Vila',
    phone: '355670000286',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Parruce,+Shkod%C3%ABr,+Albania/@42.0655949,19.5093466,3a,75y,327.06h,109.41t/data=!3m7!1e1!3m5!1sXu5Y-dsqOXnLzLAq_C3jRg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-19.407779314115274%26panoid%3DXu5Y-dsqOXnLzLAq_C3jRg%26yaw%3D327.0599634022138!7i13312!8i6656!4m6!3m5!1s0x134e00fd333cee93:0xf7dd6cb6c1a156d2!8m2!3d42.0649077!4d19.5095779!16s%2Fg%2F1tnpbq4n?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#d97706,#fbbf24)',
    note: 'Mësuese me eksperiencë mbi 35 vjeçare në mësimdhënie në një nga gjimnazet kryesore të qytetit. Puna e saj ka në qendër marrjen e njohurive themelore të matematikës dhe përgatitjen për provimin e maturës. Përdorimi i teksteve të larmishëm është një ndër parimet kryesore të saj.'
  },
  
];

function escapeHtml(text) {
  return (text || '')
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"');
}

function formatPhone(phone) {
  const digits = (phone || '').replace(/\D/g, '');
  if (!digits) return 'Kontakto krijuesin e website-it';
  if (digits.startsWith('355') && digits.length === 12) {
    return `+355 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 12)}`;
  }
  return `+${digits}`;
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('');
}

function getCourseById(courseId) {
  return COURSES.find(course => course.id === courseId);
}

function buildOwnerRequestLink(teacherName) {
  const text = encodeURIComponent(
`Përshëndetje!

Po ju kontaktoj nga website-i për të kërkuar kontaktin ose rezervimin me mësuesen/mësuesin:
${teacherName}

Ju lutem më ktheni përgjigje kur të keni mundësi. Faleminderit!`
  );
  return `${OWNER.waLink}?text=${text}`;
}

function renderHeroQuickCourses() {
  const list = document.getElementById('heroQuickCourses');
  if (!list) return;

  list.innerHTML = COURSES.slice(0, 4).map(course => `
    <div class="hc-course"><i class="fas ${course.icon}"></i> ${escapeHtml(course.name)} <span class="hc-badge">${course.featured ? 'Prioritet' : 'Aktiv'}</span></div>
  `).join('');
}

function renderCourseCards() {
  const grid = document.getElementById('coursesGrid');
  if (!grid) return;

  grid.innerHTML = COURSES.map((course, index) => `
    <div class="course-card reveal ${index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'} ${course.featured ? 'featured' : ''}">
      <div class="course-card-top ${course.featured ? 'has-spotlight' : ''}">
        ${course.featured ? '<span class="course-spotlight">Më e kërkuar</span>' : ''}
        <span class="course-category-label">${escapeHtml(course.category)}</span>
        <div class="course-icon-wrap" style="background:${course.gradient};"><i class="fas ${course.icon}"></i></div>
        <h3>${escapeHtml(course.name)}</h3>
      </div>
      <div class="course-card-body">
        <p class="course-desc">${escapeHtml(course.description)}</p>
        <div class="course-meta">
          ${course.meta.map(item => `<span class="course-meta-item"><i class="fas fa-check"></i> ${escapeHtml(item)}</span>`).join('')}
        </div>
        <a href="#booking" class="btn-course"><i class="fas fa-arrow-right"></i> Rezervo</a>
      </div>
    </div>
  `).join('');
}

function renderTeachers() {
  const grid = document.getElementById('teachersGrid');
  if (!grid) return;

  grid.innerHTML = TEACHERS.map((teacher, index) => `
    <div class="teacher-card reveal ${index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'} ${teacher.featured ? 'featured' : ''}">
      ${teacher.featured ? '<div class="teacher-flag">Më i kërkuari</div>' : ''}
      <div class="teacher-avatar" style="background:${teacher.accent};">${getInitials(teacher.name)}</div>
      <div class="teacher-name">${escapeHtml(teacher.name)}</div>
      <div class="teacher-subject">${escapeHtml(teacher.subject)}</div>
      <div class="teacher-phone"><i class="fas fa-phone" style="color:var(--orange);margin-right:5px;font-size:0.75rem;"></i> ${escapeHtml(formatPhone(teacher.phone))}</div>
      <div class="teacher-note">${escapeHtml(teacher.note || 'Klikoni WhatsApp ose Vendndodhja për kontakt të shpejtë.')}</div>
      <div class="teacher-actions">
        <a href="${teacher.phone ? `https://wa.me/${teacher.phone}` : buildOwnerRequestLink(teacher.name)}" target="_blank" class="teacher-btn teacher-btn-wa">
          <i class="fab fa-whatsapp"></i> ${teacher.phone ? 'WhatsApp' : 'Kërko Kontaktin'}
        </a>
        <a href="${teacher.maps}" target="_blank" class="teacher-btn teacher-btn-map">
          <i class="fas fa-map-marker-alt"></i> Vendndodhja
        </a>
        ${teacher.instagram ? `<a href="${teacher.instagram}" target="_blank" class="teacher-btn" style="background:#e1306c;color:#fff;"><i class="fab fa-instagram"></i> Instagram</a>` : ''}
      </div>
    </div>
  `).join('');
}

function renderCourseOptions() {
  const select = document.getElementById('preferredCourse');
  if (!select) return;

  select.innerHTML = `
    <option value="" disabled selected>— Zgjidhni kursin —</option>
    ${COURSES.map(course => `<option value="${course.id}">${escapeHtml(course.name)}</option>`).join('')}
  `;
}

function renderFooterCourses() {
  const list = document.getElementById('footerCourseLinks');
  if (!list) return;
  list.innerHTML = COURSES.map(course => `<li><a href="#courses">${escapeHtml(course.name)}</a></li>`).join('');
}

function renderCounts() {
  const courseCount = document.getElementById('heroCourseCount');
  const teacherCount = document.getElementById('heroTeacherCount');
  const footerYear = document.getElementById('footerYear');

  if (courseCount) courseCount.textContent = String(COURSES.length);
  if (teacherCount) teacherCount.textContent = String(TEACHERS.length);
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.innerHTML = mobileMenu.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
}));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
});

const ro = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

function observeReveals() {
  document.querySelectorAll('.reveal').forEach(element => ro.observe(element));
}

document.querySelectorAll('.checkbox-label input').forEach(cb => {
  cb.addEventListener('change', function() {
    this.closest('.checkbox-label').classList.toggle('checked', this.checked);
  });
});

let selectedTeacher = null;

function updateBookingRouteNote() {
  const note = document.getElementById('bookingRouteNote');
  if (!note) return;

  if (!selectedTeacher) {
    note.textContent = 'Kërkesa do të dërgohet direkt te mësuesi/ja që zgjidhni. Nëse mungon numri direkt, kërkesa shkon te krijuesi i website-it.';
    return;
  }

  if (!selectedTeacher.phone) {
    note.textContent = `Për ${selectedTeacher.name}, kërkesa do të shkojë te krijuesi i website-it (${OWNER.displayPhone}) sepse numri direkt nuk është shtuar ende.`;
    return;
  }

  note.textContent = `Kërkesa do të dërgohet direkt te ${selectedTeacher.name}.`;
}

function renderTeacherPicker() {
  const picker = document.getElementById('teacherPicker');
  const selectedCourseId = document.getElementById('preferredCourse').value;
  if (!picker) return;

  if (selectedTeacher && selectedCourseId && !selectedTeacher.courseIds.includes(selectedCourseId)) {
    selectedTeacher = null;
  }

  picker.innerHTML = TEACHERS.map(teacher => {
    const matches = !selectedCourseId || teacher.courseIds.includes(selectedCourseId);
    const isSelected = selectedTeacher && selectedTeacher.name === teacher.name;

    return `
      <div class="teacher-pick-card ${isSelected ? 'selected' : ''} ${selectedCourseId && !matches ? 'disabled' : ''}" data-teacher="${escapeHtml(teacher.name)}">
        <div class="tp-check"><i class="fas fa-check"></i></div>
        <div class="tp-avatar" style="background:${teacher.accent};">${getInitials(teacher.name)}</div>
        <div class="tp-name">${escapeHtml(teacher.name)}</div>
        <div class="tp-subj">${escapeHtml(teacher.subject)}</div>
      </div>
    `;
  }).join('');

  picker.querySelectorAll('.teacher-pick-card').forEach(card => {
    if (card.classList.contains('disabled')) return;
    card.addEventListener('click', () => {
      document.querySelectorAll('.teacher-pick-card').forEach(item => item.classList.remove('selected'));
      card.classList.add('selected');
      selectedTeacher = TEACHERS.find(teacher => teacher.name === card.dataset.teacher) || null;
      updateBookingRouteNote();
      validateForm();
    });
  });
}

function validateForm() {
  const name = document.getElementById('studentName').value.trim();
  const course = document.getElementById('preferredCourse').value;
  const schedule = document.getElementById('schedule').value;
  const days = [...document.querySelectorAll('input[name="day"]:checked')].map(input => input.value);
  const button = document.getElementById('sendWhatsApp');

  button.disabled = !(name && course && schedule && days.length > 0 && selectedTeacher);
}

['studentName', 'preferredCourse', 'schedule', 'difficulty', 'goal'].forEach(id => {
  const element = document.getElementById(id);
  if (element) element.addEventListener('change', validateForm);
  if (element) element.addEventListener('input', validateForm);
});

document.querySelectorAll('input[name="day"]').forEach(cb => cb.addEventListener('change', validateForm));
document.getElementById('preferredCourse').addEventListener('change', () => {
  renderTeacherPicker();
  updateBookingRouteNote();
  validateForm();
});

function sendToWhatsApp() {
  const name = document.getElementById('studentName').value.trim();
  const phone = document.getElementById('studentPhone').value.trim();
  const courseId = document.getElementById('preferredCourse').value;
  const courseData = getCourseById(courseId);
  const course = courseData ? courseData.name : '';
  const difficulty = document.getElementById('difficulty').value.trim();
  const goal = document.getElementById('goal').value;
  const schedule = document.getElementById('schedule').value;
  const days = [...document.querySelectorAll('input[name="day"]:checked')].map(input => input.value).join(', ');

  if (!selectedTeacher) {
    alert('Ju lutem zgjidhni një mësues/e!');
    return;
  }

  const greetingParagraph =
`Përshëndetje me respekt, ${selectedTeacher.name}!

Ju shkruaj me interes për kursin e ${course} që është listuar në website. Dëshiroj të rezervoj një orar dhe të marr më shumë informacion rreth zhvillimit të mësimit 1 me 1.`;

  const message = encodeURIComponent(
`${greetingParagraph}

━━━━━━━━━━━━━━━━━━━━
TË DHËNAT E KËRKESËS
━━━━━━━━━━━━━━━━━━━━
Emri i nxënësit: ${name}${phone ? '\nTelefon kontakti: ' + phone : ''}
Kursi i zgjedhur: ${course}
Vështirësitë kryesore: ${difficulty || '—'}
Qëllimi: ${goal || '—'}
Ditët e preferuara: ${days}
Orari i preferuar: ${schedule}
━━━━━━━━━━━━━━━━━━━━

Ju falënderoj për kohën dhe vëmendjen! Pres përgjigjen tuaj.`
  );

  // Dërgoni email njoftim me EmailJS
  if (EMAILJS_SERVICE_ID !== 'VENDOS_SERVICE_ID_KETU') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      student_name : name,
      student_phone: phone || '—',
      course       : course,
      teacher      : selectedTeacher.name,
      days         : days,
      schedule     : schedule,
      goal         : goal || '—',
      difficulty   : difficulty || '—'
    }).catch(function(err) {
      console.warn('EmailJS error:', err);
    });
  }

  const recipient = selectedTeacher.phone || OWNER.phone;
  window.open(`https://wa.me/${recipient}?text=${message}`, '_blank');
}

function sendContactMessage() {
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const message = document.getElementById('cMsg').value.trim();
  const success = document.getElementById('contactSuccess');

  if (!name || !message) {
    alert('Ju lutem plotësoni emrin dhe mesazhin!');
    return;
  }

  const payload = encodeURIComponent(
`Përshëndetje!

Po ju kontaktoj nga website-i.

Emri: ${name}
${phone ? `Telefoni: ${phone}\n` : ''}Mesazhi:
${message}`
  );

  window.open(`${OWNER.waLink}?text=${payload}`, '_blank');
  document.getElementById('cName').value = '';
  document.getElementById('cPhone').value = '';
  document.getElementById('cMsg').value = '';
  success.style.display = 'block';
}

function sendTeacherApplication() {
  const name = document.getElementById('joinName').value.trim();
  const phone = document.getElementById('joinPhone').value.trim();
  const subject = document.getElementById('joinSubject').value.trim();
  const maps = document.getElementById('joinMaps').value.trim();
  const notes = document.getElementById('joinNotes').value.trim();
  const success = document.getElementById('joinSuccess');

  if (!name || !phone || !subject || !maps) {
    alert('Ju lutem plotësoni emrin, telefonin, lëndën dhe linkun e vendndodhjes!');
    return;
  }

  const payload = encodeURIComponent(
`Përshëndetje!

Po dërgoj të dhënat për t'u shtuar si mësues/e në website.

Emri: ${name}
WhatsApp: ${phone}
Lënda / Klasat: ${subject}
Vendndodhja: ${maps}
${notes ? `Shënime shtesë:\n${notes}` : 'Shënime shtesë: —'}

Ju lutem më njoftoni pasi të shtohem në website. Faleminderit!`
  );

  window.open(`${OWNER.waLink}?text=${payload}`, '_blank');
  document.getElementById('joinName').value = '';
  document.getElementById('joinPhone').value = '';
  document.getElementById('joinSubject').value = '';
  document.getElementById('joinMaps').value = '';
  document.getElementById('joinNotes').value = '';
  success.style.display = 'block';
}

function switchTab(tab) {
  const tabs = document.querySelectorAll('.reviews-tab');
  if (tab === 'write') {
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
    document.getElementById('panelWrite').classList.add('active');
    document.getElementById('panelTestimonials').classList.remove('active');
  } else {
    tabs[1].classList.add('active');
    tabs[0].classList.remove('active');
    document.getElementById('panelTestimonials').classList.add('active');
    document.getElementById('panelWrite').classList.remove('active');
  }
}

let reviewRating = 0;
const REVIEWS_INBOX_PHONE = OWNER.phone;
const APPROVED_REVIEWS = [
  {
    name: 'Elvira Haxhiu',
    meta: 'Nënë e Ardianit, 16 vjeç',
    rating: 5,
    text: 'Djali im ka ndryshuar krejtësisht qëndrimin ndaj matematikës. Nga nota 5 ka arritur në 9 brenda tre muajsh. Mësuesi është i jashtëzakonshëm dhe shumë i durueshëm.'
  },
  {
    name: 'Jon B.',
    meta: 'Nxënës i gjuhës angleze',
    rating: 5,
    text: 'Më parë kisha frikë të flisja anglisht. Tani po komunikoj shumë më lirshëm dhe notat e mia janë përmirësuar ndjeshëm. Orët janë të qarta dhe shumë praktike.'
  },
  {
    name: 'Prind i Sarës',
    meta: 'Prind i nxënëses, klasa 9',
    rating: 5,
    text: 'Kursi i gjermanishtes i dha vajzës sime besim dhe disiplinë. Brenda pak javësh filloi të lexojë dhe të shkruajë më mirë se sa prisnim.'
  }
];

const starPicker = document.getElementById('starPicker');
starPicker.querySelectorAll('i').forEach(star => {
  star.addEventListener('mouseover', function() {
    const value = parseInt(this.dataset.val, 10);
    starPicker.querySelectorAll('i').forEach((item, index) => item.classList.toggle('active', index < value));
  });

  star.addEventListener('mouseout', () => {
    starPicker.querySelectorAll('i').forEach((item, index) => item.classList.toggle('active', index < reviewRating));
  });

  star.addEventListener('click', function() {
    reviewRating = parseInt(this.dataset.val, 10);
    starPicker.querySelectorAll('i').forEach((item, index) => item.classList.toggle('active', index < reviewRating));
  });
});

function renderReviews() {
  const list = document.getElementById('reviewsList');
  if (APPROVED_REVIEWS.length === 0) {
    list.innerHTML = '<div class="empty-reviews"><i class="fas fa-comments"></i><p>Ende nuk ka komente të publikuara. Dërgoni tuajin në WhatsApp dhe do të shtohet pasi të verifikohet.</p></div>';
    return;
  }

  list.innerHTML = APPROVED_REVIEWS.slice().reverse().map(review => {
    const stars = Array.from({ length: 5 }, (_, index) => `<i class="fas fa-star${index < review.rating ? '' : ' empty'}"></i>`).join('');
    return `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${review.name.charAt(0).toUpperCase()}</div>
          <div>
            <div class="review-name">${escapeHtml(review.name)}</div>
            <div class="review-date">${escapeHtml(review.meta || 'Koment i verifikuar')}</div>
          </div>
        </div>
        <div class="review-stars">${stars}</div>
        <div class="review-text">${escapeHtml(review.text)}</div>
      </div>`;
  }).join('');
}

function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const role = document.getElementById('reviewRole').value;
  const text = document.getElementById('reviewText').value.trim();
  const successMsg = document.getElementById('reviewSuccess');

  if (!name || !role || !text || reviewRating === 0) {
    alert('Ju lutem plotësoni emrin, rolin, komentin dhe vlerësimin me yje!');
    return;
  }

  const stars = `${'★'.repeat(reviewRating)}${'☆'.repeat(5 - reviewRating)}`;
  const payload = encodeURIComponent(
`Përshëndetje EduShkodër!

Po dërgoj një koment të ri për shqyrtim dhe publikim në faqe.

Emri: ${name}
Roli: ${role}
Vlerësimi: ${stars} (${reviewRating}/5)
Komenti:
${text}

Ju lutem verifikojeni dhe publikojeni nëse është i përshtatshëm. Faleminderit!`
  );

  window.open(`https://wa.me/${REVIEWS_INBOX_PHONE}?text=${payload}`, '_blank');
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewRole').selectedIndex = 0;
  document.getElementById('reviewText').value = '';
  reviewRating = 0;
  starPicker.querySelectorAll('i').forEach(item => item.classList.remove('active'));
  successMsg.style.display = 'block';
}

renderCounts();
renderHeroQuickCourses();
renderCourseCards();
renderTeachers();
renderCourseOptions();
renderFooterCourses();
renderTeacherPicker();
renderReviews();
observeReveals();
updateBookingRouteNote();
validateForm();