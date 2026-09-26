(function (global) {
const COURSES = [
  {
    id: 'general-1-6',
    name: 'Të Përgjithshme (Klasa 1-6)',
    category: 'Lëndë Shkollore',
    icon: 'fa-school',
    gradient: 'linear-gradient(135deg,#FF6B35,#FFD166)',
    description: 'Kurs mbështetës për nxënësit e klasave 1-6 me ndihmë në detyra, përsëritje të mësimit dhe punë të rregullt gjatë javës.',
    meta: ['1 me 1', 'Klasa 1-6'],
    featured: true
  },
  {
    id: 'fillore-1-5',
    name: 'Fillore (Klasa 1-5)',
    category: 'Lëndë Shkollore',
    icon: 'fa-book-open',
    gradient: 'linear-gradient(135deg,#f97316,#fb923c)',
    description: 'Për nxënësit e ciklit fillor me fokus në matematikë dhe gjuhë shqipe, sidomos te bazat, shpjegimet e qarta dhe ushtrimet e përditshme.',
    meta: ['Matematikë & Gjuhë Shqipe', 'Klasa 1-5'],
    featured: true
  },
  {
    id: 'matematike',
    name: 'Matematikë',
    category: 'Lëndë Shkollore',
    icon: 'fa-square-root-alt',
    gradient: 'linear-gradient(135deg,#d97706,#fbbf24)',
    description: 'Orë private në matematikë për sqarimin e temave, ushtrimeve dhe përforcimin e bazës në nivele të ndryshme shkollore.',
    meta: ['1 me 1', 'Shkodër']
  },
  {
    id: 'anglisht',
    name: 'Anglisht',
    category: 'Gjuhë të Huaja',
    icon: 'fa-language',
    gradient: 'linear-gradient(135deg,#059669,#34d399)',
    description: 'Mësime individuale në anglisht për nxënës që duan të përmirësojnë gjuhën, notat ose komunikimin e përditshëm.',
    meta: ['1 me 1', 'Shkodër']
  },
  {
    id: 'gjermanisht',
    name: 'Gjermanisht',
    category: 'Gjuhë të Huaja',
    icon: 'fa-globe-europe',
    gradient: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    description: 'Mësime në gjermanisht për fillestarë dhe nxënës që kërkojnë mbështetje të rregullt në gramatikë, lexim dhe komunikim.',
    meta: ['1 me 1', 'Shkodër']
  },
  {
    id: 'italisht',
    name: 'Italisht',
    category: 'Gjuhë të Huaja',
    icon: 'fa-globe',
    gradient: 'linear-gradient(135deg,#dc2626,#f87171)',
    description: 'Mësime private italisht për përforcim në shkollë dhe për përdorim praktik në të folur e në të shkruar.',
    meta: ['1 me 1', 'Shkodër']
  },
  {
    id: 'kimi-biologji',
    name: 'Kimi / Biologji',
    category: 'Shkenca',
    icon: 'fa-flask',
    gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    description: 'Mbështetje individuale në kimi dhe biologji. Në listë është shënuar edhe mësuesja që jep vetëm kimi.',
    meta: ['1 me 1', 'Shkodër']
  },
  {
    id: 'gjuhe-letersi',
    name: 'Gjuhë / Letërsi',
    category: 'Lëndë Shkollore',
    icon: 'fa-book',
    gradient: 'linear-gradient(135deg,#be185d,#f472b6)',
    description: 'Orë private për gjuhë shqipe dhe letërsi me fokus te kuptimi i tekstit, analiza dhe përmirësimi i shkrimit.',
    meta: ['1 me 1', 'Shkodër']
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
    name: 'Mirsada Bala',
    phone: '355694830000',
    subject: 'Gjermanisht',
    maps: 'https://www.google.com/maps/place/Universiteti+i+Shkodr%C3%ABs+%22Luigj+Gurakuqi%22/@42.0663747,19.5101781,3a,75y,302.59h,77.26t/data=!3m7!1e1!3m5!1sWjhnIF2WEkpkOPeY6XCEWw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.742345076382705%26panoid%3DWjhnIF2WEkpkOPeY6XCEWw%26yaw%3D302.58838241255006!7i13312!8i6656!4m6!3m5!1s0x134e00fcd146f0df:0xbee74fa0b9f6dbfa!8m2!3d42.0662237!4d19.5095856!16s%2Fm%2F0264mz5?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    courseIds: ['gjermanisht'],
    accent: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    note: 'Ndër mësueset më të kërkuara të gjermanishtes në Shkodër, me përvojë solide dhe metodologji të provuar. Ushtron profesionin në disa nga shkollat më të mira të qytetit dhe njihet për qasjen e saj të personalizuar. Nxënësit e saj arrijnë vazhdimisht rezultate ndër më të larta.',
    instagram: 'https://www.instagram.com/easy.international.courses/'
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
    note: 'Mësuese e italishtes me njohuri të thella dhe pasion të madh për gjuhën. Ushtron profesionin me entuziazëm dhe dedikimi të pakufizuar. Nxënësit e saj dallohen për aftësinë e tyre komunikuese dhe rezultatet ndër të larta.',
    instagram: 'https://www.instagram.com/easy.international.courses/'
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

const TEACHER_PROFILE_PATHS = {
  'Valdet Luga': 'valdet-luga.html',
  'Mirsada Bala': 'mirsada-bala.html',
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

const data = { COURSES, TEACHERS, TEACHER_PROFILE_PATHS };
global.EDUSHKODER_DATA = data;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = data;
}
})(typeof window !== 'undefined' ? window : globalThis);
