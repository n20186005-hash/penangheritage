// 语言注册与内容类型定义
export const languages = {
  ms: { label: 'Bahasa Melayu', short: 'MS', htmlLang: 'ms' },
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  zh: { label: '中文', short: '中', htmlLang: 'zh-CN' }
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ms';
export const languagesList: readonly Lang[] = ['ms', 'en', 'zh'];

export function pathForLang(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

// ---------- 内容类型 ----------
export interface HistoryItem { title: string; text: string }
export interface RouteCard { title: string; tag: string; text: string; image: string }
export interface PracticalItem { title: string; html: string }
export interface FaqItem { q: string; a: string }
export interface NearbyItem { title: string; text: string }

export interface PageContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    jsonldName: string;
    jsonldDescription: string;
  };
  header: {
    brandTop: string;
    brandBottom: string;
    nav: { cerita: string; sejarah: string; laluan: string; praktikal: string; galeri: string };
    savePlan: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    noteNumber: string;
    noteTitle: string;
    noteSub: string;
    stamp: string;
    imageAlt: string;
  };
  intro: {
    kicker: string;
    title1: string;
    title2: string;
    bigCopy: string;
    body: string;
    linkText: string;
    imageAlt: string;
  };
  feature: {
    eyebrow: string;
    quote: string;
    body: string;
    stat1Value: string;
    stat1Line1: string;
    stat1Line2: string;
    stat2Value: string;
    stat2Line1: string;
    stat2Line2: string;
    imageAlt: string;
  };
  history: {
    kicker: string;
    items: HistoryItem[];
    note: string;
  };
  routes: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    cards: RouteCard[];
    saveLabel: string;
  };
  practical: {
    kicker: string;
    title1: string;
    title2: string;
    bigCopy: string;
    items: PracticalItem[];
  };
  food: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    tags: string[];
    imageAlt: string;
  };
  nearby: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    items: NearbyItem[];
    note: string;
  };
  gallery: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    imageAltPattern: string;
    lightboxAlt: string;
    closeLabel: string;
  };
  map: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    button: string;
    iframeTitle: string;
  };
  faq: {
    kicker: string;
    title1: string;
    title2: string;
    items: FaqItem[];
  };
  plan: {
    kicker: string;
    title1: string;
    title2: string;
    body: string;
    savedTitle: string;
    savedSuffix: string;
    savedEmpty: string;
    savedDone: string;
    removeLabel: string;
    clearAll: string;
  };
  footer: {
    brand: string;
    note: string;
    copyright: string;
    legalKicker: string;
    legalTitle1: string;
    legalTitle2: string;
    lead: string;
    privacyTitle: string;
    privacyUpdated: string;
    privacyHtml: string;
    termsTitle: string;
    termsUpdated: string;
    termsHtml: string;
    cookiesTitle: string;
    cookiesUpdated: string;
    cookiesIntro: string;
    cookieNecessaryTitle: string;
    cookieNecessaryBody: string;
    cookieAnalyticsTitle: string;
    cookieAnalyticsBody: string;
    cookiePreferencesTitle: string;
    cookiePreferencesBody: string;
    cookieMarketingTitle: string;
    cookieMarketingBody: string;
    cookieAlwaysOn: string;
    cookieEnabled: string;
    cookieDisabled: string;
    cookieConsentNote: string;
    savePreferences: string;
    rejectAll: string;
    saveSuccess: string;
  };
}
