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
    meta: ['1 mësuese', '1 me 1', 'Shkodër']
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
  },
  {
    id: 'konkursi-kangur',
    name: 'Konkursi Math Kangaroo — Shkodër',
    category: 'Kurse të veçanta',
    icon: 'fa-trophy',
    gradient: 'linear-gradient(135deg,#15803d,#fbbf24)',
    description: 'Konkurs ndërkombëtar matematikë për klasat 1–12: në Shkodër me qendra sipas kangaroo.al (p.sh. Lider Academy në Sheshin 2 Prilli) dhe modality online. EduShkodër përmblidh kontakte dhe harta për kërkime si Math Kangaroo Shkodër dhe regjistrim në Shqipëri.',
    meta: ['Klasa 1–12', 'Math Kangaroo · Shqipëri', 'Lider Academy · kontakte']
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
    note: 'Eksperiencë 37 vjeçare në mësimdhënie. Ushtron profesionin me përkushtim duke i kushtuar vëmendje të veçantë empatisë dhe gjithpërfshirjes të secilit nxënës. Përgatitje ditore e mësimeve dhe program i avancuar. Mbështetje në tekste jashtëshkollore dhe program i personalizuar sipas nevojave të fëmijëve.',
    instagram: 'https://www.instagram.com/libra.education/'
  },
  {
    name: 'Mirsada Kadia',
    phone: '355684830000',
    subject: 'Gjermanisht',
    maps: 'https://www.google.com/maps/place/Universiteti+i+Shkodr%C3%ABs+%22Luigj+Gurakuqi%22/@42.0663747,19.5101781,3a,75y,302.59h,77.26t/data=!3m7!1e1!3m5!1sWjhnIF2WEkpkOPeY6XCEWw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.742345076382705%26panoid%3DWjhnIF2WEkpkOPeY6XCEWw%26yaw%3D302.58838241255006!7i13312!8i6656!4m6!3m5!1s0x134e00fcd146f0df:0xbee74fa0b9f6dbfa!8m2!3d42.0662237!4d19.5095856!16s%2Fm%2F0264mz5?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjermanisht'],
    accent: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    note: 'Ndër mësueset më të kërkuara të gjermanishtes në Shkodër, me përvojë solide dhe metodologji të provuar. Ushtron profesionin në disa nga shkollat më të mira të qytetit dhe njihet për qasjen e saj të personalizuar. Nxënësit e saj arrijnë vazhdimisht rezultate ndër më të larta.'
  },
  {
    name: 'Roberta Naraci',
    phone: '355674060071',
    subject: 'Gjermanisht',
    maps: 'https://www.google.com/maps/place/Shkolla+e+mesme+Teknike+Pyjore+%E2%80%9CKole+Margjini%E2%80%9D/@42.0690468,19.5241354,3a,75y,73.5h,81.77t/data=!3m7!1e1!3m5!1shajw5qc7JNzO0dy1bUmmFw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.23161271848251%26panoid%3Dhajw5qc7JNzO0dy1bUmmFw%26yaw%3D73.49779449416356!7i13312!8i6656!4m6!3m5!1s0x134e01f85c2a6ed1:0xb3575bbf7aea15c4!8m2!3d42.0694939!4d19.5240147!16s%2Fg%2F11qnvn0sv7?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjermanisht'],
    accent: 'linear-gradient(135deg,#38bdf8,#60a5fa)',
    note: 'Mësuese e gjermanishtes me eksperiencë të pasur dhe metodologji bashkëkohore. Ka punuar në disa nga shkollat kryesore të Shkodrës dhe njihet për qasjen e saj miqësore e efektive. Cilësia e mësimeve të saj reflektohet drejtpërsëdrejti në rezultatet e shkëlqyera të nxënësve.'
  },
  {
    name: 'Diana Boriqi',
    phone: '355673890074',
    subject: 'Anglisht',
    maps: 'https://www.google.com/maps/place/Shkolla+9-vje%C3%A7are+%22Ndre+Mjeda%22/@42.0630321,19.506876,3a,75y,150.75h,71.73t/data=!3m7!1e1!3m5!1sN3ZtAgiK4qaqZIVqsNbcow!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D18.272063414824743%26panoid%3DN3ZtAgiK4qaqZIVqsNbcow%26yaw%3D150.75104675711057!7i13312!8i6656!4m6!3m5!1s0x134e011eba67a377:0x78fd26a6b71638dd!8m2!3d42.062877!4d19.5052845!16s%2Fg%2F11g6qv45m_?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['anglisht'],
    accent: 'linear-gradient(135deg,#059669,#34d399)',
    note: 'Ndër mësueset më të suksesshme të anglishtes, ushtron profesionin në njërën nga shkollat kryesore të qytetit. Mësimet e saj bazohen në komunikim aktiv dhe metoda frymëzuese. Dedikimi dhe profesionalizmi i saj e bëjnë atë një nga zgjedhjet më të mira për nxënës të çdo niveli.'
  },
  {
    name: 'Elvira Bushati',
    phone: '355674061081',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Bexhisteni/@42.0713151,19.5095681,3a,75y,62.1h,79.94t/data=!3m7!1e1!3m5!1shC2yz2-19tc3YiwhqKTkjw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D10.062013162893408%26panoid%3DhC2yz2-19tc3YiwhqKTkjw%26yaw%3D62.09952613697949!7i13312!8i6656!4m7!3m6!1s0x134e013d85987cbd:0x70bfdcd5fa9ed649!8m2!3d42.0538844!4d19.4979228!10e5!16s%2Fg%2F1thv1v7v?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#d97706,#fbbf24)',
    note: 'Mësuese e matematikës me eksperiencë të konsiderueshme dhe njohuri shumë të thella të lëndës. Ushtron profesionin në disa nga shkollat më të mira të Shkodrës. Qartësia e shpjegimeve dhe vëmendja e veçantë ndaj çdo nxënësi janë ndër vlerat e saj kryesore.'
  },
  {
    name: 'Frida Luani',
    phone: '355683704370',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Gjuhadol,+Shkod%C3%ABr,+Albania/@42.0681554,19.5134996,17z/data=!3m1!4b1!4m6!3m5!1s0x134e00f942f52a21:0xb80935a0ee44b22d!8m2!3d42.0688576!4d19.5158999!16s%2Fg%2F1tgw29t0?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#f59e0b,#fcd34d)',
    note: 'Pedagoge universitare dhe mësuese e matematikës, ndër figurat akademike më të spikatura të lëndës në Shkodër. Angazhimi i saj si në nivel shkollor ashtu edhe universitar e bën ndër zgjedhjet ideale për nxënës që synojnë rezultate të shkëlqyera. Qasja e saj metodike sjell ndryshim real.'
  },
  {
    name: 'Dr Bendis Hoxha',
    phone: '355692136564',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Rruga+Europa,+Shkod%C3%ABr,+Albania/@42.0769808,19.5127879,17z/data=!3m1!4b1!4m6!3m5!1s0x134e00f4011c4b5f:0xb8230d8b5e825604!8m2!3d42.0769808!4d19.5153628!16s%2Fg%2F1th548l6?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#fbbf24,#fde68a)',
    note: 'Bendis Hoxha është ndër mësueset më të kualifikuara të matematikës në Shkodër. Metodologjia e saj bashkëkohore dhe rigoroziteti shkencor u mundësojnë nxënësve të ndërtojnë themelet më të forta të lëndës.'
  },
  {
    name: 'Naxhija Milla',
    phone: '355692627187',
    subject: 'Kimi',
    maps: 'https://www.google.com/maps/place/Bexhisteni/@42.0704094,19.509197,3a,75y,70.12h,106.5t/data=!3m7!1e1!3m5!1s_DMyWluhPqX5deGfaR8UAQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-16.50211282562364%26panoid%3D_DMyWluhPqX5deGfaR8UAQ%26yaw%3D70.12165077524617!7i13312!8i6656!4m6!3m5!1s0x134e013d85987cbd:0x70bfdcd5fa9ed649!8m2!3d42.0538844!4d19.4979228!16s%2Fg%2F1thv1v7v?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['kimi-biologji'],
    accent: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    note: 'Mësuese me një jetë të tëre kushtuar profesionit të mësimdhënies — ndër emrat më të njohur dhe të respektuar në arsimin e Shkodrës. Me dhjetëra vite punë të palodhur, e ka mishëruar kimisë me pasion e kompetencë të rrallë. Jep vetëm kimi, lëndë që e njeh si asnjë tjetër.'
  },
  {
    name: 'Miranda Bala',
    phone: '355692516062',
    subject: 'Italisht',
    maps: 'https://www.google.com/maps/place/AZA+Electronics/@42.070416,19.5122621,17z/data=!3m1!4b1!4m6!3m5!1s0x134e00fa2420fe11:0xaebef4c9349b86f9!8m2!3d42.070416!4d19.514837!16s%2Fg%2F11c5rqzz4y?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['italisht'],
    accent: 'linear-gradient(135deg,#dc2626,#f87171)',
    note: 'Mësuese e italishtes me njohuri të thella dhe pasion të madh për gjuhën. Ushtron profesionin me entuziazëm dhe dedikimi të pakufizuar. Nxënësit e saj dallohen për aftësinë e tyre komunikuese dhe rezultatet ndër të larta.'
  },
  {
    name: 'Afërdita Bruçeti',
    phone: '355697724356',
    subject: 'Letërsi / Gjuhë',
    maps: 'https://www.google.com/maps/place/Maarif+Shkod%C3%ABr+Campus/@42.0771351,19.510363,3a,75y,357.24h,75.91t/data=!3m7!1e1!3m5!1sRu4Ox7D1T2cNSvuW8lnwZQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.089699759148104%26panoid%3DRu4Ox7D1T2cNSvuW8lnwZQ%26yaw%3D357.2386476441965!7i13312!8i6656!4m6!3m5!1s0x134e015ea8e708e1:0x62bd438bbc0e1614!8m2!3d42.0771233!4d19.5106265!16s%2Fg%2F11l1s445gf?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjuhe-letersi'],
    accent: 'linear-gradient(135deg,#be185d,#f472b6)',
    note: 'Ndër mësueset më të shquara të letërsisë dhe gjuhës shqipe në Shkodër, me eksperiencë të gjerë dhe metodologji frymëzuese. Qasja e saj ndaj tekstit dhe shkrimit është ndër më efektivet dhe të çmuarat.'
  },
  {
    name: 'Valbona Vila',
    phone: '355670000286',
    subject: 'Matematikë',
    maps: 'https://www.google.com/maps/place/Parruce,+Shkod%C3%ABr,+Albania/@42.0655949,19.5093466,3a,75y,327.06h,109.41t/data=!3m7!1e1!3m5!1sXu5Y-dsqOXnLzLAq_C3jRg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-19.407779314115274%26panoid%3DXu5Y-dsqOXnLzLAq_C3jRg%26yaw%3D327.0599634022138!7i13312!8i6656!4m6!3m5!1s0x134e00fd333cee93:0xf7dd6cb6c1a156d2!8m2!3d42.0649077!4d19.5095779!16s%2Fg%2F1tnpbq4n?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['matematike'],
    accent: 'linear-gradient(135deg,#d97706,#fbbf24)',
    note: 'Mësuese e matematikës, ushtron profesionin në mësimdhënie në një nga gjimnazet kryesore të qytetit. Puna e saj ka në qendër marrjen e njohurive themelore të matematikës dhe përgatitjen për provimin e maturës. Përdorimi i teksteve të larmishëm është një ndër parimet kryesore të saj.'
  },
  {
    name: 'Konkursi Math Kangaroo — info lokale për Shkodër',
    phone: '',
    subject: 'Math Kangaroo — organizim sipas Shoqatës së Matematikës dhe kangaroo.al',
    maps: 'https://www.google.com/maps/search/?api=1&query=Lider+Academy,+Sheshi+2+Prilli,+Shkodër,+Albania',
    courseIds: ['konkursi-kangur'],
    accent: 'linear-gradient(135deg,#15803d,#fbbf24)',
    note: 'Regjistrohuni kryesisht përmes WhatsApp dhe email të koordinatorëve në faqen konkursi-kangur-shkoder.html ose ndiqni ndryshimet te kangaroo.al. Nëse zgjidhni këtë rresht vetëm nga forma “Rezervo” për pyetje përgjithësuese, përgjigjen e trajton përdoruesi i EduShkodër (jo organizatori zyrtar i konkursit).'
  }
];

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

