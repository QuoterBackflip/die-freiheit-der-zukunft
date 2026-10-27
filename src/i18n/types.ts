export type UiLanguage = 'de' | 'en' | 'es' | 'zh-CN' | 'ar';
export type BookLanguage = 'de' | 'en' | 'es' | 'zh-CN' | 'ar';

export interface LanguageOption {
  code: UiLanguage;
  name: string;        // Native name
  englishName: string;
  dir: 'ltr' | 'rtl';
  flagText?: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'de', name: 'Deutsch', englishName: 'German', dir: 'ltr' },
  { code: 'en', name: 'English', englishName: 'English', dir: 'ltr' },
  { code: 'es', name: 'Español', englishName: 'Spanish', dir: 'ltr' },
  { code: 'zh-CN', name: '简体中文', englishName: 'Simplified Chinese', dir: 'ltr' },
  { code: 'ar', name: 'العربية', englishName: 'Arabic', dir: 'rtl' }
];
