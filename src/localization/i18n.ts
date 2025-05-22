import { useEffect, useState } from 'react';

export interface Language {
  code: string;
  name: string;
  texts: string[];
}

export const languageCodes = [
  'en', 'es', 'fr', 'ar', 'de', 'fa', 'ko', 'ja', 'zh-Hant', 'zh-Hans', 
  'it', 'nl', 'hi', 'ta', 'ro', 'ru', 'ur', 'he', 'pt', 'id', 
  'vi', 'th', 'lo', 'mn', 'km', 'my', 'bn', 'ne', 'mr', 'te', 
  'sw', 'yo', 'ig', 'ber', 'tr', 'kk'
];

export const languageNames: Record<string, string> = {
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'ar': 'العربية',
  'de': 'Deutsch',
  'fa': 'فارسی',
  'ko': '한국어',
  'ja': '日本語',
  'zh-Hant': '繁體中文',
  'zh-Hans': '简体中文',
  'it': 'Italiano',
  'nl': 'Nederlands',
  'hi': 'हिन्दी',
  'ta': 'தமிழ்',
  'ro': 'Română',
  'ru': 'Русский',
  'ur': 'اردو',
  'he': 'עברית',
  'pt': 'Português',
  'id': 'Bahasa Indonesia',
  'vi': 'Tiếng Việt',
  'th': 'ไทย',
  'lo': 'ລາວ',
  'mn': 'Монгол',
  'km': 'ខ្មែរ',
  'my': 'မြန်မာ',
  'bn': 'বাংলা',
  'ne': 'नेपाली',
  'mr': 'मराठी',
  'te': 'తెలుగు',
  'sw': 'Kiswahili',
  'yo': 'Yorùbá',
  'ig': 'Igbo',
  'ber': 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  'tr': 'Türkçe',
  'kk': 'Қазақша'
};

export async function loadLanguage(code: string): Promise<Language> {
  try {
    const response = await fetch(`/localization/languages/${code}.yaml`);
    const yamlText = await response.text();
    
    const yaml = await import('js-yaml');
    const data = yaml.load(yamlText) as { name: string; texts: string[] };
    
    return {
      code,
      name: data.name,
      texts: data.texts
    };
  } catch (error) {
    console.error(`Failed to load language: ${code}`, error);
    return {
      code,
      name: languageNames[code] || code,
      texts: ["Error loading language data. Please try again."]
    };
  }
}

export function useLanguages() {
  const [languages, setLanguages] = useState<Record<string, Language>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadAllLanguages = async () => {
      try {
        setIsLoading(true);
        const languagePromises = languageCodes.map(code => loadLanguage(code));
        const loadedLanguages = await Promise.all(languagePromises);
        
        const languageMap: Record<string, Language> = {};
        loadedLanguages.forEach(lang => {
          languageMap[lang.code] = lang;
        });
        
        setLanguages(languageMap);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    };

    loadAllLanguages();
  }, []);

  return { languages, isLoading, error };
}
