export type CalloutType = 
  | 'image-metaphor'     // GREIFBARES BILD
  | 'dialog-quote'       // AUS DEM URSPRUNGSDIALOG
  | 'analogy'            // ANALOGIE
  | 'core-thesis'        // KERNTHESE
  | 'moral-statement'    // MORALBEGRÜNDUNG DES AUTORS
  | 'warning'            // WARNUNG VOR DEM DIGITALEN ZWISCHENWIRT
  | 'future-vision'      // ÜBER DIE ARBEIT DER ZUKUNFT
  | 'resonance-law'      // DAS GESETZ DER MENSCHLICHEN RESONANZ
  | 'manifesto'          // DAS MANIFEST DER ENTSCHEIDUNGSFREIHEIT
  | 'comparison-table';  // TABELLE DER GESELLSCHAFTSEBENEN

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: CalloutType;
  title: string;
  subtitle?: string;
  content?: string | string[];
  quote?: string;
  attribution?: string;
  tableData?: TableData;
}

export interface SensitivePassage {
  id: string;
  topic: string;
  contextNote: string;
  text: string;
}

export interface ChapterSection {
  type: 'paragraph' | 'subheading' | 'callout' | 'sensitive' | 'quote' | 'bullet-list';
  text?: string;
  items?: string[];
  callout?: CalloutBlock;
  sensitive?: SensitivePassage;
}

export interface Chapter {
  id: string;
  number: number; // 0: Prolog, 1-7: Kapitel, 8: Epilog
  code: string;   // 'prolog' | 'kapitel-1' ... | 'epilog'
  title: string;
  subtitle?: string;
  pageRange: string;
  estimatedReadTimeMinutes: number;
  sections: ChapterSection[];
}

export interface Manuscript {
  id: 'gemini' | 'astra6' | 'claude' | 'grok';
  language?: string;
  availableLanguages?: string[];
  name: string;
  systemName: string;
  status: 'ready' | 'in-preparation' | 'pending';
  statusLabel: string;
  editionBadge: string;
  completionDate?: string;
  dialogDate: string;
  author: string;
  roleDescription: string;
  summary: string;
  methodology: string;
  hasPdf: boolean;
  pdfFilename?: string;
  pdfDownloadName?: string;
  preface?: {
    title: string;
    text: string;
  };
  chapters: Chapter[];
}

export interface PhilosophicalTopic {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  detailedAnalysis: string;
  keyThesis: string;
  originQuote: string;
  targetChapterId: string;
  targetChapterTitle: string;
}

export interface PerspectiveComparisonTopic {
  id: string;
  title: string;
  question: string;
  geminiPerspective: {
    status: 'ready';
    coreArgument: string;
    quote: string;
    chapterRef: string;
  };
  astra6Perspective: {
    status: 'ready' | 'in-preparation';
    coreArgument?: string;
    quote?: string;
    chapterRef?: string;
    plannedFocus?: string;
    methodologyNote?: string;
  };
  grokPerspective: {
    status: 'ready' | 'in-preparation';
    coreArgument?: string;
    quote?: string;
    chapterRef?: string;
    plannedFocus?: string;
    methodologyNote?: string;
  };
  claudePerspective: {
    status: 'ready' | 'pending';
    coreArgument?: string;
    quote?: string;
    chapterRef?: string;
    plannedFocus?: string;
    methodologyNote?: string;
  };
}
