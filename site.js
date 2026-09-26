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
const { COURSES, TEACHERS, TEACHER_PROFILE_PATHS } = window.EDUSHKODER_DATA;

const PUBLIC_TEACHERS = TEACHERS.filter(teacher => !teacher.courseIds.includes('konkursi-kangur'));

function escapeHtml(text) {
  return (text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatPhone(phone) {
  const digits = (phone || '').replace(/\D/g, '');
  if (!digits) return 'Kontakto krijuesin e website-it';
  if (digits.startsWith('355') && digits.length === 12) {
    return `+355 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 12)}`;
  }
  return `+${digits}`;
}

function coursePageHref(course) {
  return course.id === 'konkursi-kangur'
    ? 'konkursi-kangur-shkoder.html'
    : `${course.id}.html`;
}

const TEACHER_SLUGS = Object.fromEntries(
  Object.entries(TEACHER_PROFILE_PATHS).map(([name, file]) => [file.replace('.html', ''), name])
);

const TEACHER_FILTER_OPTIONS = [
  { value: '', label: 'Të gjitha lëndët' },
  ...Array.from(new Set(PUBLIC_TEACHERS.flatMap(teacher => teacher.courseIds))).map(courseId => {
    const course = COURSES.find(item => item.id === courseId);
    return { value: courseId, label: course ? course.name : courseId };
  })
];

let teacherFilterQuery = '';
let teacherFilterCourse = '';

function teacherProfileHref(teacher) {
  return TEACHER_PROFILE_PATHS[teacher.name] || '#teachers';
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
    <div class="hc-course"><i class="fas ${course.icon}" aria-hidden="true"></i> ${escapeHtml(course.name)} <span class="hc-badge">${course.featured ? 'Prioritet' : 'Aktiv'}</span></div>
  `).join('');
}

function renderCourseCards() {
  const grid = document.getElementById('coursesGrid');
  if (!grid) return;

  grid.innerHTML = COURSES.map((course, index) => {
    const kangur = course.id === 'konkursi-kangur';
    const teacherCount = PUBLIC_TEACHERS.filter(teacher => teacher.courseIds.includes(course.id)).length;
    const meta = [`${teacherCount} mësues`, ...course.meta];
    const courseHref = coursePageHref(course);
    const courseBtn = kangur ? 'Detaje &amp; kontakte' : 'Shiko Detajet';
    const courseIconClass = 'fas fa-arrow-up-right-from-square';
    return `
    <div class="course-card reveal ${index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'} ${course.featured ? 'featured' : ''}">
      <div class="course-card-top ${course.featured ? 'has-spotlight' : ''}">
        ${course.featured ? `<span class="course-spotlight">${escapeHtml(course.featuredLabel || 'Më e kërkuar')}</span>` : ''}
        <span class="course-category-label">${escapeHtml(course.category)}</span>
        <div class="course-icon-wrap" style="background:${course.gradient};"><i class="fas ${course.icon}" aria-hidden="true"></i></div>
        <h3>${escapeHtml(course.name)}</h3>
      </div>
      <div class="course-card-body">
        <p class="course-desc">${escapeHtml(course.description)}</p>
        <div class="course-meta">
          ${meta.map(item => `<span class="course-meta-item"><i class="fas fa-check" aria-hidden="true"></i> ${escapeHtml(item)}</span>`).join('')}
        </div>
        <a href="${courseHref}" class="btn-course"><i class="${courseIconClass}" aria-hidden="true"></i> ${courseBtn}</a>
      </div>
    </div>
    `;
  }).join('');
}

function teacherMatchesFilter(teacher) {
  const query = teacherFilterQuery.trim().toLowerCase();
  if (query) {
    const haystack = `${teacher.name} ${teacher.subject}`.toLowerCase();
    if (!haystack.includes(query)) return false;
  }
  if (teacherFilterCourse && !teacher.courseIds.includes(teacherFilterCourse)) return false;
  return true;
}

function isKangarooTeacher(teacher) {
  return teacher.courseIds.includes('konkursi-kangur');
}

function teacherPrimaryAction(teacher) {
  if (teacher.phone) {
    return `<a href="https://wa.me/${teacher.phone}" target="_blank" rel="noopener noreferrer" class="teacher-btn teacher-btn-wa">
      <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
    </a>`;
  }
  if (isKangarooTeacher(teacher)) {
    return `<a href="konkursi-kangur-shkoder.html" class="teacher-btn teacher-btn-wa">
      <i class="fas fa-circle-info" aria-hidden="true"></i> Detaje &amp; kontakte
    </a>`;
  }
  return `<a href="${buildOwnerRequestLink(teacher.name)}" target="_blank" rel="noopener noreferrer" class="teacher-btn teacher-btn-wa">
    <i class="fab fa-whatsapp" aria-hidden="true"></i> Kërko Kontaktin
  </a>`;
}

function renderTeacherToolbar() {
  const toolbar = document.getElementById('teacherToolbar');
  if (!toolbar) return;

  toolbar.innerHTML = `
    <div class="teacher-toolbar">
      <div class="teacher-search-wrap">
        <i class="fas fa-search" aria-hidden="true"></i>
        <input type="search" id="teacherSearch" placeholder="Kërko mësues ose lëndë..." value="${escapeHtml(teacherFilterQuery)}" aria-label="Kërko mësues" />
      </div>
      <select id="teacherSubjectFilter" aria-label="Filtro sipas lëndës">
        ${TEACHER_FILTER_OPTIONS.map(option => `
          <option value="${option.value}" ${teacherFilterCourse === option.value ? 'selected' : ''}>${escapeHtml(option.label)}</option>
        `).join('')}
      </select>
    </div>
    <p class="teacher-filter-note" id="teacherFilterNote"></p>
  `;

  const searchInput = document.getElementById('teacherSearch');
  const subjectFilter = document.getElementById('teacherSubjectFilter');

  searchInput.addEventListener('input', () => {
    teacherFilterQuery = searchInput.value;
    renderTeachers();
  });

  subjectFilter.addEventListener('change', () => {
    teacherFilterCourse = subjectFilter.value;
    renderTeachers();
  });
}

function renderTeachers() {
  const grid = document.getElementById('teachersGrid');
  if (!grid) return;

  const filtered = PUBLIC_TEACHERS.filter(teacherMatchesFilter);
  const note = document.getElementById('teacherFilterNote');
  if (note) {
    note.textContent = filtered.length === PUBLIC_TEACHERS.length
      ? `${PUBLIC_TEACHERS.length} mësues të listuar`
      : `${filtered.length} rezultat${filtered.length === 1 ? '' : 'e'} nga ${PUBLIC_TEACHERS.length} mësues`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="teacher-empty"><i class="fas fa-user-slash" aria-hidden="true"></i><p>Nuk u gjet mësues për këtë kërkim. Provoni një lëndë tjetër ose pastroni filtrin.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map((teacher, index) => `
    <div class="teacher-card reveal visible ${index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'} ${teacher.featured ? 'featured' : ''}">
      ${teacher.featured ? '<div class="teacher-flag">Më i kërkuari</div>' : ''}
      <div class="teacher-avatar" style="background:${teacher.accent};">${getInitials(teacher.name)}</div>
      <div class="teacher-name">${escapeHtml(teacher.name)}</div>
      <div class="teacher-subject">${escapeHtml(teacher.subject)}</div>
      <div class="teacher-phone"><i class="fas fa-phone" style="color:var(--orange);margin-right:5px;font-size:0.75rem;" aria-hidden="true"></i> ${escapeHtml(formatPhone(teacher.phone))}</div>
      <div class="teacher-note">${escapeHtml(teacher.note || 'Klikoni WhatsApp ose Vendndodhja për kontakt të shpejtë.')}</div>
      <div class="teacher-actions">
        ${teacherPrimaryAction(teacher)}
        <a href="${teacherProfileHref(teacher)}" class="teacher-btn teacher-btn-profile">
          <i class="fas fa-user" aria-hidden="true"></i> Profili
        </a>
        <a href="${teacher.maps}" target="_blank" rel="noopener noreferrer" class="teacher-btn teacher-btn-map">
          <i class="fas fa-map-marker-alt" aria-hidden="true"></i> Vendndodhja
        </a>
        ${teacher.instagram ? `<a href="${teacher.instagram}" target="_blank" rel="noopener noreferrer" class="teacher-btn" style="background:#e1306c;color:#fff;"><i class="fab fa-instagram" aria-hidden="true"></i> Instagram</a>` : ''}
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
  list.innerHTML = COURSES.map(course => {
    const href = coursePageHref(course);
    return `<li><a href="${href}">${escapeHtml(course.name)}</a></li>`;
  }).join('');
}

function renderCounts() {
  const courseCount = document.getElementById('heroCourseCount');
  const teacherCount = document.getElementById('heroTeacherCount');
  const footerYear = document.getElementById('footerYear');

  if (courseCount) courseCount.textContent = String(COURSES.length);
  if (teacherCount) teacherCount.textContent = String(PUBLIC_TEACHERS.length);
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
function setMobileMenu(open) {
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  hamburger.innerHTML = open
    ? '<i class="fas fa-times" aria-hidden="true"></i>'
    : '<i class="fas fa-bars" aria-hidden="true"></i>';
}

hamburger.addEventListener('click', () => {
  setMobileMenu(!mobileMenu.classList.contains('open'));
});

mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setMobileMenu(false);
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
    if (isKangarooTeacher(selectedTeacher)) {
      note.textContent = 'Për Math Kangaroo, shikoni kontaktet e koordinatorëve në faqen e konkursit. Pyetje të përgjithshme shkojnë te krijuesi i website-it.';
      return;
    }
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
      <div class="teacher-pick-card ${isSelected ? 'selected' : ''} ${selectedCourseId && !matches ? 'disabled' : ''}" data-teacher="${escapeHtml(teacher.name)}" role="button" tabindex="${selectedCourseId && !matches ? '-1' : '0'}" aria-pressed="${isSelected ? 'true' : 'false'}">
        <div class="tp-check"><i class="fas fa-check" aria-hidden="true"></i></div>
        <div class="tp-avatar" style="background:${teacher.accent};">${getInitials(teacher.name)}</div>
        <div class="tp-name">${escapeHtml(teacher.name)}</div>
        <div class="tp-subj">${escapeHtml(teacher.subject)}</div>
      </div>
    `;
  }).join('');

  function selectTeacherCard(card) {
    document.querySelectorAll('.teacher-pick-card').forEach(item => {
      item.classList.remove('selected');
      item.setAttribute('aria-pressed', 'false');
    });
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');
    selectedTeacher = TEACHERS.find(teacher => teacher.name === card.dataset.teacher) || null;
    updateBookingRouteNote();
    validateForm();
  }

  picker.querySelectorAll('.teacher-pick-card').forEach(card => {
    if (card.classList.contains('disabled')) return;
    card.addEventListener('click', () => selectTeacherCard(card));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectTeacherCard(card);
      }
    });
  });
}

function normalizeAlbanianPhone(value) {
  const digits = (value || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('355') && digits.length === 12) return digits;
  if (digits.startsWith('0') && digits.length === 10) return `355${digits.slice(1)}`;
  if (digits.length === 9 && digits.startsWith('6')) return `355${digits}`;
  return digits;
}

function validateForm() {
  const name = document.getElementById('studentName').value.trim();
  const course = document.getElementById('preferredCourse').value;
  const schedule = document.getElementById('schedule').value;
  const days = [...document.querySelectorAll('input[name="day"]:checked')].map(input => input.value);
  const button = document.getElementById('sendWhatsApp');
  const phoneInput = document.getElementById('studentPhone');
  const phoneHint = document.getElementById('studentPhoneHint');

  if (phoneInput && phoneHint) {
    const raw = phoneInput.value.trim();
    if (!raw) {
      phoneHint.textContent = '';
      phoneInput.setCustomValidity('');
    } else {
      const normalized = normalizeAlbanianPhone(raw);
      const valid = normalized.startsWith('355') && normalized.length === 12;
      phoneHint.textContent = valid ? '' : 'Format i sugjeruar: +355 6X XXX XXXX';
      phoneInput.setCustomValidity(valid ? '' : 'Numri i telefonit nuk duket i saktë.');
    }
  }

  button.disabled = !(name && course && schedule && days.length > 0 && selectedTeacher);
}

['studentName', 'studentPhone', 'preferredCourse', 'schedule', 'difficulty', 'goal'].forEach(id => {
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
  const optionalDetails = [
    difficulty ? `Vështirësitë / kërkesa: ${difficulty}` : '',
    goal ? `Qëllimi: ${goal}` : ''
  ].filter(Boolean).join('\n');

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
${optionalDetails ? optionalDetails + '\n' : ''}Ditët e preferuara: ${days}
Orari i preferuar: ${schedule}
━━━━━━━━━━━━━━━━━━━━

Ju falënderoj për kohën dhe vëmendjen! Pres përgjigjen tuaj.`
  );

  // Dërgoni email njoftim me EmailJS
  if (window.emailjs && EMAILJS_SERVICE_ID !== 'VENDOS_SERVICE_ID_KETU') {
    window.emailjs.init(EMAILJS_PUBLIC_KEY);
    window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
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
    name: 'Andi M.',
    role: 'Prind',
    service: 'Matematikë',
    rating: 5,
    text: 'Fëmija im përmirësoi notat e matematikës brenda dy muajve. Mësueset janë profesioniste të vërteta.',
    meta: 'Koment i verifikuar · 2026'
  },
  {
    name: 'Besa K.',
    role: 'Prind',
    service: 'Gjermanisht',
    rating: 5,
    text: 'Gjeta mësuesen e gjermanishtes perfekte për vajzën time. Rezervimi ishte i lehtë dhe i shpejtë.',
    meta: 'Koment i verifikuar · 2026'
  },
  {
    name: 'Gent L.',
    role: 'Prind',
    service: 'Anglisht',
    rating: 5,
    text: 'Shërbim i shkëlqyer. Mësueses së anglishtes i rekomanduam gjithë familjes tonë.',
    meta: 'Koment i verifikuar · 2026'
  }
];

const starPicker = document.getElementById('starPicker');
if (starPicker) starPicker.querySelectorAll('i').forEach(star => {
  star.addEventListener('mouseover', function() {
    const value = parseInt(this.dataset.val, 10);
    starPicker.querySelectorAll('i').forEach((item, index) => item.classList.toggle('active', index < value));
  });

  star.addEventListener('mouseout', () => {
    starPicker.querySelectorAll('i').forEach((item, index) => item.classList.toggle('active', index < reviewRating));
  });

  star.addEventListener('click', function() {
    setReviewRating(parseInt(this.dataset.val, 10));
  });

  star.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setReviewRating(parseInt(this.dataset.val, 10));
    }
  });
});

