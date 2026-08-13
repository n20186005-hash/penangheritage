import type { PageContent } from './ui';

// English — full content
export const content: PageContent = {
  meta: {
    title: 'George Town UNESCO — Heritage Trails',
    description: 'A walking guide to the George Town UNESCO World Heritage Site, Penang — history, transport, food and suggested routes.',
    ogTitle: 'George Town UNESCO — Heritage Trails',
    ogDescription: 'A port city, a thousand stories.',
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
    title1: 'A port city,',
    title2: 'a thousand stories.',
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
    body: 'George Town grew as an entrepôt port in the Straits of Malacca. Layers of Malay, Chinese, Indian, European and Peranakan communities formed an urban landscape rarely found anywhere else.',
    linkText: 'Read about the outstanding universal value ↗',
    imageAlt: 'A historic street scene in George Town'
  },
  feature: {
    eyebrow: 'AT A GLANCE',
    quote: '“An exceptional example of a multicultural trading city in Southeast Asia.”',
    body: 'Start at Lebuh Chulia and let your feet choose the turnings. Each block opens another chapter: clan houses, mosques, temples, churches and coffee shops that remain part of daily life.',
    stat1Value: '4.4',
    stat1Line1: 'map rating',
    stat1Line2: '13,491 reviews',
    stat2Value: 'FREE',
    stat2Line1: 'heritage area',
    stat2Line2: 'open access',
    imageAlt: 'Rows of heritage shophouses with green shutters'
  },
  history: {
    kicker: '02 / HISTORY & LEGEND',
    items: [
      { title: '1786: Pearl of the Orient', text: 'Captain Light\u2019s landing lit the fuse of this free port. Free trade, tax exemptions and an influx of migrants from many communities quickly made George Town a major entrepôt of the Straits of Malacca — and the seed of its multicultural character today.' },
      { title: 'A symphony of five communities', text: 'Malay, Chinese, Indian, European and Peranakan communities live side by side in the same blocks. Mosques, clan houses, churches and temples stand within a few hundred metres of each other — a rare juxtaposition at the very heart of its World Heritage value.' },
      { title: 'Folklore & legend', text: 'Countless stories circulate through the streets: carvings above old doorways carry family wishes, and place names often come from old legends. Buildings are more than brick and mortar — they are vessels of migrant memory, waiting for a patient reader to decode them.' }
    ],
    note: 'Sources: public historical narratives and heritage writing on George Town. This site is not an official academic source; for detailed reference, see the UNESCO database.'
  },
  routes: {
    kicker: '03 / CHOSEN ROUTES',
    title1: 'Three ways to read',
    title2: 'George Town.',
    body: 'Don\u2019t chase everything. Pick one theme, walk slowly, and let the city offer small surprises.',
    cards: [
      { title: 'Clan Jetties', tag: 'Water community', text: 'Step between stilt houses and the tides, and feel the everyday scale of Penang\u2019s Chinese migrant community.', image: '/gallery/georgetown-unesco-historic-site-21.jpg' },
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
      { title: 'Getting around', html: '<p><strong>Penang International Airport</strong><br/>From Bayan Lepas, take Rapid Penang 102 or 401E to the city centre; taxis and e-hailing are more direct. Allow 35–60 minutes depending on traffic.</p><p><strong>Public buses</strong><br/>Rapid Penang connects KOMTAR terminal with many parts of the city. Alight around Lebuh Chulia / KOMTAR and continue on foot.</p><p><strong>Taxis & e-hailing</strong><br/>Ask to be dropped at Lebuh Chulia or KOMTAR. Heritage streets have narrow lanes and one-ways; walking is usually faster for short distances.</p>' },
      { title: 'Tickets, costs & hours', html: '<p>The heritage area is open and free to explore. Museums, clan houses and paid attractions have their own tickets. Opening hours vary; most places open daily, and some close around 17:00. Check signage on site, as hours can change by season and festive days.</p>' },
      { title: 'Parking', html: '<p>Street parking in the heritage core is limited and many roads are one-way. Use paid lots or car parks around KOMTAR and the waterfront, then walk or take the free CAT bus where available. Avoid bringing large vehicles into the narrow lanes.</p>' },
      { title: 'Facilities & public toilets', html: '<p>The heritage area involves long walks; public toilets are not on every lane. Public facilities are usually found in large shopping centres, transport stations and some museums. Look for signage or check online maps before walking far. Carry your own drinking water — many streets are shaded but the weather is hot.</p>' },
      { title: 'Nearby accommodation', html: '<p>There is a wide range of accommodation in and around the heritage site — from budget hostels and homestays to boutique and luxury hotels. Staying inside the historic area lets you explore in the early morning and late afternoon when it is less crowded. Check the location relative to your route, bus access and noise levels before booking.</p>' },
      { title: 'Food & supplies', html: '<p>Street food, coffee shops, restaurants and convenience stores are easy to find. Many lanes are lined with stalls and local eateries bustling with residents. Convenience stores and mini-markets are handy for water, snacks and daily essentials. For wider choice, head to a nearby shopping complex or wet market.</p>' },
      { title: 'Access & accessibility', html: '<p>Main roads are fairly flat and manageable with a wheelchair or pushchair, but some old lanes, cobblestones and high thresholds can be challenging. Many places of worship and clan houses have steps. Plan a route along main roads, use pedestrian crossings and ask for help when needed. Allow extra time and take frequent breaks.</p>' },
      { title: 'Best time & duration', html: '<p>07:30–10:30 is most comfortable for façades and photography; 16:00 until dusk suits the lanes and street art. Allow 3–4 hours for a short route, or a full day to explore unhurriedly. Avoid midday if you are sensitive to heat.</p>' }
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
    body: 'Reference address: 159, Lebuh Chulia, 10200 George Town, Pulau Pinang.',
    button: 'Open in Google Maps ↗',
    iframeTitle: 'Map of George Town UNESCO Historic Site'
  },
  faq: {
    kicker: '09 / FAQ',
    title1: 'You ask,',
    title2: 'we answer.',
    items: [
      { q: 'Does the George Town UNESCO Historic Site require tickets?', a: 'The historic district itself is open to walking visitors with no unified ticket. Some clan houses, museums and paid attractions sell separate tickets — check their on-site notices before you go.' },
      { q: 'How do I get here from Penang International Airport?', a: 'The airport is about 18 km from George Town. Take a Rapid Penang bus, or use a taxi or ride-hailing service; journey time varies with traffic, so allow 35–60 minutes.' },
      { q: 'How much time should I allow?', a: 'First-time visitors should allow half a day to a full day. If you want to take in the architecture, eat street food and include the Clan Jetties route, a full day is more comfortable.' },
      { q: 'When is best for walking?', a: 'Early morning and late afternoon offer soft light and more comfortable temperatures. At midday, save time for indoor galleries, cafés or a leisurely Nyonya meal.' },
      { q: 'Are there public toilets and baby-care facilities nearby?', a: 'Public toilets, mall restrooms and large supermarkets are usually found around major commercial areas and transport hubs — not on every old lane. Before you head out, mark one or two confirmed restrooms on your map app; if travelling with infants, look first for baby-care rooms in large malls and museums.' },
      { q: 'Can I drive into the heritage area?', a: 'The heritage core is pedestrian-oriented; old streets are mostly one-way and narrow, so driving is not recommended. Park at paid lots or shopping-centre car parks nearby, then enter on foot or via free shuttle services.' },
      { q: 'Is it accessible with a wheelchair or pushchair?', a: 'Main-street pavements are fairly even, but cobbled lanes, thresholds and narrow five-foot ways in parts of the old town are not wheelchair-friendly. Stick to main roads and newer stretches with ramps; clan-house interiors often have steps and thresholds. Plan a slower route in advance and allow extra time.' },
      { q: 'Are there accommodation options nearby?', a: 'In and around the heritage area, options range from budget hostels to mid-range and boutique hotels. Most are within walking distance of the main sights, ideal if you want to spread your visit across early morning and late afternoon. Facilities and locations vary widely by price, so compare according to your budget and route.' },
      { q: 'Are food and supplies convenient?', a: 'Very convenient. Hawker centres, coffee shops, convenience stores and supermarkets are dense, with plenty of options for full meals, quick bites and street snacks. For value, hawker centres and roadside stalls are usually the better deal; convenience stores are everywhere for water and daily essentials.' },
      { q: 'Any tips on what to wear for walking?', a: 'Penang is hot and humid all year. Wear light, breathable, quick-drying clothing with comfortable non-slip walking shoes, and carry water, sunscreen and rain gear. If you plan to enter places of worship, dress modestly, cover your shoulders and follow shoe-removal rules.' }
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
    lead: 'The attraction information on this site is compiled primarily against public materials from the Penang Island City Council (Majlis Bandaraya Pulau Pinang, MBPP), Penang Global Tourism and Tourism Malaysia, and does not contain commercial recommendations.',
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
