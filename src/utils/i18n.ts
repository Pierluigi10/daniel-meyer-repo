export const languages = {
  de: 'Deutsch',
  en: 'English',
  it: 'Italiano'
};

export const defaultLang = 'de';

export const translations = {
  de: {
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'hero.title': 'Steuerberatung Leipzig',
    'hero.subtitle': 'Wir sind eine Steuerberatungskanzlei im Herzen von Leipzig',
    'hero.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'hero.cta': 'Kontaktieren Sie uns',
    'services.title': 'Unsere Leistungen',
    'services.tax': 'Steuerberatung',
    'services.tax.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'services.accounting': 'Buchführung',
    'services.accounting.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'services.consulting': 'Unternehmensberatung',
    'services.consulting.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'about.title': 'Über uns',
    'about.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'contact.title': 'Kontakt',
    'contact.address': 'ForzaNapoli Str. 4, 04109 Leipzig',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'footer.copyright': '© 2025 Daniel Mayer. Alle Rechte vorbehalten.'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Tax Consulting Leipzig',
    'hero.subtitle': 'We are a tax consulting firm in the heart of Leipzig',
    'hero.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'hero.cta': 'Contact us',
    'services.title': 'Our Services',
    'services.tax': 'Tax Consulting',
    'services.tax.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'services.accounting': 'Accounting',
    'services.accounting.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'services.consulting': 'Business Consulting',
    'services.consulting.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'about.title': 'About Us',
    'about.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'contact.title': 'Contact',
    'contact.address': 'ForzaNapoli Str. 4, 04109 Leipzig',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'footer.copyright': '© 2025 Daniel Mayer. All rights reserved.'
  },
  it: {
    'nav.home': 'Home',
    'nav.services': 'Servizi',
    'nav.about': 'Chi siamo',
    'nav.contact': 'Contatti',
    'hero.title': 'Consulenza Fiscale Lipsia',
    'hero.subtitle': 'Siamo uno studio di consulenza fiscale nel cuore di Lipsia',
    'hero.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'hero.cta': 'Contattaci',
    'services.title': 'I nostri servizi',
    'services.tax': 'Consulenza Fiscale',
    'services.tax.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'services.accounting': 'Contabilità',
    'services.accounting.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'services.consulting': 'Consulenza Aziendale',
    'services.consulting.desc': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    'about.title': 'Chi siamo',
    'about.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'contact.title': 'Contatti',
    'contact.address': 'ForzaNapoli Str. 4, 04109 Leipzig',
    'contact.phone': 'Telefono',
    'contact.email': 'Email',
    'footer.copyright': '© 2025 Daniel Mayer. Tutti i diritti riservati.'
  }
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  }
}