function setReviewRating(value) {
  if (!starPicker) return;
  reviewRating = value;
  starPicker.querySelectorAll('i').forEach((item, index) => {
    item.classList.toggle('active', index < reviewRating);
    item.setAttribute('aria-checked', index + 1 === reviewRating ? 'true' : 'false');
  });
}

function renderReviewSummary() {
  const avgEl = document.getElementById('reviewSummaryAvg');
  const countEl = document.getElementById('reviewSummaryCount');
  if (!avgEl || !countEl) return;

  const count = APPROVED_REVIEWS.length;
  countEl.textContent = String(count);
  if (count === 0) {
    avgEl.textContent = '—';
    return;
  }

  const average = APPROVED_REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count;
  avgEl.textContent = average.toFixed(1);
}

function renderReviews() {
  renderReviewSummary();
  const list = document.getElementById('reviewsList');
  if (APPROVED_REVIEWS.length === 0) {
    list.innerHTML = '<div class="empty-reviews"><i class="fas fa-comments"></i><p>Ende nuk ka komente të publikuara. Dërgoni tuajin në WhatsApp dhe do të shtohet pasi të verifikohet.</p></div>';
    return;
  }

  list.innerHTML = APPROVED_REVIEWS.slice().reverse().map(review => {
    const stars = Array.from({ length: 5 }, (_, index) => `<i class="fas fa-star${index < review.rating ? '' : ' empty'}" aria-hidden="true"></i>`).join('');
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
        ${review.service ? `<div class="review-service"><i class="fas fa-book-open" aria-hidden="true"></i>${escapeHtml(review.service)}</div>` : ''}
        <div class="review-text">${escapeHtml(review.text)}</div>
      </div>`;
  }).join('');
}

function renderTestimonials() {
  const grid = document.querySelector('#panelTestimonials .testimonials-grid');
  if (!grid) return;

  grid.innerHTML = APPROVED_REVIEWS.map(review => {
    const stars = Array.from({ length: 5 }, (_, index) => `<i class="fas fa-star${index < review.rating ? '' : ' empty'}" aria-hidden="true"></i>`).join('');
    return `
      <div class="testi-card">
        <div class="testi-quote">“</div>
        <p class="testi-text">${escapeHtml(review.text)}</p>
        <div class="stars">${stars}</div>
        <div class="testi-author">
          <div class="testi-avatar">${escapeHtml(review.name.charAt(0).toUpperCase())}</div>
          <div>
            <div class="testi-name">${escapeHtml(review.name)}</div>
            <div class="testi-role">${escapeHtml(review.role)} · ${escapeHtml(review.service)}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderReviewCourseOptions() {
  const select = document.getElementById('reviewCourse');
  if (!select) return;

  select.innerHTML = `
    <option value="" selected>— Zgjidhni nëse dëshironi —</option>
    ${COURSES.map(course => `<option value="${escapeHtml(course.name)}">${escapeHtml(course.name)}</option>`).join('')}
  `;
}

function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const role = document.getElementById('reviewRole').value;
  const course = document.getElementById('reviewCourse').value;
  const text = document.getElementById('reviewText').value.trim();
  const consent = document.getElementById('reviewConsent').checked;
  const successMsg = document.getElementById('reviewSuccess');

  if (!name || !role || !text || reviewRating === 0 || !consent) {
    alert('Ju lutem plotësoni emrin, rolin, komentin, vlerësimin me yje dhe pranimin për publikim!');
    return;
  }

  const stars = `${'★'.repeat(reviewRating)}${'☆'.repeat(5 - reviewRating)}`;
  const payload = encodeURIComponent(
`Përshëndetje EduShkodër!

Po dërgoj një koment të ri për shqyrtim dhe publikim në faqe.

Emri: ${name}
Roli: ${role}
Kursi/Mësuesi: ${course || 'Nuk u zgjodh'}
Vlerësimi: ${stars} (${reviewRating}/5)
Komenti:
${text}

Kam pranuar që komenti të shqyrtohet dhe, nëse miratohet, të publikohet në faqen EduShkodër. Faleminderit!`
  );

  window.open(`https://wa.me/${REVIEWS_INBOX_PHONE}?text=${payload}`, '_blank');
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewRole').selectedIndex = 0;
  document.getElementById('reviewCourse').selectedIndex = 0;
  document.getElementById('reviewText').value = '';
  document.getElementById('reviewConsent').checked = false;
  reviewRating = 0;
  setReviewRating(0);
  successMsg.style.display = 'block';
}

function applyDeepLinkBooking() {
  const params = new URLSearchParams(window.location.search);
  const teacherSlug = params.get('teacher');
  const courseSelect = document.getElementById('preferredCourse');
  if (!teacherSlug || !TEACHER_SLUGS[teacherSlug]) return;

  const teacher = TEACHERS.find(item => item.name === TEACHER_SLUGS[teacherSlug]);
  if (!teacher) return;

  selectedTeacher = teacher;
  if (courseSelect && teacher.courseIds.length > 0) {
    courseSelect.value = teacher.courseIds[0];
  }

  renderTeacherPicker();
  updateBookingRouteNote();
  validateForm();

  const selectedCard = document.querySelector(`.teacher-pick-card[data-teacher="${CSS.escape(teacher.name)}"]`);
  if (selectedCard) {
    selectedCard.classList.add('selected');
    selectedCard.setAttribute('aria-pressed', 'true');
  }

  if (window.location.hash === '#booking' || params.get('book') === '1') {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initMobileBookCta() {
  const cta = document.getElementById('mobileBookCta');
  const bookingSection = document.getElementById('booking');
  if (!cta || !bookingSection) return;

  const toggle = () => {
    const rect = bookingSection.getBoundingClientRect();
    const bookingVisible = rect.top < window.innerHeight * 0.55 && rect.bottom > 120;
    cta.classList.toggle('hidden', bookingVisible);
  };

  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  window.addEventListener('resize', toggle);
}

renderCounts();
renderHeroQuickCourses();
renderCourseCards();
renderTeacherToolbar();
renderTeachers();
renderCourseOptions();
renderFooterCourses();
renderTeacherPicker();
applyDeepLinkBooking();
renderReviewCourseOptions();
renderReviews();
renderTestimonials();
observeReveals();
updateBookingRouteNote();
validateForm();
initMobileBookCta();

document.querySelectorAll('i.fas, i.fab').forEach(icon => {
  if (!icon.closest('#starPicker') && !icon.hasAttribute('aria-hidden')) {
    icon.setAttribute('aria-hidden', 'true');
  }
});