const TEACHER_PROFILE_PATHS = {
  'Valdet Luga': 'valdet-luga.html',
  'Mirsada Kadia': 'mirsada-kadia.html',
  'Roberta Naraci': 'roberta-naraci.html',
  'Diana Boriqi': 'diana-boriqi.html',
  'Elvira Bushati': 'elvira-bushati.html',
  'Frida Luani': 'frida-luani.html',
  'Dr Bendis Hoxha': 'dr-bendis-hoxha.html',
  'Naxhija Milla': 'naxhija-milla.html',
  'Miranda Bala': 'miranda-bala.html',
  'Afërdita Bruçeti': 'aferdita-bruceti.html',
  'Valbona Vila': 'valbona-vila.html',
  'Konkursi Math Kangaroo — info lokale për Shkodër': 'konkursi-kangur-shkoder.html'
};

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
          ${course.meta.map(item => `<span class="course-meta-item"><i class="fas fa-check" aria-hidden="true"></i> ${escapeHtml(item)}</span>`).join('')}
        </div>
        <a href="${courseHref}" class="btn-course"><i class="${courseIconClass}" aria-hidden="true"></i> ${courseBtn}</a>
      </div>
    </div>
    `;
  }).join('');
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
      <div class="teacher-phone"><i class="fas fa-phone" style="color:var(--orange);margin-right:5px;font-size:0.75rem;" aria-hidden="true"></i> ${escapeHtml(formatPhone(teacher.phone))}</div>
      <div class="teacher-note">${escapeHtml(teacher.note || 'Klikoni WhatsApp ose Vendndodhja për kontakt të shpejtë.')}</div>
      <div class="teacher-actions">
        <a href="${teacher.phone ? `https://wa.me/${teacher.phone}` : buildOwnerRequestLink(teacher.name)}" target="_blank" class="teacher-btn teacher-btn-wa">
          <i class="fab fa-whatsapp" aria-hidden="true"></i> ${teacher.phone ? 'WhatsApp' : 'Kërko Kontaktin'}
        </a>
        <a href="${teacherProfileHref(teacher)}" class="teacher-btn teacher-btn-profile">
          <i class="fas fa-user" aria-hidden="true"></i> Profili
        </a>
        <a href="${teacher.maps}" target="_blank" class="teacher-btn teacher-btn-map">
          <i class="fas fa-map-marker-alt" aria-hidden="true"></i> Vendndodhja
        </a>
        ${teacher.instagram ? `<a href="${teacher.instagram}" target="_blank" class="teacher-btn" style="background:#e1306c;color:#fff;"><i class="fab fa-instagram" aria-hidden="true"></i> Instagram</a>` : ''}
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
  if (teacherCount) teacherCount.textContent = String(TEACHERS.length);
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
starPicker.querySelectorAll('i').forEach(star => {
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
  reviewRating = value;
  starPicker.querySelectorAll('i').forEach((item, index) => {
    item.classList.toggle('active', index < reviewRating);
    item.setAttribute('aria-checked', index + 1 === reviewRating ? 'true' : 'false');
  });
}

function renderReviews() {
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

renderCounts();
renderHeroQuickCourses();
renderCourseCards();
renderTeachers();
renderCourseOptions();
renderFooterCourses();
renderTeacherPicker();
renderReviewCourseOptions();
renderReviews();
renderTestimonials();
observeReveals();
updateBookingRouteNote();
validateForm();

document.querySelectorAll('i.fas, i.fab').forEach(icon => {
  if (!icon.closest('#starPicker') && !icon.hasAttribute('aria-hidden')) {
    icon.setAttribute('aria-hidden', 'true');
  }
});
