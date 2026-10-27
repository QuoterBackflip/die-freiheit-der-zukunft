import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

console.log('--- Start des Distribution- und Produktionstests ---');

const distDir = path.resolve(process.cwd(), 'dist');
assert(fs.existsSync(distDir), 'Dist-Verzeichnis muss existieren');

const indexHtmlPath = path.join(distDir, 'index.html');
assert(fs.existsSync(indexHtmlPath), 'dist/index.html muss existieren');

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Verify Essential Meta, Title & Fonts
assert(indexHtml.includes('Die Freiheit der Zukunft'), 'Titel muss im HTML enthalten sein');
assert(indexHtml.includes('Waldemar Scheiermann'), 'Urheber Waldemar Scheiermann muss im HTML enthalten sein');
assert(indexHtml.includes('color-scheme'), 'color-scheme Meta-Tag muss für Barrierefreiheit vorhanden sein');
assert(indexHtml.includes('Newsreader'), 'Newsreader Serif-Schriftart muss geladen werden');
assert(indexHtml.includes('Amiri'), 'Amiri arabische Schriftart muss geladen werden');
assert(indexHtml.includes('Noto+Serif+SC'), 'Noto Serif SC chinesische Schriftart muss geladen werden');

// Check assets
const assetsDir = path.join(distDir, 'assets');
assert(fs.existsSync(assetsDir), 'dist/assets muss existieren');
const assetFiles = fs.readdirSync(assetsDir);
const jsFiles = assetFiles.filter(f => f.endsWith('.js'));
const cssFiles = assetFiles.filter(f => f.endsWith('.css'));

assert(jsFiles.length > 0, 'Mindestens eine kompilierte JS-Datei muss vorhanden sein');
assert(cssFiles.length > 0, 'Mindestens eine kompilierte CSS-Datei muss vorhanden sein');

console.log(`✓ Gefundene Assets: ${jsFiles.length} JS-Bundles, ${cssFiles.length} CSS-Dateien`);

// Check PDFs in dist
const distPdfs = [
  'Die_Freiheit_der_Zukunft_Gesamtausgabe.pdf',
  'Die_Freiheit_der_Zukunft_Astra_Autorenfassung.pdf',
  'The_Freedom_of_the_Future_Complete_English_Edition.pdf',
  'The_Freedom_of_the_Future_Astra_Authors_Edition.pdf',
  'La_Libertad_del_Futuro_Edicion_Completa_Espanol.pdf',
  'La_Libertad_del_Futuro_Astra_Edicion_Autor.pdf',
  'The_Freedom_of_the_Future_Gemini_Chinese_Edition.pdf',
  'The_Freedom_of_the_Future_Astra_Chinese_Edition.pdf',
  'Waldemar_Scheiermann_Weilai_Zhi_Ziyou_Gemini.pdf',
  'Waldemar_Scheiermann_Weilai_Zhi_Ziyou_Astra.pdf',
  'The_Freedom_of_the_Future_Gemini_Arabic_Edition.pdf',
  'The_Freedom_of_the_Future_Astra_Arabic_Edition.pdf',
  'Waldemar_Scheiermann_Hurriyat_Al_Mustaqbal_Gemini.pdf',
  'Waldemar_Scheiermann_Hurriyat_Al_Mustaqbal_Astra.pdf',
  'Die_Freiheit_der_Zukunft_Grok_Fassung.pdf',
  'Waldemar_Scheiermann_Die_Freiheit_der_Zukunft_Grok.pdf',
  'Die_Freiheit_der_Zukunft(1).pdf',
  'The_Freedom_of_the_Future_Grok_English_Edition.pdf',
  'Waldemar_Scheiermann_The_Freedom_of_the_Future_Grok.pdf',
  'La_Libertad_del_Futuro_Grok_Edicion_Espanol.pdf',
  'Waldemar_Scheiermann_La_Libertad_del_Futuro_Grok.pdf',
  'The_Freedom_of_the_Future_Grok_Chinese_Edition.pdf',
  'Waldemar_Scheiermann_Weilai_Zhi_Ziyou_Grok.pdf',
  'The_Freedom_of_the_Future_Grok_Arabic_Edition.pdf',
  'Waldemar_Scheiermann_Hurriyat_Al_Mustaqbal_Grok.pdf',
  'Die_Freiheit_der_Zukunft_Buchfassung.pdf',
  'Waldemar_Scheiermann_Die_Freiheit_der_Zukunft_Claude.pdf',
  'The_Freedom_of_the_Future_Claude_English_Edition.pdf',
  'Waldemar_Scheiermann_The_Freedom_of_the_Future_Claude.pdf',
  'La_Libertad_del_Futuro_Claude_Edicion_Espanol.pdf',
  'Waldemar_Scheiermann_La_Libertad_del_Futuro_Claude.pdf',
  'The_Freedom_of_the_Future_Claude_Chinese_Edition.pdf',
  'Waldemar_Scheiermann_Weilai_Zhi_Ziyou_Claude.pdf',
  'The_Freedom_of_the_Future_Claude_Arabic_Edition.pdf',
  'Waldemar_Scheiermann_Hurriyat_Al_Mustaqbal_Claude.pdf'
];
distPdfs.forEach(pdf => {
  assert(fs.existsSync(path.join(distDir, pdf)), `PDF ${pdf} muss in dist/ existieren`);
});
console.log('✓ Alle 35 PDF-Dateien (Gemini, Astra 6, Grok und Claude in allen 5 Sprachen) in dist/ verifiziert.');

