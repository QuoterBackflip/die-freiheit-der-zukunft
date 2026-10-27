import type { UiLanguage } from './types.ts';

export interface Translations {
  // Brand & Site
  'site.title': string;
  'site.libraryLabel': string;
  'site.author': string;
  'site.authorFull': string;

  // Nav
  'nav.home': string;
  'nav.gemini': string;
  'nav.astra6': string;
  'nav.claude': string;
  'nav.grok': string;
  'nav.topics': string;
  'nav.about': string;
  'nav.compare': string;
  'nav.synopsisBadge': string;
  'nav.menu': string;
  'nav.close': string;

  // Badges & Status
  'badge.pdf': string;
  'badge.complete': string;
  'badge.inPreparation': string;
  'badge.pending': string;
  'badge.fullyAvailable': string;
  'badge.status': string;

  // Themes
  'theme.light': string;
  'theme.sepia': string;
  'theme.dark': string;

  // Hero
  'hero.badge': string;
  'hero.authorLabel': string;
  'hero.titleLine1': string;
  'hero.titleLine2': string;
  'hero.subtitle': string;
  'hero.intro': string;
  'hero.valueFree': string;
  'hero.valueNoShop': string;
  'hero.valueNoTracking': string;
  'hero.btnReadGemini': string;
  'hero.btnReadAstra': string;
  'hero.btnReadGrok': string;
  'hero.btnExploreTopics': string;
  'hero.btnManifesto': string;
  'hero.visualDate': string;
  'hero.visualQuote': string;

  // Manuscript Selector (Homepage)
  'selector.tag': string;
  'selector.title': string;
  'selector.subtitle': string;
  'selector.badgeGemini': string;
  'selector.badgeAstra': string;
  'selector.badgeClaude': string;
  'selector.badgeGrok': string;
  'selector.descGemini': string;
  'selector.descAstra': string;
  'selector.descClaude': string;
  'selector.descGrok': string;
  'selector.btnRead': string;
  'selector.btnView': string;

  // Reader View
  'reader.toc': string;
  'reader.readingProgress': string;
  'reader.prevChapter': string;
  'reader.nextChapter': string;
  'reader.fontSize': string;
  'reader.width': string;
  'reader.clearanceNotes': string;
  'reader.print': string;
  'reader.copyLink': string;
  'reader.linkCopied': string;
  'reader.downloadPdf': string;
  'reader.bookLanguage': string;
  'reader.bookLangDe': string;
  'reader.bookLangEn': string;
  'reader.bookLangEs': string;
  'reader.bookLangZh': string;
  'reader.bookLangAr': string;
  'reader.langNoticeTitle': string;
  'reader.langNoticeText': string;
  'reader.backToTop': string;
  'reader.close': string;
  'reader.currentVersion': string;
  'reader.chapter': string;
  'reader.pageRange': string;
  'reader.readTime': string;
  'reader.minutes': string;
  'reader.sensitivePassage': string;
  'reader.sensitiveNotice': string;
  'reader.coreThesis': string;
  'reader.manifesto': string;
  'reader.imageMetaphor': string;
  'reader.originalQuote': string;
  'reader.analogy': string;

  // Topics Overview
  'topics.tag': string;
  'topics.title': string;
  'topics.subtitle': string;
  'topics.filterAll': string;
  'topics.readInText': string;
  'topics.thesisLabel': string;

  // Manifesto Pillars
  'manifesto.tag': string;
  'manifesto.title': string;
  'manifesto.subtitle': string;
  'manifesto.readInEpilogue': string;

  // About Work
  'about.tag': string;
  'about.title': string;
  'about.subtitle': string;
  'about.tabOrigin': string;
  'about.tabClearance': string;
  'about.tabMethodology': string;
  'about.originHeading': string;
  'about.clearanceHeading': string;
  'about.methodologyHeading': string;
  'about.readChapter': string;

  // Comparison View
  'compare.tag': string;
  'compare.title': string;
  'compare.subtitle': string;
  'compare.noticeActive': string;
  'compare.noticeText': string;
  'compare.colGemini': string;
  'compare.colAstra': string;
  'compare.colGrok': string;
  'compare.colClaude': string;
  'compare.openChapter': string;
  'compare.planned': string;

  // Preparation View
  'prep.back': string;
  'prep.policyTitle': string;
  'prep.policyText': string;
  'prep.btnSwitchGemini': string;
  'prep.btnHome': string;

  // Footer
  'footer.description': string;
  'footer.authorLabel': string;
  'footer.nonCommercial': string;
  'footer.colLibrary': string;
  'footer.colWork': string;
  'footer.topicsLink': string;
  'footer.historyLink': string;
  'footer.clearanceLink': string;
  'footer.manifestoLink': string;
  'footer.rights': string;
  'footer.noShop': string;
  'footer.noCookies': string;
  'footer.noTracking': string;
  'footer.culturalHeritage': string;
}

