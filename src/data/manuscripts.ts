import type { Manuscript } from './types.ts';
import { geminiManuscript } from './gemini.ts';
import { geminiManuscriptEn } from './gemini_en.ts';
import { geminiManuscriptEs } from './gemini_es.ts';
import { geminiManuscriptZh } from './gemini_zh.ts';
import { astra6Manuscript } from './astra6.ts';
import { astra6ManuscriptEn } from './astra6_en.ts';
import { astra6ManuscriptEs } from './astra6_es.ts';
import { astra6ManuscriptZh } from './astra6_zh.ts';
import { geminiManuscriptAr } from './gemini_ar.ts';
import { astra6ManuscriptAr } from './astra6_ar.ts';
import { claudeManuscript } from './claude.ts';
import { claudeManuscriptEn } from './claude_en.ts';
import { claudeManuscriptEs } from './claude_es.ts';
import { claudeManuscriptZh } from './claude_zh.ts';
import { claudeManuscriptAr } from './claude_ar.ts';
import { grokManuscript } from './grok.ts';
import { grokManuscriptEn } from './grok_en.ts';
import { grokManuscriptEs } from './grok_es.ts';
import { grokManuscriptZh } from './grok_zh.ts';
import { grokManuscriptAr } from './grok_ar.ts';

export const manuscriptsDe: Record<string, Manuscript> = {
  gemini: geminiManuscript,
  astra6: astra6Manuscript,
  claude: claudeManuscript,
  grok: grokManuscript
};

export const manuscriptsEn: Record<string, Manuscript> = {
  gemini: geminiManuscriptEn,
  astra6: astra6ManuscriptEn,
  claude: claudeManuscriptEn,
  grok: grokManuscriptEn
};

export const manuscriptsEs: Record<string, Manuscript> = {
  gemini: geminiManuscriptEs,
  astra6: astra6ManuscriptEs,
  claude: claudeManuscriptEs,
  grok: grokManuscriptEs
};

export const manuscriptsZh: Record<string, Manuscript> = {
  gemini: geminiManuscriptZh,
  astra6: astra6ManuscriptZh,
  claude: claudeManuscriptZh,
  grok: grokManuscriptZh
};

export const manuscriptsAr: Record<string, Manuscript> = {
  gemini: geminiManuscriptAr,
  astra6: astra6ManuscriptAr,
  claude: claudeManuscriptAr,
  grok: grokManuscriptAr
};

export const manuscripts = manuscriptsDe;

export const allManuscriptsDe: Manuscript[] = [
  geminiManuscript,
  astra6Manuscript,
  claudeManuscript,
  grokManuscript
];

export const allManuscriptsEn: Manuscript[] = [
  geminiManuscriptEn,
  astra6ManuscriptEn,
  claudeManuscriptEn,
  grokManuscriptEn
];

export const allManuscriptsEs: Manuscript[] = [
  geminiManuscriptEs,
  astra6ManuscriptEs,
  claudeManuscriptEs,
  grokManuscriptEs
];

export const allManuscriptsZh: Manuscript[] = [
  geminiManuscriptZh,
  astra6ManuscriptZh,
  claudeManuscriptZh,
  grokManuscriptZh
];

export const allManuscriptsAr: Manuscript[] = [
  geminiManuscriptAr,
  astra6ManuscriptAr,
  claudeManuscriptAr,
  grokManuscriptAr
];

export const allManuscripts = allManuscriptsDe;

export function getAllManuscripts(lang: string = 'de'): Manuscript[] {
  if (lang === 'ar') return allManuscriptsAr;
  if (lang === 'zh-CN' || lang === 'zh') return allManuscriptsZh;
  if (lang === 'es') return allManuscriptsEs;
  if (lang === 'en') return allManuscriptsEn;
  return allManuscriptsDe;
}

export function getManuscript(id: string, lang: string = 'de'): Manuscript | undefined {
  if (lang === 'ar') {
    return manuscriptsAr[id] || manuscriptsDe[id];
  }
  if (lang === 'zh-CN' || lang === 'zh') {
    return manuscriptsZh[id] || manuscriptsDe[id];
  }
  if (lang === 'es') {
    return manuscriptsEs[id] || manuscriptsDe[id];
  }
  if (lang === 'en') {
    return manuscriptsEn[id] || manuscriptsDe[id];
  }
  return manuscriptsDe[id];
}