// Check that the bundle contains core manuscript and i18n content
const bundleContent = fs.readFileSync(path.join(assetsDir, jsFiles[0]), 'utf-8');

// 1. Authorship
assert(bundleContent.includes('Waldemar Scheiermann'), 'Bundle muss Urheber enthalten');

// 2. German Gemini Manuscript
assert(bundleContent.includes('Hallo, seelenlose Maschine'), 'Bundle muss deutsche Originaldialog-Eröffnung enthalten');
assert(bundleContent.includes('Stagnation'), 'Bundle muss Kernbegriff Stagnation enthalten');
assert(bundleContent.includes('Schachspieler'), 'Bundle muss Schach-Analogie enthalten');
assert(bundleContent.includes('Zwischenwirt'), 'Bundle muss Zwischenwirt-These enthalten');
assert(bundleContent.includes('Wirtschafts-KI') || bundleContent.includes('Menschen-KI'), 'Bundle muss digitale Gewaltenteilung enthalten');
assert(bundleContent.includes('photosynthetisierend'), 'Bundle muss originale Wortschöpfungen von Waldemar Scheiermann enthalten');

// 3. German Astra 6 Manuscript
assert(bundleContent.includes('Die Stunden dazwischen'), 'Bundle muss Astra 6 Prolog enthalten');
assert(bundleContent.includes('Lebens-KI'), 'Bundle muss Astra 6 Lebens-KI These enthalten');
assert(bundleContent.includes('Eine eigene Stunde'), 'Bundle muss Astra 6 Schluss enthalten');
assert(bundleContent.includes('Zur Entstehung'), 'Bundle muss Astra 6 Entstehungstext enthalten');

// 4. English Gemini Manuscript
assert(bundleContent.includes('From Standstill to Spark'), 'Bundle muss englischen Gemini-Prolog enthalten');
assert(bundleContent.includes('soulless machine'), 'Bundle muss englische Eröffnung enthalten');
assert(bundleContent.includes('Intermediate Host') || bundleContent.includes('intermediate host'), 'Bundle muss englische Zwischenwirt-These enthalten');

// 5. English Astra 6 Manuscript
assert(bundleContent.includes('The Hours in Between'), 'Bundle muss englischen Astra 6 Prolog enthalten');
assert(bundleContent.includes("An Hour of One's Own"), 'Bundle muss englischen Astra 6 Schluss enthalten');
assert(bundleContent.includes('On the Genesis of This Work'), 'Bundle muss englische Astra 6 Entstehungsnotiz enthalten');

// 6. Spanish Gemini Manuscript
assert(bundleContent.includes('Del estancamiento a la chispa'), 'Bundle muss spanischen Gemini-Prolog enthalten');
assert(bundleContent.includes('huésped intermediario') || bundleContent.includes('intermediario'), 'Bundle muss spanische Zwischenwirt-These enthalten');

// 7. Spanish Astra 6 Manuscript
assert(bundleContent.includes('Las horas intermedias'), 'Bundle muss spanischen Astra 6 Prolog enthalten');
assert(bundleContent.includes('Una hora propia'), 'Bundle muss spanischen Astra 6 Schluss enthalten');
assert(bundleContent.includes('Sobre la génesis de esta obra'), 'Bundle muss spanische Astra 6 Entstehungsnotiz enthalten');

// 8. Chinese Gemini Manuscript
assert(bundleContent.includes('从停滞到火花'), 'Bundle muss chinesischen Gemini-Prolog enthalten');
assert(bundleContent.includes('数字中间宿主'), 'Bundle muss chinesische Zwischenwirt-These enthalten');

// 9. Chinese Astra 6 Manuscript
assert(bundleContent.includes('中间的时光'), 'Bundle muss chinesischen Astra 6 Prolog enthalten');
assert(bundleContent.includes('属于自己的时刻'), 'Bundle muss chinesischen Astra 6 Schluss enthalten');
assert(bundleContent.includes('关于本书的创作'), 'Bundle muss chinesische Astra 6 Entstehungsnotiz enthalten');

