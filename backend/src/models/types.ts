export interface User {
  id: string;
  name: string;
  created_at: number;
}

export interface Stats {
  id: number;
  user_id: string;
  language_code: string;
  wpm: number;
  accuracy: number;
  mistakes: number;
  elapsed_time: number;
  text_length: number;
  completed: boolean;
  created_at: number;
}

export interface LanguageCustomization {
  id: number;
  language_code: string;
  name: string;
  texts: string; // JSON array of texts
  user_id: string | null;
  is_default: boolean;
  created_at: number;
}

export interface UserPreferences {
  user_id: string;
  sudden_death: boolean;
  game_over_enabled: boolean;
  time_limit: number;
  created_at: number;
  updated_at: number;
}
