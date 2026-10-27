import { geminiManuscript } from '../src/data/gemini.ts';
import { geminiManuscriptEn } from '../src/data/gemini_en.ts';
import { geminiManuscriptEs } from '../src/data/gemini_es.ts';
import { geminiManuscriptZh } from '../src/data/gemini_zh.ts';
import { geminiManuscriptAr } from '../src/data/gemini_ar.ts';
import { astra6Manuscript } from '../src/data/astra6.ts';
import { astra6ManuscriptEn } from '../src/data/astra6_en.ts';
import { astra6ManuscriptEs } from '../src/data/astra6_es.ts';
import { astra6ManuscriptZh } from '../src/data/astra6_zh.ts';
import { astra6ManuscriptAr } from '../src/data/astra6_ar.ts';
import { claudeManuscript } from '../src/data/claude.ts';
import { claudeManuscriptEn } from '../src/data/claude_en.ts';
import { claudeManuscriptEs } from '../src/data/claude_es.ts';
import { claudeManuscriptZh } from '../src/data/claude_zh.ts';
import { claudeManuscriptAr } from '../src/data/claude_ar.ts';
import { grokManuscript } from '../src/data/grok.ts';
import { grokManuscriptEn } from '../src/data/grok_en.ts';
import { grokManuscriptEs } from '../src/data/grok_es.ts';
import { grokManuscriptZh } from '../src/data/grok_zh.ts';
import { grokManuscriptAr } from '../src/data/grok_ar.ts';
import { getManuscript } from '../src/data/manuscripts.ts';
import { philosophicalTopics, comparisonMatrix } from '../src/data/topics.ts';
import { translations } from '../src/i18n/translations.ts';
import { SUPPORTED_LANGUAGES } from '../src/i18n/types.ts';
import assert from 'node:assert';

console.log('--- Start des umfassenden philosophischen Integritätstests ---');

// 1. Author and Title verification
console.log('1. Prüfe Urheber und Werktitel...');
assert.strictEqual(geminiManuscript.author, 'Waldemar Scheiermann');
assert.strictEqual(geminiManuscriptEn.author, 'Waldemar Scheiermann');
assert.strictEqual(geminiManuscriptEs.author, 'Waldemar Scheiermann');
assert(geminiManuscriptZh.author.includes('Waldemar Scheiermann'));
assert(geminiManuscriptAr.author.includes('Waldemar Scheiermann'));
assert.strictEqual(astra6Manuscript.author, 'Waldemar Scheiermann');
assert.strictEqual(astra6ManuscriptEn.author, 'Waldemar Scheiermann');
assert.strictEqual(astra6ManuscriptEs.author, 'Waldemar Scheiermann');
assert(astra6ManuscriptZh.author.includes('Waldemar Scheiermann'));
assert(astra6ManuscriptAr.author.includes('Waldemar Scheiermann'));
assert.strictEqual(claudeManuscript.author, 'Waldemar Scheiermann');
assert.strictEqual(claudeManuscriptEn.author, 'Waldemar Scheiermann');
assert.strictEqual(claudeManuscriptEs.author, 'Waldemar Scheiermann');
assert(claudeManuscriptZh.author.includes('Waldemar Scheiermann'));
assert(claudeManuscriptAr.author.includes('Waldemar Scheiermann'));
assert.strictEqual(grokManuscript.author, 'Waldemar Scheiermann');
assert.strictEqual(grokManuscriptEn.author, 'Waldemar Scheiermann');
assert.strictEqual(grokManuscriptEs.author, 'Waldemar Scheiermann');
assert(grokManuscriptZh.author.includes('Waldemar Scheiermann'));
assert(grokManuscriptAr.author.includes('Waldemar Scheiermann'));
console.log('✓ Urheber Waldemar Scheiermann in allen Fassungen (Gemini, Astra 6, Claude, Grok in allen 5 Sprachen) verifiziert.');

