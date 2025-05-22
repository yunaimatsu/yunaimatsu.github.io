import { useEffect, useState } from 'react';

export interface Language {
  code: string;
  name: string;
  texts: string[];
  ui: Record<string, string>;
}

export enum UIString {
  TYPING_PRACTICE = "typingPractice",
  SETTINGS = "settings",
  CONFIGURATION = "configuration",
  SUDDEN_DEATH_MODE = "suddenDeathMode",
  GAME_OVER_CONDITIONS = "gameOverConditions",
  TIME_LIMIT = "timeLimit",
  NO_TIME_LIMIT = "noTimeLimit",
  SECONDS = "seconds",
  TEXT_TO_TYPE = "textToType",
  NEW_TEXT = "newText",
  START = "start",
  START_TYPING = "startTyping",
  GAME_OVER = "gameOver",
  SUDDEN_DEATH_ERROR = "suddenDeathError",
  TIME_LIMIT_REACHED = "timeLimitReached",
  GAME_OVER_MESSAGE = "gameOverMessage",
  SPEED = "speed",
  WPM = "wpm",
  ACCURACY = "accuracy",
  TIME = "time",
  RESET = "reset",
  NEXT_EXERCISE = "nextExercise",
  LOADING = "loading",
  SELECT_LANGUAGE = "selectLanguage",
  LOADING_LANGUAGES = "loadingLanguages",
  LOADING_LANGUAGE_DATA = "loadingLanguageData",
  UI_LANGUAGE = "uiLanguage",
  TYPING_LANGUAGE = "typingLanguage"
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
    const data = yaml.load(yamlText) as { name: string; texts: string[]; ui?: Record<string, string> };
    
    return {
      code,
      name: data.name,
      texts: data.texts,
      ui: data.ui || {} // Handle case where ui translations might not exist yet
    };
  } catch (error) {
    console.error(`Failed to load language: ${code}`, error);
    return {
      code,
      name: languageNames[code] || code,
      texts: ["Error loading language data. Please try again."],
      ui: {}
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

export function getUIString(
  languages: Record<string, Language>,
  uiLanguageCode: string,
  key: UIString,
  fallbackLanguageCode: string = 'en'
): string {
  const uiLanguage = languages[uiLanguageCode];
  if (uiLanguage?.ui && uiLanguage.ui[key]) {
    return uiLanguage.ui[key];
  }
  
  const fallbackLanguage = languages[fallbackLanguageCode];
  if (fallbackLanguage?.ui && fallbackLanguage.ui[key]) {
    return fallbackLanguage.ui[key];
  }
  
  return key;
}