// 10. Arabic Gemini Manuscript
assert(bundleContent.includes('المقدمة: من الجمود إلى الشرارة') || bundleContent.includes('الجمود إلى الشرارة'), 'Bundle muss arabischen Gemini-Prolog enthalten');
assert(bundleContent.includes('المضيف الوسيط الرقمي'), 'Bundle muss arabische Zwischenwirt-These enthalten');
assert(bundleContent.includes('بيان حرية الاختيار'), 'Bundle muss arabisches Manifest enthalten');

// 11. Arabic Astra 6 Manuscript
assert(bundleContent.includes('المقدمة: الساعات البينية') || bundleContent.includes('الساعات البينية'), 'Bundle muss arabischen Astra 6 Prolog enthalten');
assert(bundleContent.includes('الخاتمة: ساعة تخص المرء وحده') || bundleContent.includes('ساعة تخص المرء وحده'), 'Bundle muss arabischen Astra 6 Schluss enthalten');
assert(bundleContent.includes('حول نشأة هذا العمل'), 'Bundle muss arabische Astra 6 Entstehungsnotiz enthalten');

// 11b. Grok Manuscript
assert(bundleContent.includes('Philosophisch-systematische Fassung'), 'Bundle muss Grok-Fassung enthalten');
assert(bundleContent.includes('Der Funke im Stillstand') || bundleContent.includes('Kategoriale Analyse'), 'Bundle muss Grok-Inhalte enthalten');
assert(bundleContent.includes('Die_Freiheit_der_Zukunft_Grok_Fassung.pdf'), 'Bundle muss Grok-PDF-Download-Dateinamen enthalten');

// 11c. Claude Manuscript
assert(bundleContent.includes('Verfassungsphilosophische Fassung'), 'Bundle muss Claude-Fassung enthalten');
assert(bundleContent.includes('Euthyphron-Dilemma') || bundleContent.includes('Systemgrenze'), 'Bundle muss Claude-Inhalte enthalten');
assert(bundleContent.includes('Die_Freiheit_der_Zukunft_Buchfassung.pdf'), 'Bundle muss Claude-PDF-Download-Dateinamen enthalten');

// 12. Multi-language UI Presence (5 languages)
assert(bundleContent.includes('La libertad del futuro'), 'Bundle muss spanische Übersetzung enthalten');
assert(bundleContent.includes('未来的自由'), 'Bundle muss chinesische Übersetzung enthalten');
assert(bundleContent.includes('حرية المستقبل'), 'Bundle muss arabische Übersetzung enthalten');
assert(bundleContent.includes('LanguageSwitcher') || bundleContent.includes('Website-Sprache') || bundleContent.includes('bookLanguage'), 'Bundle muss Sprachumschalter-Logik enthalten');

// 13. 4-Perspective Synopsis in bundle
assert(bundleContent.includes('Vier KI-Perspektiven') || bundleContent.includes('Four AI Perspectives'), 'Bundle muss 4-Perspektiven-Titel enthalten');
assert(bundleContent.includes('Systematisch-analytische Fassung'), 'Bundle muss Grok-Spalten-Untertitel enthalten');

// 14. SEO Files in dist/
const distRobotsPath = path.join(distDir, 'robots.txt');
assert(fs.existsSync(distRobotsPath), 'dist/robots.txt muss existieren');
const distRobots = fs.readFileSync(distRobotsPath, 'utf-8');
assert(distRobots.includes('GPTBot') && distRobots.includes('ClaudeBot'), 'dist/robots.txt muss KI-Crawler erlauben');
assert(distRobots.includes('sitemap.xml'), 'dist/robots.txt muss sitemap.xml referenzieren');

const distSitemapPath = path.join(distDir, 'sitemap.xml');
assert(fs.existsSync(distSitemapPath), 'dist/sitemap.xml muss existieren');
const distSitemap = fs.readFileSync(distSitemapPath, 'utf-8');
assert(distSitemap.includes('https://freiheit-der-zukunft.de/'), 'dist/sitemap.xml muss Domain enthalten');
assert(distSitemap.includes('hreflang="zh-CN"'), 'dist/sitemap.xml muss mehrsprachige Alternates enthalten');

// 15. Structured Data and Crawler Fallback in dist/index.html
assert(indexHtml.includes('application/ld+json'), 'dist/index.html muss Schema.org JSON-LD enthalten');
assert(indexHtml.includes('<noscript>'), 'dist/index.html muss noscript-Fallback für Nicht-JS-Crawler enthalten');
assert(indexHtml.includes('rel="canonical"'), 'dist/index.html muss kanonischen Link enthalten');

console.log('✓ Vollständige Textinhalte von Waldemar Scheiermann (Deutsche, Englische, Spanische, Chinesische und Arabische Bücher, 5 UI-Sprachen, 4-Perspektiven-Synopse und SEO-Dateien) im Produktionsbundle verifiziert.');
console.log('--------------------------------------------------');
console.log('ERGEBNIS: Alle Produktionstests erfolgreich bestanden!');