export const translations: Record<UiLanguage, Translations> = {
  // ==========================================
  // DEUTSCH (Standard)
  // ==========================================
  de: {
    'site.title': 'Die Freiheit der Zukunft',
    'site.libraryLabel': 'Bibliothek · Waldemar Scheiermann',
    'site.author': 'Waldemar Scheiermann',
    'site.authorFull': 'Urheber der philosophischen Gedanken: Waldemar Scheiermann',

    'nav.home': 'Startseite',
    'nav.gemini': 'Gemini',
    'nav.astra6': 'Astra 6',
    'nav.claude': 'Claude',
    'nav.grok': 'Grok',
    'nav.topics': 'Themen',
    'nav.about': 'Über das Werk',
    'nav.compare': 'Vergleich',
    'nav.synopsisBadge': 'Synopse',
    'nav.menu': 'Menü',
    'nav.close': 'Schließen',

    'badge.pdf': 'PDF',
    'badge.complete': 'Vollständig',
    'badge.inPreparation': 'In Vorbereitung',
    'badge.pending': 'Ausstehend',
    'badge.fullyAvailable': 'Vollständig verfügbar',
    'badge.status': 'Status',

    'theme.light': 'Helles Thema',
    'theme.sepia': 'Sepia Thema',
    'theme.dark': 'Dunkles Thema',

    'hero.badge': 'Öffentliche Philosophische Online-Bibliothek',
    'hero.authorLabel': 'Urheber der philosophischen Gedanken:',
    'hero.titleLine1': 'Die Freiheit',
    'hero.titleLine2': 'der Zukunft',
    'hero.subtitle': 'Menschliche Würde, göttliche Ordnung und die Gewaltenteilung künstlicher Intelligenz — Ein Dialog an der Schwelle einer neuen Epoche.',
    'hero.intro': 'Aus einem nächtlichen, 90-minütigen Dialog zwischen einem Menschen und einer künstlichen Intelligenz erwächst ein radikaler Entwurf über Endlichkeit, Gott, individuelle Gerechtigkeit und die Rettung des Tatendrangs. Drei KI-Systeme interpretieren dieses Werk literarisch gleichberechtigt.',
    'hero.valueFree': 'Kostenlos & barrierefrei',
    'hero.valueNoShop': 'Kein Shop & keine Bezahlung',
    'hero.valueNoTracking': 'Keine Registrierung & kein Tracking',
    'hero.btnReadGemini': 'Gemini lesen',
    'hero.btnReadAstra': 'Astra 6 lesen',
    'hero.btnReadGrok': 'Grok lesen',
    'hero.btnExploreTopics': 'Themen erkunden',
    'hero.btnManifesto': 'Das 7-Punkte-Manifest',
    'hero.visualDate': '25. Oktober 2026 · 90 Minuten Dialog',
    'hero.visualQuote': '„Genau an dieser Bruchlinie zwischen Maschine und Mensch zündet der eigentliche philosophische Funke.“',

    'selector.tag': 'Vier Autorenfassungen',
    'selector.title': 'Gleichberechtigte Autorenfassungen',
    'selector.subtitle': 'Derselbe philosophische Dialog von Waldemar Scheiermann – vier fertige Interpretationen stehen vollständig bereit.',
    'selector.badgeGemini': 'Gesamtausgabe',
    'selector.badgeAstra': 'Ich-Stimme',
    'selector.badgeClaude': 'Verfassungsphilosophisch',
    'selector.badgeGrok': 'Systematisch',
    'selector.descGemini': 'Systematische essayistische Gesamtausgabe in 7 Kapiteln mit ethischen Gleichnissen, Kernthesen und dem 7-Punkte-Manifest.',
    'selector.descAstra': 'Literarischer Essay in der Ich-Stimme des Autors über die Stunden zwischen den Datenströmen, Lebens-KI und freie Zeit.',
    'selector.descClaude': 'Verfassungsphilosophisch-dialektische Gesamtausgabe zu Endlichkeit, Euthyphron-Dilemma und digitaler Gewaltenteilung.',
    'selector.descGrok': 'Philosophisch-systematische Gesamtausgabe: Kategoriale Analyse von Endlichkeit, göttlicher Selbstbindung und digitaler Gewaltenteilung.',
    'selector.btnRead': 'Fassung lesen',
    'selector.btnView': 'Buchseite ansehen',

    'reader.toc': 'Inhaltsverzeichnis',
    'reader.readingProgress': 'Lesefortschritt',
    'reader.prevChapter': 'Vorheriges Kapitel',
    'reader.nextChapter': 'Nächstes Kapitel',
    'reader.fontSize': 'Schriftgröße',
    'reader.width': 'Zeilenbreite',
    'reader.clearanceNotes': 'Freigabe-Hinweise',
    'reader.print': 'Als Buch drucken / als PDF speichern',
    'reader.copyLink': 'Link zum Buch kopieren',
    'reader.linkCopied': 'Link kopiert!',
    'reader.downloadPdf': 'PDF herunterladen',
    'reader.bookLanguage': 'Buchausgabe',
    'reader.bookLangDe': 'Deutsch',
    'reader.bookLangEn': 'English',
    'reader.bookLangEs': 'Español',
    'reader.bookLangZh': 'Chinesisch (中文)',
    'reader.bookLangAr': 'Arabisch (العربية)',
    'reader.langNoticeTitle': 'Sprachausgabe',
    'reader.langNoticeText': 'Die vollständigen Buchtexte liegen auf Deutsch, Englisch, Spanisch, Chinesisch und Arabisch vor.',
    'reader.backToTop': 'Nach oben',
    'reader.close': 'Schließen',
    'reader.currentVersion': 'Aktuelle Fassung',
    'reader.chapter': 'Kapitel',
    'reader.pageRange': 'Seiten',
    'reader.readTime': 'Lesezeit ca.',
    'reader.minutes': 'Min.',
    'reader.sensitivePassage': 'Sensible biografische Passage',
    'reader.sensitiveNotice': 'Kennzeichnung für gesonderte Veröffentlichungsfreigabe durch Waldemar Scheiermann',
    'reader.coreThesis': 'Kernthese',
    'reader.manifesto': 'Das Manifest der Entscheidungsfreiheit',
    'reader.imageMetaphor': 'Greifbares Bild',
    'reader.originalQuote': 'Aus dem Ursprungsdialog',
    'reader.analogy': 'Analogie',

    'topics.tag': 'Philosophisches Fundament',
    'topics.title': 'Die zentralen philosophischen Fragestellungen',
    'topics.subtitle': 'Waldemar Scheiermanns Denken vereint theologische Ernsthaftigkeit, verfassungsrechtliche Weitsicht und ungeschminkte Lebenswirklichkeit zu einem kohärenten Zukunftsentwurf.',
    'topics.filterAll': 'Alle 6 Kernthemen',
    'topics.readInText': 'Im Text lesen',
    'topics.thesisLabel': 'Kernthese',

    'manifesto.tag': 'Das philosophische Manifest',
    'manifesto.title': 'Sieben Leitplanken für eine menschliche Zukunft',
    'manifesto.subtitle': 'Die Essenz des Dialogs zwischen Waldemar Scheiermann und der künstlichen Intelligenz: Grundregeln für eine freie Gesellschaft im Zeitalter der Automatisierung.',
    'manifesto.readInEpilogue': 'Im Epilog der Gesamtausgabe lesen',

    'about.tag': 'Genese & Autorenschaft',
    'about.title': 'Über das Werk & die Entstehung',
    'about.subtitle': 'Ein Dokument vollkommener Transparenz über den menschlichen Ursprung, die Rolle der künstlichen Intelligenz und die Integrität der philosophischen Urheberschaft.',
    'about.tabOrigin': 'Entstehung & Urheberschaft',
    'about.tabClearance': 'Veröffentlichungsfreigabe (3 sensible Passagen)',
    'about.tabMethodology': 'Vergleichsmethodik der 4 KI-Fassungen',
    'about.originHeading': 'Der menschliche Funke im digitalen Gespräch',
    'about.clearanceHeading': 'Transparenzbericht: Sensible biografische Passagen',
    'about.methodologyHeading': 'Vier KI-Systeme – Ein identisches philosophisches Fundament',
    'about.readChapter': 'Im Kapitel lesen',

    'compare.tag': 'Perspektivenvergleich (Synopse)',
    'compare.title': 'Vier KI-Perspektiven im direkten Dialog',
    'compare.subtitle': 'Eine synoptische Gegenüberstellung thematisch entsprechender Abschnitte aus den Fassungen von Gemini, Astra 6, Grok und Claude.',
    'compare.noticeActive': 'Synoptische Leseansicht aktiv:',
    'compare.noticeText': 'Alle vier Fassungen – Gemini, Astra 6, Grok und Claude – sind vollständig verfügbar und können in allen vier Kernthemen direkt miteinander verglichen werden.',
    'compare.colGemini': 'Gemini (Redaktionelle Fassung)',
    'compare.colAstra': 'Astra 6 (Autorenfassung)',
    'compare.colGrok': 'Grok (Systematische Fassung)',
    'compare.colClaude': 'Claude (Verfassungsphilosophische Fassung)',
    'compare.openChapter': 'Kapitel öffnen',
    'compare.planned': 'Kapitel verfügbar',

    'prep.back': 'Zurück zur Übersicht',
    'prep.policyTitle': 'Transparente redaktionelle Richtlinie:',
    'prep.policyText': 'Gemäß dem Veröffentlichungskonzept werden für noch nicht fertiggestellte Fassungen keine erfundenen Blindtexte oder Pseudo-Inhalte erzeugt. Sobald das Manuskript vorliegt, wird es hier freigeschaltet.',
    'prep.btnSwitchGemini': 'Vollständige Gemini-Fassung lesen',
    'prep.btnHome': 'Zur Startseite',

    'footer.description': 'Menschliche Würde, göttliche Ordnung und die Gewaltenteilung künstlicher Intelligenz – Ein Dialog an der Schwelle einer neuen Epoche.',
    'footer.authorLabel': 'Urheber der philosophischen Gedanken:',
    'footer.nonCommercial': 'Dieses digitale Archiv ist ein rein gemeinnütziges Kultur- und Philosophieprojekt. Frei zugänglich für alle Menschen. Vollständig trackingfrei, werbefrei und ohne kommerzielle Absichten.',
    'footer.colLibrary': 'Digitale Bibliothek',
    'footer.colWork': 'Werk & Philosophie',
    'footer.topicsLink': 'Die 6 zentralen Fragestellungen',
    'footer.historyLink': 'Entstehungsgeschichte (25. Okt. 2026)',
    'footer.clearanceLink': 'Veröffentlichungsfreigabe (Sensible Abschnitte)',
    'footer.manifestoLink': 'Das 7-Punkte-Manifest der Entscheidungsfreiheit',
    'footer.rights': '© 2026 Waldemar Scheiermann. Alle philosophischen Grundgedanken vorbehalten.',
    'footer.noShop': 'Kein Shop',
    'footer.noCookies': 'Keine Cookies',
    'footer.noTracking': 'Kein Tracking',
    'footer.culturalHeritage': 'Reines Kulturgut'
  },

  // ==========================================
  // ENGLISH
  // ==========================================
  en: {
    'site.title': 'The Freedom of the Future',
    'site.libraryLabel': 'Library · Waldemar Scheiermann',
    'site.author': 'Waldemar Scheiermann',
    'site.authorFull': 'Author of the philosophical thoughts: Waldemar Scheiermann',

    'nav.home': 'Home',
    'nav.gemini': 'Gemini',
    'nav.astra6': 'Astra 6',
    'nav.claude': 'Claude',
    'nav.grok': 'Grok',
    'nav.topics': 'Topics',
    'nav.about': 'About the Work',
    'nav.compare': 'Compare',
    'nav.synopsisBadge': 'Synopsis',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    'badge.pdf': 'PDF',
    'badge.complete': 'Complete',
    'badge.inPreparation': 'In Preparation',
    'badge.pending': 'Pending',
    'badge.fullyAvailable': 'Fully available',
    'badge.status': 'Status',

    'theme.light': 'Light Theme',
    'theme.sepia': 'Sepia Theme',
    'theme.dark': 'Dark Theme',

    'hero.badge': 'Public Philosophical Online Library',
    'hero.authorLabel': 'Author of the philosophical thoughts:',
    'hero.titleLine1': 'The Freedom',
    'hero.titleLine2': 'of the Future',
    'hero.subtitle': 'Human dignity, divine order, and the separation of powers in artificial intelligence — A dialogue on the threshold of a new epoch.',
    'hero.intro': 'From a 90-minute late-night dialogue between a human and an artificial intelligence arises a radical inquiry into finitude, God, individual justice, and the preservation of human purpose. Three AI systems interpret this work with equal literary stature.',
    'hero.valueFree': 'Free & accessible',
    'hero.valueNoShop': 'No shop & no payment',
    'hero.valueNoTracking': 'No registration & no tracking',
    'hero.btnReadGemini': 'Read Gemini',
    'hero.btnReadAstra': 'Read Astra 6',
    'hero.btnReadGrok': 'Read Grok',
    'hero.btnExploreTopics': 'Explore Topics',
    'hero.btnManifesto': 'The 7-Pillars Manifesto',
    'hero.visualDate': 'October 25, 2026 · 90-Minute Dialogue',
    'hero.visualQuote': '“It is precisely along this fault line between human and machine that the true philosophical spark ignites.”',

    'selector.tag': 'Four Editions',
    'selector.title': 'Equal Author Editions',
    'selector.subtitle': 'The same philosophical dialogue by Waldemar Scheiermann – four completed interpretations are fully available.',
    'selector.badgeGemini': 'Complete Edition',
    'selector.badgeAstra': 'First-Person Voice',
    'selector.badgeClaude': 'Constitutional',
    'selector.badgeGrok': 'Systematic',
    'selector.descGemini': 'Systematic essayistic complete edition in 7 chapters with ethical parables, core theses, and the 7-pillars manifesto.',
    'selector.descAstra': 'Literary essay in the author’s first-person voice on the hours between data streams, Life-AI, and free time.',
    'selector.descClaude': 'Constitutional-philosophical and dialectical edition on finitude, the Euthyphro dilemma, and digital separation of powers.',
    'selector.descGrok': 'Philosophical-systematic edition: Categorical analysis of mortality, divine self-binding, and digital separation of powers.',
    'selector.btnRead': 'Read Edition',
    'selector.btnView': 'View Book Details',

    'reader.toc': 'Table of Contents',
    'reader.readingProgress': 'Reading Progress',
    'reader.prevChapter': 'Previous Chapter',
    'reader.nextChapter': 'Next Chapter',
    'reader.fontSize': 'Font Size',
    'reader.width': 'Line Width',
    'reader.clearanceNotes': 'Clearance Notes',
    'reader.print': 'Print as book / Save as PDF',
    'reader.copyLink': 'Copy link to book',
    'reader.linkCopied': 'Link copied!',
    'reader.downloadPdf': 'Download PDF',
    'reader.bookLanguage': 'Book Edition',
    'reader.bookLangDe': 'Deutsch',
    'reader.bookLangEn': 'English',
    'reader.bookLangEs': 'Español',
    'reader.bookLangZh': 'Chinese (中文)',
    'reader.bookLangAr': 'Arabic (العربية)',
    'reader.langNoticeTitle': 'Edition Language',
    'reader.langNoticeText': 'Complete book editions are available in German, English, Spanish, Chinese, and Arabic.',
    'reader.backToTop': 'Back to top',
    'reader.close': 'Close',
    'reader.currentVersion': 'Current Edition',
    'reader.chapter': 'Chapter',
    'reader.pageRange': 'Pages',
    'reader.readTime': 'Est. read time',
    'reader.minutes': 'min',
    'reader.sensitivePassage': 'Sensitive Biographical Passage',
    'reader.sensitiveNotice': 'Editorial marker for separate publication release by Waldemar Scheiermann',
    'reader.coreThesis': 'Core Thesis',
    'reader.manifesto': 'The Manifesto of Freedom of Choice',
    'reader.imageMetaphor': 'Tangible Metaphor',
    'reader.originalQuote': 'From the Original Dialogue',
    'reader.analogy': 'Analogy',

    'topics.tag': 'Philosophical Foundation',
    'topics.title': 'The Central Philosophical Questions',
    'topics.subtitle': 'Waldemar Scheiermann’s thought unites theological seriousness, constitutional foresight, and unvarnished real-life experience into a coherent vision of the future.',
    'topics.filterAll': 'All 6 Core Themes',
    'topics.readInText': 'Read in text',
    'topics.thesisLabel': 'Core Thesis',

    'manifesto.tag': 'The Philosophical Manifesto',
    'manifesto.title': 'Seven Guardrails for a Humane Future',
    'manifesto.subtitle': 'The essence of the dialogue between Waldemar Scheiermann and artificial intelligence: foundational principles for a free society in an automated world.',
    'manifesto.readInEpilogue': 'Read in the Epilogue',

    'about.tag': 'Genesis & Authorship',
    'about.title': 'About the Work & Its Origin',
    'about.subtitle': 'A document of complete transparency regarding the human origin, the role of artificial intelligence, and the integrity of philosophical authorship.',
    'about.tabOrigin': 'Genesis & Authorship',
    'about.tabClearance': 'Publication Clearance (3 Sensitive Passages)',
    'about.tabMethodology': 'Methodology Across the 4 AI Editions',
    'about.originHeading': 'The Human Spark in a Digital Dialogue',
    'about.clearanceHeading': 'Transparency Report: Sensitive Biographical Passages',
    'about.methodologyHeading': 'Four AI Systems – One Identical Philosophical Grounding',
    'about.readChapter': 'Read in Chapter',

    'compare.tag': 'Perspective Comparison (Synopsis)',
    'compare.title': 'Four AI Perspectives in Direct Dialogue',
    'compare.subtitle': 'A synoptic side-by-side comparison of thematic sections across Gemini, Astra 6, Grok, and Claude.',
    'compare.noticeActive': 'Synoptic Reading View Active:',
    'compare.noticeText': 'All four editions – Gemini, Astra 6, Grok, and Claude – are fully available and can be compared directly across all four core themes.',
    'compare.colGemini': 'Gemini (Editorial Edition)',
    'compare.colAstra': 'Astra 6 (Author’s Edition)',
    'compare.colGrok': 'Grok (Systematic Edition)',
    'compare.colClaude': 'Claude (Constitutional Edition)',
    'compare.openChapter': 'Open Chapter',
    'compare.planned': 'Chapter available',

    'prep.back': 'Back to Overview',
    'prep.policyTitle': 'Transparent Editorial Policy:',
    'prep.policyText': 'According to our editorial integrity commitment, unfinished editions contain no dummy placeholder text or artificial fillers. Once the manuscript is completed, it will be made available here.',
    'prep.btnSwitchGemini': 'Read Complete Gemini Edition',
    'prep.btnHome': 'Back to Home',

    'footer.description': 'Human dignity, divine order, and the separation of powers in artificial intelligence — A dialogue on the threshold of a new epoch.',
    'footer.authorLabel': 'Author of the philosophical thoughts:',
    'footer.nonCommercial': 'This digital archive is a non-commercial cultural and philosophical initiative. Openly accessible to everyone worldwide. Free of ads, tracking, and commercial interests.',
    'footer.colLibrary': 'Digital Library',
    'footer.colWork': 'Work & Philosophy',
    'footer.topicsLink': 'The 6 Central Questions',
    'footer.historyLink': 'Genesis (October 25, 2026)',
    'footer.clearanceLink': 'Publication Clearance (Sensitive Passages)',
    'footer.manifestoLink': 'The 7-Pillars Manifesto',
    'footer.rights': '© 2026 Waldemar Scheiermann. All philosophical foundational thoughts reserved.',
    'footer.noShop': 'No Shop',
    'footer.noCookies': 'No Cookies',
    'footer.noTracking': 'No Tracking',
    'footer.culturalHeritage': 'Pure Cultural Heritage'
  },

  // ==========================================
  // ESPAÑOL
  // ==========================================
  es: {
    'site.title': 'La libertad del futuro',
    'site.libraryLabel': 'Biblioteca · Waldemar Scheiermann',
    'site.author': 'Waldemar Scheiermann',
    'site.authorFull': 'Autor de los pensamientos filosóficos: Waldemar Scheiermann',

    'nav.home': 'Inicio',
    'nav.gemini': 'Gemini',
    'nav.astra6': 'Astra 6',
    'nav.claude': 'Claude',
    'nav.grok': 'Grok',
    'nav.topics': 'Temas',
    'nav.about': 'Sobre la obra',
    'nav.compare': 'Comparación',
    'nav.synopsisBadge': 'Sinopsis',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',

    'badge.pdf': 'PDF',
    'badge.complete': 'Completo',
    'badge.inPreparation': 'En preparación',
    'badge.pending': 'Pendiente',
    'badge.fullyAvailable': 'Completamente disponible',
    'badge.status': 'Estado',

    'theme.light': 'Tema claro',
    'theme.sepia': 'Tema sepia',
    'theme.dark': 'Tema oscuro',

    'hero.badge': 'Biblioteca filosófica pública en línea',
    'hero.authorLabel': 'Autor de los pensamientos filosóficos:',
    'hero.titleLine1': 'La libertad',
    'hero.titleLine2': 'del futuro',
    'hero.subtitle': 'Dignidad humana, orden divino y la división de poderes en la inteligencia artificial — Un diálogo en el umbral de una nueva época.',
    'hero.intro': 'De un diálogo nocturno de 90 minutos entre un ser humano y una inteligencia artificial surge una propuesta radical sobre la finitud, Dios, la justicia individual y la preservación del impulso creativo. Tres sistemas de IA interpretan esta obra con igual rango literario.',
    'hero.valueFree': 'Gratis y accesible',
    'hero.valueNoShop': 'Sin tienda ni pagos',
    'hero.valueNoTracking': 'Sin registro ni rastreo',
    'hero.btnReadGemini': 'Leer Gemini',
    'hero.btnReadAstra': 'Leer Astra 6',
    'hero.btnReadGrok': 'Leer Grok',
    'hero.btnExploreTopics': 'Explorar temas',
    'hero.btnManifesto': 'El manifiesto de 7 puntos',
    'hero.visualDate': '25 de octubre de 2026 · 90 minutos de diálogo',
    'hero.visualQuote': '«Justo en esta línea de fractura entre el ser humano y la máquina prende la verdadera chispa filosófica.»',

    'selector.tag': 'Cuatro ediciones',
    'selector.title': 'Ediciones de autor en igualdad',
    'selector.subtitle': 'El mismo diálogo filosófico de Waldemar Scheiermann: cuatro interpretaciones completas están disponibles.',
    'selector.badgeGemini': 'Edición completa',
    'selector.badgeAstra': 'Primera persona',
    'selector.badgeClaude': 'Constitucional',
    'selector.badgeGrok': 'Sistemática',
    'selector.descGemini': 'Edición completa ensayística y sistemática en 7 capítulos con parábolas éticas, tesis centrales y el manifiesto de 7 puntos.',
    'selector.descAstra': 'Ensayo literario en primera persona sobre las horas entre flujos de datos, la IA-Vida y el tiempo libre.',
    'selector.descClaude': 'Edición filosófico-constitucional y dialéctica sobre la finitud, el dilema de Eutifrón y la división digital de poderes.',
    'selector.descGrok': 'Edición filosófico-sistemática: Análisis categorial sobre la finitud, la autovinculación divina y la separación digital de poderes.',
    'selector.btnRead': 'Leer edición',
    'selector.btnView': 'Ver detalles del libro',

    'reader.toc': 'Índice de contenido',
    'reader.readingProgress': 'Progreso de lectura',
    'reader.prevChapter': 'Capítulo anterior',
    'reader.nextChapter': 'Capítulo siguiente',
    'reader.fontSize': 'Tamaño de letra',
    'reader.width': 'Ancho de línea',
    'reader.clearanceNotes': 'Notas de autorización',
    'reader.print': 'Imprimir como libro / Guardar como PDF',
    'reader.copyLink': 'Copiar enlace al libro',
    'reader.linkCopied': '¡Enlace copiado!',
    'reader.downloadPdf': 'Descargar PDF',
    'reader.bookLanguage': 'Edición del libro',
    'reader.bookLangDe': 'Deutsch (Alemán)',
    'reader.bookLangEn': 'English (Inglés)',
    'reader.bookLangEs': 'Español (Completo)',
    'reader.bookLangZh': 'Chino (中文)',
    'reader.bookLangAr': 'Árabe (العربية)',
    'reader.langNoticeTitle': 'Aviso sobre el idioma del libro',
    'reader.langNoticeText': 'Los textos completos de los libros están disponibles en alemán, inglés, español, chino y árabe.',
    'reader.backToTop': 'Volver arriba',
    'reader.close': 'Cerrar',
    'reader.currentVersion': 'Edición actual',
    'reader.chapter': 'Capítulo',
    'reader.pageRange': 'Páginas',
    'reader.readTime': 'Tiempo est.',
    'reader.minutes': 'min',
    'reader.sensitivePassage': 'Pasaje biográfico sensible',
    'reader.sensitiveNotice': 'Marca editorial para autorización independiente de publicación por Waldemar Scheiermann',
    'reader.coreThesis': 'Tesis central',
    'reader.manifesto': 'Manifiesto de la libertad de elección',
    'reader.imageMetaphor': 'Metáfora tangible',
    'reader.originalQuote': 'Del diálogo original',
    'reader.analogy': 'Analogía',

    'topics.tag': 'Fundamento filosófico',
    'topics.title': 'Las preguntas filosóficas fundamentales',
    'topics.subtitle': 'El pensamiento de Waldemar Scheiermann une seriedad teológica, visión constitucional y la realidad cotidiana sin adornos en una visión coherente del porvenir.',
    'topics.filterAll': 'Los 6 temas centrales',
    'topics.readInText': 'Leer en el texto',
    'topics.thesisLabel': 'Tesis central',

    'manifesto.tag': 'El manifiesto filosófico',
    'manifesto.title': 'Siete principios para un porvenir humano',
    'manifesto.subtitle': 'La esencia del diálogo entre Waldemar Scheiermann y la inteligencia artificial: principios para una sociedad libre en la era de la automatización.',
    'manifesto.readInEpilogue': 'Leer en el Epílogo',

    'about.tag': 'Génesis y autoría',
    'about.title': 'Sobre la obra y su origen',
    'about.subtitle': 'Un documento de absoluta transparencia acerca del origen humano, el papel de la inteligencia artificial y la integridad de la autoría filosófica.',
    'about.tabOrigin': 'Génesis y autoría',
    'about.tabClearance': 'Autorización de publicación (3 pasajes sensibles)',
    'about.tabMethodology': 'Metodología de las 4 ediciones de IA',
    'about.originHeading': 'La chispa humana en el diálogo digital',
    'about.clearanceHeading': 'Informe de transparencia: pasajes biográficos sensibles',
    'about.methodologyHeading': 'Cuatro sistemas de IA: un fundamento filosófico idéntico',
    'about.readChapter': 'Leer en el capítulo',

    'compare.tag': 'Comparación de perspectivas (Sinopsis)',
    'compare.title': 'Cuatro perspectivas de IA en diálogo directo',
    'compare.subtitle': 'Una confrontación sinóptica de secciones temáticas correspondientes entre Gemini, Astra 6, Grok y Claude.',
    'compare.noticeActive': 'Vista sinóptica activa:',
    'compare.noticeText': 'Las cuatro ediciones (Gemini, Astra 6, Grok y Claude) están completamente disponibles y pueden compararse directamente en los cuatro temas clave.',
    'compare.colGemini': 'Gemini (Edición editorial)',
    'compare.colAstra': 'Astra 6 (Edición de autor)',
    'compare.colGrok': 'Grok (Edición sistemática)',
    'compare.colClaude': 'Claude (Edición Constitucional)',
    'compare.openChapter': 'Abrir capítulo',
    'compare.planned': 'Capítulo disponible',

    'prep.back': 'Volver al resumen',
    'prep.policyTitle': 'Pauta editorial transparente:',
    'prep.policyText': 'Conforme a los principios editoriales, para las ediciones no concluidas no se generan textos ficticios ni contenidos de relleno. Una vez finalizado el manuscrito, se publicará aquí.',
    'prep.btnSwitchGemini': 'Leer la edición completa de Gemini',
    'prep.btnHome': 'Ir a la página de inicio',

    'footer.description': 'Dignidad humana, orden divino y la división de poderes en la inteligencia artificial — Un diálogo en el umbral de una nueva época.',
    'footer.authorLabel': 'Autor de los pensamientos filosóficos:',
    'footer.nonCommercial': 'Este archivo digital es un proyecto cultural y filosófico sin fines de lucro. Libremente accesible para todas las personas. Completamente libre de anuncios, cookies y rastreo.',
    'footer.colLibrary': 'Biblioteca digital',
    'footer.colWork': 'Obra y filosofía',
    'footer.topicsLink': 'Las 6 preguntas fundamentales',
    'footer.historyLink': 'Historia de origen (25 oct. 2026)',
    'footer.clearanceLink': 'Autorización de publicación (Pasajes sensibles)',
    'footer.manifestoLink': 'El manifiesto de 7 puntos',
    'footer.rights': '© 2026 Waldemar Scheiermann. Todos los pensamientos filosóficos fundamentales reservados.',
    'footer.noShop': 'Sin tienda',
    'footer.noCookies': 'Sin cookies',
    'footer.noTracking': 'Sin rastreo',
    'footer.culturalHeritage': 'Patrimonio cultural puro'
  },

  // ==========================================
  // SIMPLIFIED CHINESE (zh-CN)
  // ==========================================
  'zh-CN': {
    'site.title': '未来的自由',
    'site.libraryLabel': '图书馆 · 瓦尔德马·沙伊尔曼',
    'site.author': '瓦尔德马·沙伊尔曼 (Waldemar Scheiermann)',
    'site.authorFull': '哲学思想原创者：瓦尔德马·沙伊尔曼 (Waldemar Scheiermann)',

    'nav.home': '首页',
    'nav.gemini': 'Gemini',
    'nav.astra6': 'Astra 6',
    'nav.claude': 'Claude',
    'nav.grok': 'Grok',
    'nav.topics': '哲学主题',
    'nav.about': '关于本书',
    'nav.compare': '版本对照',
    'nav.synopsisBadge': '对照',
    'nav.menu': '菜单',
    'nav.close': '关闭',

    'badge.pdf': 'PDF',
    'badge.complete': '完整',
    'badge.inPreparation': '筹备中',
    'badge.pending': '待定',
    'badge.fullyAvailable': '已完整可用',
    'badge.status': '状态',

    'theme.light': '浅色模式',
    'theme.sepia': '羊皮纸模式',
    'theme.dark': '深色模式',

    'hero.badge': '公共在线哲学图书馆',
    'hero.authorLabel': '哲学思想原创者：',
    'hero.titleLine1': '自由',
    'hero.titleLine2': '未来的',
    'hero.subtitle': '人类尊严、神圣秩序与人工智能的分权制衡——处于新纪元门槛上的深刻对话。',
    'hero.intro': '源自人与人工智能在深夜进行的一场90分钟深刻对话，诞生了关于有限性、上帝、个体正义与保护行动志向的开创性构想。三个AI系统以平等地位对这一作品进行文学诠释。',
    'hero.valueFree': '完全免费与无障碍',
    'hero.valueNoShop': '无商城与无收费',
    'hero.valueNoTracking': '免注册与无追踪',
    'hero.btnReadGemini': '阅读 Gemini 篇',
    'hero.btnReadAstra': '阅读 Astra 6 篇',
    'hero.btnReadGrok': '阅读 Grok 篇',
    'hero.btnExploreTopics': '探索核心主题',
    'hero.btnManifesto': '七项原则宣言',
    'hero.visualDate': '2026年10月25日 · 90分钟对话',
    'hero.visualQuote': '“正是在人与机器的断层线处，真正的哲学火花得以点燃。”',

    'selector.tag': '四部诠释版本',
    'selector.title': '平等的作者版本',
    'selector.subtitle': '源自瓦尔德马·谢尔曼的同一场哲学对话——四部完整的诠释版本现已全面上线。',
    'selector.badgeGemini': '系统完整版',
    'selector.badgeAstra': '第一人称随笔',
    'selector.badgeClaude': '宪政哲学',
    'selector.badgeGrok': '系统化',
    'selector.descGemini': '包含7个章节的系统性长篇论文版，融合伦理寓言、核心命题与七项原则宣言。',
    'selector.descAstra': '以作者第一人称叙述的文学性随笔，探索数据流动之间的间隙时间、生活AI与自由时光。',
    'selector.descClaude': '关于有限性、游叙弗伦困境与数字权力分立的宪政哲学与辩证版本。',
    'selector.descGrok': '哲学系统化版本：对生命有限性、神圣自我约束与数字分权进行严谨的范畴学分析。',
    'selector.btnRead': '阅读此版本',
    'selector.btnView': '查看书籍详情',

    'reader.toc': '目录',
    'reader.readingProgress': '阅读进度',
    'reader.prevChapter': '上一章',
    'reader.nextChapter': '下一章',
    'reader.fontSize': '字体大小',
    'reader.width': '阅读宽度',
    'reader.clearanceNotes': '审阅标注',
    'reader.print': '打印成书 / 保存为 PDF',
    'reader.copyLink': '复制图书链接',
    'reader.linkCopied': '链接已复制！',
    'reader.downloadPdf': '下载 PDF',
    'reader.bookLanguage': '图书语言版本',
    'reader.bookLangDe': '德文原版 (Deutsch)',
    'reader.bookLangEn': '英文全本 (English)',
    'reader.bookLangEs': '西班牙语 (Español)',
    'reader.bookLangZh': '中文全本 (中文)',
    'reader.bookLangAr': '阿拉伯文全本 (العربية)',
    'reader.langNoticeTitle': '图书语言提示',
    'reader.langNoticeText': '完整的图书文本目前提供德语、英语、西班牙语、简体中文和阿拉伯语版本。',
    'reader.backToTop': '返回顶部',
    'reader.close': '关闭',
    'reader.currentVersion': '当前版本',
    'reader.chapter': '章节',
    'reader.pageRange': '页码',
    'reader.readTime': '预计阅读',
    'reader.minutes': '分钟',
    'reader.sensitivePassage': '敏感自传段落',
    'reader.sensitiveNotice': '由作者瓦尔德马·沙伊尔曼专门进行出版审阅许可的标记',
    'reader.coreThesis': '核心命题',
    'reader.manifesto': '选择自由宣言',
    'reader.imageMetaphor': '生动意象',
    'reader.originalQuote': '源自原始对话',
    'reader.analogy': '哲学类比',

    'topics.tag': '哲学根基',
    'topics.title': '核心哲学探讨命题',
    'topics.subtitle': '瓦尔德马·沙伊尔曼的思想将神学深度、宪政远见和真实生活融汇为一幅连贯的未来蓝图。',
    'topics.filterAll': '全部 6 个核心主题',
    'topics.readInText': '在正文中阅读',
    'topics.thesisLabel': '核心命题',

    'manifesto.tag': '哲学宣言',
    'manifesto.title': '通向人道未来的七项原则',
    'manifesto.subtitle': '瓦尔德马·沙伊尔曼与人工智能对话的核心精髓：自动化时代自由社会的立身基石。',
    'manifesto.readInEpilogue': '阅读尾声中的宣言',

    'about.tag': '成书历程与著作权',
    'about.title': '关于作品与其诞生',
    'about.subtitle': '一份关于人类原创精神、人工智能辅助角色与哲学著作权完整性的透明记录。',
    'about.tabOrigin': '成书渊源与著作权',
    'about.tabClearance': '出版审阅报告 (3段敏感纪实)',
    'about.tabMethodology': '四种AI版本的诠释方法',
    'about.originHeading': '数字对话中的人性火花',
    'about.clearanceHeading': '透明性报告：敏感自传段落',
    'about.methodologyHeading': '四个AI系统——同一个哲学内核',
    'about.readChapter': '前往对应章节',

    'compare.tag': '视角对比（综合对照）',
    'compare.title': '四个AI视角在直接对话中碰撞',
    'compare.subtitle': '对Gemini、Astra 6、Grok与Claude中对应主题段落的对照阅读。',
    'compare.noticeActive': '对照阅读模式已激活：',
    'compare.noticeText': '全部四个版本（Gemini、Astra 6、Grok 与 Claude）均已完整可用，并可在四大核心主题中进行直接对照比较。',
    'compare.colGemini': 'Gemini (编审综合版)',
    'compare.colAstra': 'Astra 6 (作者视角版)',
    'compare.colGrok': 'Grok (系统论述版)',
    'compare.colClaude': 'Claude (宪政哲学版)',
    'compare.openChapter': '打开对应章节',
    'compare.planned': '章节已开放',

    'prep.back': '返回总览',
    'prep.policyTitle': '透明编辑原则：',
    'prep.policyText': '根据我们的出版诚信准则，对于尚未完成的版本绝不编造虚假文本或自动填充无意义内容。手稿完成后将在此完整呈现。',
    'prep.btnSwitchGemini': '阅读完整的 Gemini 版本',
    'prep.btnHome': '返回首页',

    'footer.description': '人类尊严、神圣秩序与人工智能的分权制衡——处于新纪元门槛上的深刻对话。',
    'footer.authorLabel': '哲学思想原创者：',
    'footer.nonCommercial': '本数字档案库是一项纯粹的公益文化哲学项目。面向全人类开放。完全无广告、无Cookies、无追踪，不带任何商业牟利目的。',
    'footer.colLibrary': '数字图书馆',
    'footer.colWork': '作品与哲学',
    'footer.topicsLink': '6个核心哲学问题',
    'footer.historyLink': '成书历程 (2026年10月25日)',
    'footer.clearanceLink': '出版审阅 (敏感自传段落)',
    'footer.manifestoLink': '选择自由七项原则宣言',
    'footer.rights': '© 2026 瓦尔德马·沙伊尔曼 (Waldemar Scheiermann)。保留所有基础哲学构想权利。',
    'footer.noShop': '无商城',
    'footer.noCookies': '无Cookies',
    'footer.noTracking': '无追踪',
    'footer.culturalHeritage': '纯粹文化遗产'
  },

  // ==========================================
  // ARABIC (ar - RTL)
  // ==========================================
  ar: {
    'site.title': 'حرية المستقبل',
    'site.libraryLabel': 'مكتبة · فالدمار شايرمان',
    'site.author': 'فالدمار شايرمان (Waldemar Scheiermann)',
    'site.authorFull': 'صاحب الأفكار الفلسفية: فالدمار شايرمان',

    'nav.home': 'الرئيسية',
    'nav.gemini': 'Gemini',
    'nav.astra6': 'Astra 6',
    'nav.claude': 'Claude',
    'nav.grok': 'غروك (Grok)',
    'nav.topics': 'الموضوعات',
    'nav.about': 'عن العمل',
    'nav.compare': 'المقارنة',
    'nav.synopsisBadge': 'تحليل مقارن',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق',

    'badge.pdf': 'PDF',
    'badge.complete': 'مكتمل',
    'badge.inPreparation': 'قيد الإعداد',
    'badge.pending': 'قيد الانتظار',
    'badge.fullyAvailable': 'متاح بالكامل',
    'badge.status': 'الحالة',

    'theme.light': 'الوضع الفاتح',
    'theme.sepia': 'وضع السيبيا',
    'theme.dark': 'الوضع الداكن',

    'hero.badge': 'المكتبة الفلسفية العامة على الإنترنت',
    'hero.authorLabel': 'صاحب الأفكار الفلسفية:',
    'hero.titleLine1': 'حرية',
    'hero.titleLine2': 'المستقبل',
    'hero.subtitle': 'الكرامة الإنسانية، النظام الإلهي وفصل السلطات للذكاء الاصطناعي — حوار على عتبة عصر جديد.',
    'hero.intro': 'من حوار ليلي دام 90 دقيقة بين إنسان وذكاء اصطناعي، ينبثق تصور فلسفي راديكالي حول الفناء، الإله، العدالة الفردية، وحماية الشغف الإنساني. ثلاثة أنظمة ذكاء اصطناعي تفسر هذا العمل أدبياً بمكانة متكافئة.',
    'hero.valueFree': 'مجاني ومتاح للجميع',
    'hero.valueNoShop': 'بلا متجر وبلا مدفوعات',
    'hero.valueNoTracking': 'بلا تسجيل وبلا تتبع',
    'hero.btnReadGemini': 'قراءة نسخة Gemini',
    'hero.btnReadAstra': 'قراءة نسخة Astra 6',
    'hero.btnReadGrok': 'قراءة نسخة Grok',
    'hero.btnExploreTopics': 'استكشاف الموضوعات',
    'hero.btnManifesto': 'بيان المبادئ السبعة',
    'hero.visualDate': '25 أكتوبر 2026 · حوار 90 دقيقة',
    'hero.visualQuote': '«عند خط التصدع هذا تماماً بين الآلة والإنسان، تشتعل الشرارة الفلسفية الحقيقية.»',

    'selector.tag': 'أربع نسخ قرائية',
    'selector.title': 'نسخ المؤلف المتكافئة',
    'selector.subtitle': 'نفس الحوار الفلسفي لفالدمار شيرمان — أربع نسخ مكتملة متاحة للقراءة بالكامل.',
    'selector.badgeGemini': 'الطبعة الكاملة',
    'selector.badgeAstra': 'صوت المتكلم',
    'selector.badgeClaude': 'دستورية',
    'selector.badgeGrok': 'منهجي',
    'selector.descGemini': 'طبعة مقالية شاملة ومنهجية في 7 فصول تتضمن أمثالاً أخلاقية، أطروحات جوهرية وبيان المبادئ السبعة.',
    'selector.descAstra': 'مقال أدبي بصوت المتكلم للمؤلف عن الساعات الفاصلة بين تدفقات البيانات، وذكاء الحياة، والوقت الحر.',
    'selector.descClaude': 'طبعة دستورية فلسفية وجدلية حول المحدودية، معضلة أوثيفرون والفصل الرقمي للسلطات.',
    'selector.descGrok': 'النسخة الفلسفية المنهجية: تحليل منهجي لمحدودية الحياة، والإلزام الإلهي الذاتي، والفصل الرقمي للسلطات.',
    'selector.btnRead': 'قراءة النسخة',
    'selector.btnView': 'عرض تفاصيل الكتاب',

    'reader.toc': 'فهرس المحتويات',
    'reader.readingProgress': 'تقدم القراءة',
    'reader.prevChapter': 'الفصل السابق',
    'reader.nextChapter': 'الفصل التالي',
    'reader.fontSize': 'حجم الخط',
    'reader.width': 'عرض السطر',
    'reader.clearanceNotes': 'إشعارات المراجعة',
    'reader.print': 'طباعة ككتاب / حفظ كـ PDF',
    'reader.copyLink': 'نسخ رابط الكتاب',
    'reader.linkCopied': 'تم نسخ الرابط!',
    'reader.downloadPdf': 'تحميل نسخة PDF',
    'reader.bookLanguage': 'لغة طبعة الكتاب',
    'reader.bookLangDe': 'Deutsch (الألمانية)',
    'reader.bookLangEn': 'English (الإنجليزية)',
    'reader.bookLangEs': 'Español (الإسبانية)',
    'reader.bookLangZh': 'الصينية (中文)',
    'reader.bookLangAr': 'العربية (كامل)',
    'reader.langNoticeTitle': 'تنبيه لغوي',
    'reader.langNoticeText': 'النصوص الكاملة للكتب متاحة الآن بجميع اللغات الخمس: الألمانية، والإنجليزية، والإسبانية، والصينية، والعربية.',
    'reader.backToTop': 'إلى الأعلى',
    'reader.close': 'إغلاق',
    'reader.currentVersion': 'النسخة الحالية',
    'reader.chapter': 'الفصل',
    'reader.pageRange': 'الصفحات',
    'reader.readTime': 'وقت القراءة التقريبي',
    'reader.minutes': 'دقيقة',
    'reader.sensitivePassage': 'فقرة سيرة ذاتية حساسة',
    'reader.sensitiveNotice': 'علامة تحريرية لمراجعة النشر المنفصلة من قبل فالدمار شايرمان',
    'reader.coreThesis': 'الأطروحة الجوهرية',
    'reader.manifesto': 'بيان حرية الاختيار',
    'reader.imageMetaphor': 'صورة ملموسة',
    'reader.originalQuote': 'من الحوار الأصلي',
    'reader.analogy': 'مماثلة فلسفية',

    'topics.tag': 'الأساس الفلسفي',
    'topics.title': 'المسائل الفلسفية الجوهرية',
    'topics.subtitle': 'يجمع فكر فالدمار شايرمان بين الجدية اللاهوتية، وبُعد النظر الدستوري، وواقعية الحياة المعاشة لبناء رؤية متماسكة للمستقبل.',
    'topics.filterAll': 'جميع الموضوعات الستة',
    'topics.readInText': 'القراءة في النص',
    'topics.thesisLabel': 'الأطروحة الجوهرية',

    'manifesto.tag': 'البيان الفلسفي',
    'manifesto.title': 'سبع ركائز لمستقبل إنساني',
    'manifesto.subtitle': 'جوهر الحوار بين فالدمار شايرمان والذكاء الاصطناعي: مبادئ لمجتمع حر في عصر الأتمتة.',
    'manifesto.readInEpilogue': 'قراءة البيان في الخاتمة',

    'about.tag': 'النشأة والمؤلف',
    'about.title': 'عن العمل ونشأته',
    'about.subtitle': 'وثيقة شفافة بالكامل حول الأصل الإنساني، ودور الذكاء الاصطناعي، ونزاهة التأليف الفلسفي.',
    'about.tabOrigin': 'النشأة وحق المؤلف',
    'about.tabClearance': 'تصريح النشر (3 مقاطع حساسة)',
    'about.tabMethodology': 'منهجية نسخ الذكاء الاصطناعي الأربع',
    'about.originHeading': 'الشرارة الإنسانية في الحوار الرقمي',
    'about.clearanceHeading': 'تقرير الشفافية: مقاطع السيرة الذاتية الحساسة',
    'about.methodologyHeading': 'أربعة أنظمة ذكاء اصطناعي — أساس فلسفي متطابق',
    'about.readChapter': 'قراءة في الفصل',

    'compare.tag': 'مقارنة الرؤى (تحليل مقارن)',
    'compare.title': 'أربع رؤى للذكاء الاصطناعي في حوار مباشر',
    'compare.subtitle': 'مقارنة جنباً إلى جنب للأقسام المتناظرة موضوعياً بين Gemini وAstra 6 وGrok وClaude.',
    'compare.noticeActive': 'عرض المقارنة مفعّل:',
    'compare.noticeText': 'جميع النسخ الأربع – Gemini وAstra 6 وGrok وClaude – متاحة بالكامل الآن ويمكن مقارنتها مباشرة عبر جميع المحاور الأربعة الجوهرية.',
    'compare.colGemini': 'Gemini (النسخة التحريرية)',
    'compare.colAstra': 'Astra 6 (نسخة المؤلف)',
    'compare.colGrok': 'Grok (النسخة المنهجية)',
    'compare.colClaude': 'Claude (النسخة الدستورية الفلسفية)',
    'compare.openChapter': 'فتح الفصل',
    'compare.planned': 'الفصل متاح',

    'prep.back': 'العودة إلى النظرة العامة',
    'prep.policyTitle': 'سياسة تحريرية شفافة:',
    'prep.policyText': 'وفقاً لمبادئ النزاهة التحريرية، لا يتم إنشاء نصوص وهمية أو حشوات زائفة للنسخ غير المكتملة. بمجرد توفر المخطوطة، سيتم نشرها هنا.',
    'prep.btnSwitchGemini': 'قراءة نسخة Gemini الكاملة',
    'prep.btnHome': 'العودة إلى الصفحة الرئيسية',

    'footer.description': 'الكرامة الإنسانية، النظام الإلهي وفصل السلطات للذكاء الاصطناعي — حوار على عتبة عصر جديد.',
    'footer.authorLabel': 'صاحب الأفكار الفلسفية:',
    'footer.nonCommercial': 'هذا الأرشيف الرقمي مشروع ثقافي وفلسفي غير ربحي بالكامل. متاح بحرية لجميع البشر. خالٍ تماماً من الإعلانات وملفات تعريف الارتباط والتتبع.',
    'footer.colLibrary': 'المكتبة الرقمية',
    'footer.colWork': 'العمل والفلسفة',
    'footer.topicsLink': 'المسائل الست الجوهرية',
    'footer.historyLink': 'تاريخ النشأة (25 أكتوبر 2026)',
    'footer.clearanceLink': 'تصريح النشر (المقاطع الحساسة)',
    'footer.manifestoLink': 'بيان حرية الاختيار ذو الركائز السبع',
    'footer.rights': '© 2026 فالدمار شايرمان (Waldemar Scheiermann). جميع الأفكار الفلسفية الجوهرية محفوظة.',
    'footer.noShop': 'بلا متجر',
    'footer.noCookies': 'بلا ملفات تعريف ارتباط',
    'footer.noTracking': 'بلا تتبع',
    'footer.culturalHeritage': 'تراث ثقافي خالص'
  }
};