// 2. German, English, Spanish, Chinese & Arabic Gemini Completeness
console.log('2. Prüfe Vollständigkeit der Gemini-Fassungen (DE, EN, ES, ZH & AR)...');
assert.strictEqual(geminiManuscript.status, 'ready');
assert.strictEqual(geminiManuscriptEn.status, 'ready');
assert.strictEqual(geminiManuscriptEs.status, 'ready');
assert.strictEqual(geminiManuscriptZh.status, 'ready');
assert.strictEqual(geminiManuscriptAr.status, 'ready');
assert.strictEqual(geminiManuscript.chapters.length, 9, 'Gemini DE muss 9 Abschnitte (Prolog, 7 Kapitel, Epilog) haben');
assert.strictEqual(geminiManuscriptEn.chapters.length, 9, 'Gemini EN muss 9 Abschnitte haben');
assert.strictEqual(geminiManuscriptEs.chapters.length, 9, 'Gemini ES muss 9 Abschnitte haben');
assert.strictEqual(geminiManuscriptZh.chapters.length, 9, 'Gemini ZH muss 9 Abschnitte haben');
assert.strictEqual(geminiManuscriptAr.chapters.length, 9, 'Gemini AR muss 9 Abschnitte haben');

// Verify chapter index parity between DE, EN, ES, ZH and AR
geminiManuscript.chapters.forEach((deCh, idx) => {
  const enCh = geminiManuscriptEn.chapters[idx];
  const esCh = geminiManuscriptEs.chapters[idx];
  const zhCh = geminiManuscriptZh.chapters[idx];
  const arCh = geminiManuscriptAr.chapters[idx];
  assert.strictEqual(deCh.number, enCh.number, `Gemini Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.number, esCh.number, `Gemini ES Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.number, zhCh.number, `Gemini ZH Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.number, arCh.number, `Gemini AR Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.code, enCh.code, `Gemini Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.code, esCh.code, `Gemini ES Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.code, zhCh.code, `Gemini ZH Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.code, arCh.code, `Gemini AR Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert(enCh.title.length > 5, `Gemini EN Kapitel ${enCh.code} muss englischen Titel haben`);
  assert(esCh.title.length > 5, `Gemini ES Kapitel ${esCh.code} muss spanischen Titel haben`);
  assert(zhCh.title.length > 3, `Gemini ZH Kapitel ${zhCh.code} muss chinesischen Titel haben`);
  assert(arCh.title.length > 3, `Gemini AR Kapitel ${arCh.code} muss arabischen Titel haben`);
  assert(enCh.sections.length > 0, `Gemini EN Kapitel ${enCh.code} muss Abschnitte enthalten`);
  assert(esCh.sections.length > 0, `Gemini ES Kapitel ${esCh.code} muss Abschnitte enthalten`);
  assert(zhCh.sections.length > 0, `Gemini ZH Kapitel ${zhCh.code} muss Abschnitte enthalten`);
  assert(arCh.sections.length > 0, `Gemini AR Kapitel ${arCh.code} muss Abschnitte enthalten`);
});
console.log('✓ Gemini DE, EN, ES, ZH & AR vollständig mit identischer Kapitelstruktur (9 Abschnitte) verifiziert.');

// 3. German, English, Spanish, Chinese & Arabic Astra 6 Completeness
console.log('3. Prüfe Vollständigkeit der Astra 6-Fassungen (DE, EN, ES, ZH & AR)...');
assert.strictEqual(astra6Manuscript.status, 'ready');
assert.strictEqual(astra6ManuscriptEn.status, 'ready');
assert.strictEqual(astra6ManuscriptEs.status, 'ready');
assert.strictEqual(astra6ManuscriptZh.status, 'ready');
assert.strictEqual(astra6ManuscriptAr.status, 'ready');
assert.strictEqual(astra6Manuscript.chapters.length, 10, 'Astra 6 DE muss 10 Abschnitte haben');
assert.strictEqual(astra6ManuscriptEn.chapters.length, 10, 'Astra 6 EN muss 10 Abschnitte haben');
assert.strictEqual(astra6ManuscriptEs.chapters.length, 10, 'Astra 6 ES muss 10 Abschnitte haben');
assert.strictEqual(astra6ManuscriptZh.chapters.length, 10, 'Astra 6 ZH muss 10 Abschnitte haben');
assert.strictEqual(astra6ManuscriptAr.chapters.length, 10, 'Astra 6 AR muss 10 Abschnitte haben');

astra6Manuscript.chapters.forEach((deCh, idx) => {
  const enCh = astra6ManuscriptEn.chapters[idx];
  const esCh = astra6ManuscriptEs.chapters[idx];
  const zhCh = astra6ManuscriptZh.chapters[idx];
  const arCh = astra6ManuscriptAr.chapters[idx];
  assert.strictEqual(deCh.number, enCh.number, `Astra Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.number, esCh.number, `Astra ES Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.number, zhCh.number, `Astra ZH Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.number, arCh.number, `Astra AR Kapitelnummer bei Index ${idx} muss identisch sein (${deCh.number})`);
  assert.strictEqual(deCh.code, enCh.code, `Astra Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.code, esCh.code, `Astra ES Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.code, zhCh.code, `Astra ZH Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.code, arCh.code, `Astra AR Kapitelcode bei Index ${idx} muss identisch sein (${deCh.code})`);
  assert.strictEqual(deCh.sections.length, esCh.sections.length, `Astra ES Kapitel ${esCh.code} muss gleiche Abschnittszahl wie DE haben`);
  assert.strictEqual(deCh.sections.length, zhCh.sections.length, `Astra ZH Kapitel ${zhCh.code} muss exakt gleiche Abschnittszahl wie DE haben (${deCh.sections.length})`);
  assert.strictEqual(deCh.sections.length, arCh.sections.length, `Astra AR Kapitel ${arCh.code} muss exakt gleiche Abschnittszahl wie DE haben (${deCh.sections.length})`);
  assert(enCh.title.length > 5, `Astra EN Kapitel ${enCh.code} muss englischen Titel haben`);
  assert(esCh.title.length > 5, `Astra ES Kapitel ${esCh.code} muss spanischen Titel haben`);
  assert(zhCh.title.length > 3, `Astra ZH Kapitel ${zhCh.code} muss chinesischen Titel haben`);
  assert(arCh.title.length > 3, `Astra AR Kapitel ${arCh.code} muss arabischen Titel haben`);
  assert(enCh.sections.length > 0, `Astra EN Kapitel ${enCh.code} muss Abschnitte enthalten`);
  assert(esCh.sections.length > 0, `Astra ES Kapitel ${esCh.code} muss Abschnitte enthalten`);
  assert(zhCh.sections.length > 0, `Astra ZH Kapitel ${zhCh.code} muss Abschnitte enthalten`);
  assert(arCh.sections.length > 0, `Astra AR Kapitel ${arCh.code} muss Abschnitte enthalten`);
});
console.log('✓ Astra 6 DE, EN, ES, ZH & AR vollständig mit identischer Kapitelstruktur (10 Abschnitte) und exakter Abschnittsparität verifiziert.');

// 4. Claude Completeness & Integrity (5 languages: DE, EN, ES, ZH, AR)
console.log('4. Prüfe Vollständigkeit der Claude-Fassungen in allen 5 Sprachen...');
const claudeEditions = [claudeManuscript, claudeManuscriptEn, claudeManuscriptEs, claudeManuscriptZh, claudeManuscriptAr];
claudeEditions.forEach((m) => {
  assert.strictEqual(m.id, 'claude');
  assert.strictEqual(m.status, 'ready');
  assert.strictEqual(m.chapters.length, 8, `Claude ${m.language} muss 8 Abschnitte (Vorspann, 5 Kapitel, Nachwort, Quellen) haben`);
  assert.strictEqual(m.hasPdf, true);
  assert(m.pdfFilename.includes('Claude') || m.pdfFilename.includes('claude') || m.pdfFilename.includes('Buchfassung'));
  m.chapters.forEach((ch) => {
    assert(ch.title.length > 2, `Claude ${m.language} Kapitel ${ch.code} muss Titel haben`);
    assert(ch.sections.length > 0, `Claude ${m.language} Kapitel ${ch.code} muss Abschnitte haben`);
  });
});

// Verify chapter index and code parity across all 5 Claude languages
claudeManuscript.chapters.forEach((deCh, idx) => {
  assert.strictEqual(claudeManuscriptEn.chapters[idx].code, deCh.code);
  assert.strictEqual(claudeManuscriptEs.chapters[idx].code, deCh.code);
  assert.strictEqual(claudeManuscriptZh.chapters[idx].code, deCh.code);
  assert.strictEqual(claudeManuscriptAr.chapters[idx].code, deCh.code);
  assert.strictEqual(claudeManuscriptEn.chapters[idx].number, deCh.number);
  assert.strictEqual(claudeManuscriptEs.chapters[idx].number, deCh.number);
  assert.strictEqual(claudeManuscriptZh.chapters[idx].number, deCh.number);
  assert.strictEqual(claudeManuscriptAr.chapters[idx].number, deCh.number);
});
console.log('✓ Claude-Fassungen in allen 5 Sprachen (DE, EN, ES, ZH, AR) vollständig mit 8 Abschnitten und Kapitelparität verifiziert.');

// 4b. Grok Completeness & Integrity (5 languages: DE, EN, ES, ZH, AR)
console.log('4b. Prüfe Vollständigkeit der Grok-Fassungen in allen 5 Sprachen...');
const grokEditions = [grokManuscript, grokManuscriptEn, grokManuscriptEs, grokManuscriptZh, grokManuscriptAr];
grokEditions.forEach((m) => {
  assert.strictEqual(m.id, 'grok');
  assert.strictEqual(m.status, 'ready');
  assert.strictEqual(m.chapters.length, 9, `Grok ${m.language} muss 9 Abschnitte (Prolog, 7 Kapitel, Epilog) haben`);
  assert.strictEqual(m.hasPdf, true);
  assert(m.pdfFilename.includes('Grok') || m.pdfFilename.includes('grok'));
  m.chapters.forEach((ch) => {
    assert(ch.title.length > 2, `Grok ${m.language} Kapitel ${ch.code} muss Titel haben`);
    assert(ch.sections.length > 0, `Grok ${m.language} Kapitel ${ch.code} muss Abschnitte haben`);
  });
});

// Verify chapter index and code parity across all 5 Grok languages
grokManuscript.chapters.forEach((deCh, idx) => {
  assert.strictEqual(grokManuscriptEn.chapters[idx].code, deCh.code);
  assert.strictEqual(grokManuscriptEs.chapters[idx].code, deCh.code);
  assert.strictEqual(grokManuscriptZh.chapters[idx].code, deCh.code);
  assert.strictEqual(grokManuscriptAr.chapters[idx].code, deCh.code);
  assert.strictEqual(grokManuscriptEn.chapters[idx].number, deCh.number);
  assert.strictEqual(grokManuscriptEs.chapters[idx].number, deCh.number);
  assert.strictEqual(grokManuscriptZh.chapters[idx].number, deCh.number);
  assert.strictEqual(grokManuscriptAr.chapters[idx].number, deCh.number);
});
console.log('✓ Grok-Fassungen in allen 5 Sprachen (DE, EN, ES, ZH, AR) vollständig mit 9 Abschnitten und Kapitelparität verifiziert.');

// 5. Multi-language Manuscript Lookup
console.log('5. Prüfe getManuscript Lookup nach Sprache...');
const geminiDe = getManuscript('gemini', 'de');
const geminiEn = getManuscript('gemini', 'en');
const geminiEs = getManuscript('gemini', 'es');
const geminiZh = getManuscript('gemini', 'zh-CN');
const geminiAr = getManuscript('gemini', 'ar');
const astraDe = getManuscript('astra6', 'de');
const astraEn = getManuscript('astra6', 'en');
const astraEs = getManuscript('astra6', 'es');
const astraZh = getManuscript('astra6', 'zh-CN');
const astraAr = getManuscript('astra6', 'ar');
const grokDe = getManuscript('grok', 'de');
const grokEn = getManuscript('grok', 'en');
const grokEs = getManuscript('grok', 'es');
const grokZh = getManuscript('grok', 'zh-CN');
const grokAr = getManuscript('grok', 'ar');
const claudeDe = getManuscript('claude', 'de');
const claudeEn = getManuscript('claude', 'en');
const claudeEs = getManuscript('claude', 'es');
const claudeZh = getManuscript('claude', 'zh-CN');
const claudeAr = getManuscript('claude', 'ar');
assert.strictEqual(geminiDe?.language, 'de');
assert.strictEqual(geminiEn?.language, 'en');
assert.strictEqual(geminiEs?.language, 'es');
assert.strictEqual(geminiZh?.language, 'zh-CN');
assert.strictEqual(geminiAr?.language, 'ar');
assert.strictEqual(astraDe?.language, 'de');
assert.strictEqual(astraEn?.language, 'en');
assert.strictEqual(astraEs?.language, 'es');
assert.strictEqual(astraZh?.language, 'zh-CN');
assert.strictEqual(astraAr?.language, 'ar');
assert.strictEqual(claudeDe?.language, 'de');
assert.strictEqual(claudeEn?.language, 'en');
assert.strictEqual(claudeEs?.language, 'es');
assert.strictEqual(claudeZh?.language, 'zh-CN');
assert.strictEqual(claudeAr?.language, 'ar');
assert.strictEqual(grokDe?.language, 'de');
assert.strictEqual(grokEn?.language, 'en');
assert.strictEqual(grokEs?.language, 'es');
assert.strictEqual(grokZh?.language, 'zh-CN');
assert.strictEqual(grokAr?.language, 'ar');
console.log('✓ getManuscript liefert für alle 4 Systeme (Gemini, Astra 6, Claude, Grok) in allen 5 Sprachen die korrekte Fassung.');

// 6. UI Internationalization completeness (5 languages)
console.log('6. Prüfe UI-Übersetzungen in allen 5 Sprachen (de, en, es, zh-CN, ar)...');
const requiredLanguages = ['de', 'en', 'es', 'zh-CN', 'ar'];
assert.strictEqual(SUPPORTED_LANGUAGES.length, 5);

requiredLanguages.forEach(lang => {
  const dict = translations[lang];
  assert(dict, `Übersetzungswörterbuch für ${lang} muss existieren`);
  assert(dict['site.title'], `${lang}: site.title muss vorhanden sein`);
  assert(dict['nav.home'], `${lang}: nav.home muss vorhanden sein`);
  assert(dict['nav.gemini'], `${lang}: nav.gemini muss vorhanden sein`);
  assert(dict['nav.astra6'], `${lang}: nav.astra6 muss vorhanden sein`);
  assert(dict['nav.claude'], `${lang}: nav.claude muss vorhanden sein`);
  assert(dict['nav.grok'], `${lang}: nav.grok muss vorhanden sein`);
  assert(dict['compare.colGrok'], `${lang}: compare.colGrok muss vorhanden sein`);
  assert(dict['compare.title'], `${lang}: compare.title muss vorhanden sein`);
  assert(dict['hero.badge'], `${lang}: hero.badge muss vorhanden sein`);
  assert(dict['hero.btnReadGrok'], `${lang}: hero.btnReadGrok muss vorhanden sein`);
  assert(dict['selector.badgeGrok'], `${lang}: selector.badgeGrok muss vorhanden sein`);
  assert(dict['selector.descGrok'], `${lang}: selector.descGrok muss vorhanden sein`);
  assert(dict['reader.toc'], `${lang}: reader.toc muss vorhanden sein`);
  assert(dict['reader.bookLanguage'], `${lang}: reader.bookLanguage muss vorhanden sein`);
  assert(dict['reader.bookLangZh'], `${lang}: reader.bookLangZh muss vorhanden sein`);
  assert(dict['reader.bookLangAr'], `${lang}: reader.bookLangAr muss vorhanden sein`);
  assert(dict['reader.langNoticeText'], `${lang}: reader.langNoticeText muss vorhanden sein`);
  assert(dict['footer.rights'].includes('Waldemar Scheiermann'), `${lang}: Copyright muss Waldemar Scheiermann nennen`);
});

// Check Arabic RTL indicator
const arMeta = SUPPORTED_LANGUAGES.find(l => l.code === 'ar');
assert.strictEqual(arMeta?.dir, 'rtl', 'Arabisch muss als dir="rtl" definiert sein');

console.log('✓ Alle 5 UI-Sprachwörterbücher vollständig und validiert (inkl. Grok und 4-Perspektiven-Synopse).');

// 7. Topics and 4-Perspective Comparison Matrix
console.log('7. Prüfe Themenübersicht und 4-Perspektiven-Synopse...');
assert.strictEqual(philosophicalTopics.length, 6);
assert.strictEqual(comparisonMatrix.length, 4);

comparisonMatrix.forEach((topic) => {
  assert(topic.title, 'Synopse-Thema muss Titel haben');
  assert(topic.question, 'Synopse-Thema muss Fragestellung haben');
  
  // Gemini
  assert.strictEqual(topic.geminiPerspective.status, 'ready');
  assert(topic.geminiPerspective.coreArgument.length > 20);
  assert(topic.geminiPerspective.quote.length > 10);
  assert(topic.geminiPerspective.chapterRef.length > 3);

  // Astra 6
  assert.strictEqual(topic.astra6Perspective.status, 'ready');
  assert(topic.astra6Perspective.coreArgument.length > 20);
  assert(topic.astra6Perspective.quote.length > 10);

  // Grok (4th column)
  assert.strictEqual(topic.grokPerspective.status, 'ready');
  assert(topic.grokPerspective.coreArgument.length > 20, `Grok coreArgument in ${topic.id} muss substanziell sein`);
  assert(topic.grokPerspective.quote.length > 10, `Grok quote in ${topic.id} muss vorhanden sein`);
  assert(topic.grokPerspective.chapterRef.length > 3, `Grok chapterRef in ${topic.id} muss vorhanden sein`);

  // Claude (ready)
  assert.strictEqual(topic.claudePerspective.status, 'ready');
  assert(topic.claudePerspective.coreArgument.length > 20, `Claude coreArgument in ${topic.id} muss substanziell sein`);
  assert(topic.claudePerspective.quote.length > 10, `Claude quote in ${topic.id} muss vorhanden sein`);
  assert(topic.claudePerspective.chapterRef.length > 3, `Claude chapterRef in ${topic.id} muss vorhanden sein`);
});
console.log('✓ Alle 4 Synopse-Themen enthalten vollständige Perspektiven für Gemini, Astra 6, Grok und Claude (alle 4 bereit).');

// 8. SEO & Crawler Assets
console.log('8. Prüfe SEO-Dateien (robots.txt, sitemap.xml, Schema.org & Crawler Fallback)...');
import fs from 'node:fs';
import path from 'node:path';

const robotsPath = path.resolve(process.cwd(), 'public/robots.txt');
assert(fs.existsSync(robotsPath), 'public/robots.txt muss existieren');
const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
assert(robotsContent.includes('Googlebot'), 'robots.txt muss Googlebot aufführen');
assert(robotsContent.includes('GPTBot'), 'robots.txt muss GPTBot aufführen');
assert(robotsContent.includes('ClaudeBot'), 'robots.txt muss ClaudeBot aufführen');
assert(robotsContent.includes('PerplexityBot'), 'robots.txt muss PerplexityBot aufführen');
assert(robotsContent.includes('sitemap.xml'), 'robots.txt muss Sitemap-Link enthalten');

const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml muss existieren');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
assert(sitemapContent.includes('https://freiheit-der-zukunft.de/'), 'sitemap.xml muss Hauptdomain enthalten');
assert(sitemapContent.includes('hreflang="de"'), 'sitemap.xml muss hreflang de enthalten');
assert(sitemapContent.includes('hreflang="en"'), 'sitemap.xml muss hreflang en enthalten');
assert(sitemapContent.includes('hreflang="es"'), 'sitemap.xml muss hreflang es enthalten');
assert(sitemapContent.includes('hreflang="zh-CN"'), 'sitemap.xml muss hreflang zh-CN enthalten');
assert(sitemapContent.includes('hreflang="ar"'), 'sitemap.xml muss hreflang ar enthalten');
assert(sitemapContent.includes('Die_Freiheit_der_Zukunft_Grok_Fassung.pdf'), 'sitemap.xml muss Grok PDF enthalten');

const indexHtmlPath = path.resolve(process.cwd(), 'index.html');
assert(fs.existsSync(indexHtmlPath), 'index.html muss existieren');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
assert(indexHtml.includes('application/ld+json'), 'index.html muss Schema.org JSON-LD enthalten');
assert(indexHtml.includes('Waldemar Scheiermann'), 'index.html muss Waldemar Scheiermann als Urheber nennen');
assert(indexHtml.includes('rel="canonical"'), 'index.html muss kanonischen Link enthalten');
assert(indexHtml.includes('og:title'), 'index.html muss Open Graph Title enthalten');
assert(indexHtml.includes('twitter:card'), 'index.html muss Twitter Card enthalten');
assert(indexHtml.includes('<noscript>'), 'index.html muss statischen Crawler-Fallback enthalten');
console.log('✓ SEO- und Crawler-Dateien (robots.txt, sitemap.xml, Schema.org, hreflang, noscript) erfolgreich verifiziert.');

console.log('--------------------------------------------------');
console.log('ERGEBNIS: Sämtliche Integritätstests erfolgreich bestanden!');

