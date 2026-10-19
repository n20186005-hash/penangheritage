import type { PageContent } from './ui';

// English — full content
export const content: PageContent = {
  meta: {
    title: "George Town UNESCO Heritage Guide | Walks, Hours & Map",
    description: "Plan a George Town heritage walk in Penang: UNESCO history, Clan Jetties, street art, visiting hours, individual attraction tickets and a map starting point.",
    ogTitle: "George Town UNESCO Heritage Guide | Walks, Hours & Map",
    ogDescription: "Plan a George Town heritage walk in Penang: UNESCO history, Clan Jetties, street art, visiting hours, individual attraction tickets and a map starting point.",
    jsonldName: 'George Town UNESCO Historic Site',
    jsonldDescription: 'Historic core of George Town, Penang, recognised for its unique architectural and cultural townscape.'
  },
  header: {
    brandTop: 'GEORGE TOWN',
    brandBottom: 'HERITAGE TRAILS',
    nav: { cerita: 'Story', sejarah: 'History', laluan: 'Routes', praktikal: 'Practical', galeri: 'Gallery' },
    savePlan: '＋ Save plan'
  },
  hero: {
    eyebrow: 'PENANG · MALAYSIA',
    title1: "George Town,",
    title2: "a living UNESCO city.",
    lede: 'George Town UNESCO Historic Site is not a frozen museum. It is a city still breathing — between old shophouses, places of worship, breakfast stalls and afternoon shadows.',
    ctaPrimary: 'Start walking',
    ctaSecondary: '＋ Save route',
    noteNumber: '01',
    noteTitle: 'UNESCO World Heritage Site since 2008',
    noteSub: 'Walking is the best way to read this city.',
    stamp: 'GEORGE TOWN<br/>5°25′N · 100°20′E',
    imageAlt: 'Colourful heritage shophouses in George Town'
  },
  intro: {
    kicker: '01 / THE LOCAL STORY',
    title1: 'One city.',
    title2: 'Many encounters.',
    bigCopy: 'Here, history is not just dates. It appears as wooden doors, encaustic tiles, the sound of temple bells and the scent of spices drifting out of narrow lanes.',
    body: "George Town and Melaka were jointly inscribed on the UNESCO World Heritage List on 7 July 2008. George Town’s core zone covers 109.38 hectares, with a 150.04-hectare buffer zone. Its shophouses, places of worship and residents’ daily traditions form a living multicultural port city.",
    linkText: 'Read about the outstanding universal value ↗',
    imageAlt: 'A historic street scene in George Town'
  },
  feature: {
    eyebrow: 'AT A GLANCE',
    quote: '“An exceptional example of a multicultural trading city in Southeast Asia.”',
    body: 'Start at Lebuh Chulia and let your feet choose the turnings. Each block opens another chapter: clan houses, mosques, temples, churches and coffee shops that remain part of daily life.',
    stat1Value: '4.4',
    stat1Line1: "Google Maps · 19 Oct 2026",
    stat1Line2: "13,515 reviews",
    stat2Value: "2008",
    stat2Line1: "UNESCO listing",
    stat2Line2: "with Melaka",
    imageAlt: 'Rows of heritage shophouses with green shutters'
  },
  history: {
    kicker: '02 / HISTORY & LEGEND',
    items: [
      { title: '1786: Pearl of the Orient', text: 'Captain Light\u2019s landing lit the fuse of this free port. Free trade, tax exemptions and an influx of migrants from many communities quickly made George Town a major entrepôt of the Straits of Malacca — and the seed of its multicultural character today.' },
      { title: 'A symphony of five communities', text: 'Malay, Chinese, Indian, European and Peranakan communities live side by side in the same blocks. Mosques, clan houses, churches and temples stand within a few hundred metres of each other — a rare juxtaposition at the very heart of its World Heritage value.' },
      { title: 'Folklore & legend', text: 'Countless stories circulate through the streets: carvings above old doorways carry family wishes, and place names often come from old legends. Buildings are more than brick and mortar — they are vessels of migrant memory, waiting for a patient reader to decode them.' }
    ],
    note: "Sources checked 19 October 2026: George Town World Heritage Incorporated (site overview and FAQ), UNESCO and the linked Google Maps listing. This is an independent visitor guide. Maps ratings and review totals can change.",
  },
  routes: {
    kicker: '03 / CHOSEN ROUTES',
    title1: 'Three ways to read',
    title2: 'George Town.',
    body: "Choose a few stops rather than a fixed schedule: Lebuh Armenian for street art, Khoo Kongsi for clan heritage and the Clan Jetties for the waterfront. Check each place’s access, opening hours and fees separately.",
    cards: [
      { title: 'Clan Jetties', tag: 'Water community', text: 'View the waterfront community from public walkways and respect private homes.', image: '/gallery/georgetown-unesco-historic-site-21.jpg' },
      { title: 'Mural Quarter', tag: 'City wander', text: 'Along Lebuh Armenian and its side lanes, seek out wrought-iron murals and street art.', image: '/gallery/georgetown-unesco-historic-site-2.jpg' },
      { title: 'Khoo Kongsi', tag: 'Clan house', text: 'Carved timber, gold leaf and clan memory form one of George Town\u2019s most dramatic interiors.', image: '/gallery/georgetown-unesco-historic-site-8.jpg' }
    ],
    saveLabel: '＋ Save'
  },
  practical: {
    kicker: '04 / PLAN WITH EASE',
    title1: 'Small details',
    title2: 'that help.',
    bigCopy: 'Come with curiosity, not a checklist. Here are the basics to make your day smoother.',
    items: [
      {"title": "Where to start", "html": "<p>Open the linked Maps pin on Lebuh Chulia, then choose a short walk towards Lebuh Armenian, Khoo Kongsi or the Clan Jetties. These are suggested stops, not a timed guided tour; check each venue before entering.</p>"},
      {"title": "Opening hours and tickets", "html": "<p>The linked Maps listing displays Monday–Friday 09:00–17:00 and Saturday–Sunday closed, checked 19 October 2026. This applies to that listing only: it does not mean the historic streets close at weekends. Museums, places of worship, shops and clan houses set their own hours and admission fees. Confirm with each operator.</p>"},
      {"title": "Transport and parking", "html": "<p>Check current routes, fares, parking rules and drop-off arrangements with your transport provider before travelling. Choose a route that suits your mobility and weather conditions; no airport journey time or bus service is guaranteed here.</p>"},
      {"title": "Facilities and access", "html": "<p>Confirm toilets, baby-care facilities, step-free entry and wheelchair access directly with the places you plan to visit. Heritage streets and buildings may have uneven surfaces, narrow walkways and thresholds. Carry water and allow breaks.</p>"},
      {"title": "Respect a living city", "html": "<p>The heritage area includes homes and active places of worship. Follow signs, ask before photographing residents, and avoid entering private homes at the jetties. A saved list is stored on your device; this website does not provide an offline map.</p>"}
    ]
  },
  food: {
    kicker: '05 / EAT NEARBY',
    title1: 'Heritage you',
    title2: 'can taste.',
    body: 'Plan one food stop, not just a break. Try char kway teow, asam laksa, nasi kandar, cendol or Nyonya kuih at shops and stalls bustling with locals.',
    tags: ['Char kway teow', 'Asam laksa', 'Nasi kandar', 'Cendol'],
    imageAlt: 'Penang street food on a table'
  },
  nearby: {
    kicker: '06 / KEEP WALKING',
    title1: 'After this,',
    title2: 'where to?',
    body: 'Use George Town as a starting point. These nearby attractions are easy to combine depending on your energy and the weather.',
    items: [
      { title: 'Fort Cornwallis', text: 'A coastal fort for understanding the colonial beginnings of Penang.' },
      { title: 'Clan Jetties', text: 'A stilt-house community with views across the Straits of Malacca.' },
      { title: 'Little India', text: 'Spices, textiles, music and temples on a vibrant street.' }
    ],
    note: 'If time allows, combine with the Penang hill foothills or Batu Ferringhi beach for a full-day trip.'
  },
  gallery: {
    kicker: '07 / GALLERY',
    title1: 'Memory frames',
    title2: 'from every corner.',
    body: 'A visual preview before your feet begin to walk.',
    imageAltPattern: 'George Town UNESCO — photo {n}',
    lightboxAlt: 'Enlarged photo',
    closeLabel: 'Close'
  },
  map: {
    kicker: '08 / OPEN MAP',
    title1: 'Start at',
    title2: 'Lebuh Chulia.',
    body: "Map reference only: 159, Lebuh Chulia, 10200 George Town, Pulau Pinang. This pin is a meeting reference, not the address or entrance of the entire World Heritage Site.",
    button: 'Open in Google Maps ↗',
    iframeTitle: 'Map of George Town UNESCO Historic Site'
  },
  faq: {
    kicker: '09 / FAQ',
    title1: 'You ask,',
    title2: 'we answer.',
    items: [
      {"q": "Why is George Town a UNESCO World Heritage Site?", "a": "George Town and Melaka were listed together on 7 July 2008 for their multicultural trading-city heritage. The George Town core zone is 109.38 hectares, with a 150.04-hectare buffer zone."},
      {"q": "Is George Town closed at weekends?", "a": "Do not apply the Maps listing’s Monday–Friday 09:00–17:00 hours and weekend closure to the whole historic district. Individual museums, clan houses, religious sites and shops have their own schedules; check each operator."},
      {"q": "Is there one ticket for the heritage area?", "a": "Plan each attraction separately. Individual venues may charge admission and have entry restrictions. Confirm current fees and opening hours directly before visiting."},
      {"q": "What can I include in a heritage walk?", "a": "Choose from Lebuh Armenian’s street art, Khoo Kongsi and the Clan Jetties. Allow time for breaks and residents’ daily activity; check access and opening details at each stop."},
      {"q": "Where does the map lead?", "a": "The linked pin uses 159, Lebuh Chulia as a reference. The World Heritage Site is an urban area, not one building at this address."}
    ]
  },
  plan: {
    kicker: 'YOUR SAVED PLAN',
    title1: 'Don\u2019t let the',
    title2: 'story pass by.',
    body: 'Press “Save” on the places you want to visit. This list is stored only on your device — no account, no server.',
    savedTitle: 'Saved places',
    savedSuffix: 'places',
    savedEmpty: 'No places saved yet.<br/>Pick one route above to begin.',
    savedDone: '✓ Saved',
    removeLabel: 'Remove',
    clearAll: 'Clear list'
  },
  footer: {
    brand: 'GEORGE TOWN HERITAGE',
    note: 'This website is an independent non-profit visitor information project and is not affiliated with any government agency, official organisation or commercial operator.',
    copyright: '© 2026 George Town Heritage Trails. All rights reserved.',
    legalKicker: '10 / SITE USE',
    legalTitle1: 'Privacy, terms and',
    legalTitle2: 'cookie settings.',
    lead: "Sources checked 19 October 2026: George Town World Heritage Incorporated (site overview and FAQ), UNESCO and the linked Google Maps listing. This is an independent visitor guide. Maps ratings and review totals can change.",
    privacyTitle: 'Privacy Policy',
    privacyUpdated: 'Last updated: August 2026',
    privacyHtml: `<p>We collect only the minimum data necessary to provide and improve the site. This may include browsing data such as IP address, browser type and visited pages, cookies and similar technologies, and any information you voluntarily provide when contacting us by email or other direct channels.</p><p>We use this information to improve content and user experience, analyse traffic and usage patterns, respond to requests, and comply with applicable legal obligations.</p><p>This website may use third-party services such as Google Maps for embedded maps and location data and Google Analytics for traffic measurement. If other third-party image or infrastructure services are added in future, their own privacy policies will also apply.</p><p>Under the GDPR and related laws, you generally have the right to access your personal data, request correction or deletion, object to certain processing activities, and lodge a complaint with a supervisory authority.</p><p>Image rights: the copyright and related rights in the images displayed on this website belong to the original photographers or other lawful rights holders.</p>`,
    termsTitle: 'Terms of Service',
    termsUpdated: 'Last updated: August 2026',
    termsHtml: `<p>By accessing and using this website, you agree to be bound by these terms. All content is provided for general visitor information only. We operate as an independent third-party information project and are not affiliated with attractions, public authorities or commercial operators within the George Town UNESCO World Heritage Site.</p><p>We aim to provide accurate and timely information, but we cannot guarantee that all content is always complete, error-free or current. Opening hours, transport arrangements, maintenance works, ticket rules and on-site conditions may change. Please verify important details through official channels before travelling.</p><p>The website design, editorial structure and original written content are protected by copyright. Third-party images remain the property of their original photographers or rights holders. Use of Google Maps data is subject to Google’s own terms of service.</p><p>This website is provided “as is” without warranties of any kind. We are not liable for any direct or indirect loss arising from reliance on information published here, including travel decisions made on the basis of this site.</p>`,
    cookiesTitle: 'Cookie Settings',
    cookiesUpdated: 'Last updated: August 2026',
    cookiesIntro: 'We use cookies and local storage to improve your browsing experience. You can manage your preferences below; essential items stay on, and the other choices apply only after you save them.',
    cookieNecessaryTitle: 'Essential cookies',
    cookieNecessaryBody: 'These items support core site operation and security, such as maintaining basic session state or protecting the service from abnormal requests. They cannot be turned off.',
    cookieAnalyticsTitle: 'Analytics cookies',
    cookieAnalyticsBody: 'These help us understand how visitors use the site. At present this applies to Google Analytics, which loads only after your consent.',
    cookiePreferencesTitle: 'Preference cookies',
    cookiePreferencesBody: 'These remember site settings and local reading preferences on your device so that repeated actions are reduced.',
    cookieMarketingTitle: 'Marketing cookies',
    cookieMarketingBody: 'These are used for personalised advertising and campaign measurement. This site does not enable such functions by default, and you can keep them off.',
    cookieAlwaysOn: 'Always on',
    cookieEnabled: 'Enabled',
    cookieDisabled: 'Disabled',
    cookieConsentNote: 'You can return here at any time to change these settings. Disabling optional items may prevent some non-essential preferences from being remembered, but it will not block basic browsing.',
    savePreferences: 'Save preferences',
    rejectAll: 'Reject all optional',
    saveSuccess: 'Cookie preferences saved.'
  }
};
