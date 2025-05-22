
interface User {
  id: string;
  name: string;
}

interface UserPreferences {
  user_id: string;
  sudden_death: boolean;
  game_over_enabled: boolean;
  time_limit: number;
}

interface Stats {
  user_id: string;
  language_code: string;
  wpm: number;
  accuracy: number;
  mistakes: number;
  elapsed_time: number;
  text_length: number;
  completed: boolean;
}

const API_URL = 'http://localhost:3000/api';

export const createUser = async (name?: string): Promise<User> => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  
  return response.json();
};

export const getUser = async (id: string): Promise<User> => {
  const response = await fetch(`${API_URL}/users/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to get user');
  }
  
  return response.json();
};

export const getUserPreferences = async (id: string): Promise<UserPreferences> => {
  const response = await fetch(`${API_URL}/users/${id}/preferences`);
  
  if (!response.ok) {
    throw new Error('Failed to get user preferences');
  }
  
  return response.json();
};

export const updateUserPreferences = async (
  id: string,
  preferences: Partial<UserPreferences>
): Promise<UserPreferences> => {
  const response = await fetch(`${API_URL}/users/${id}/preferences`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update user preferences');
  }
  
  return response.json();
};

export const saveStats = async (stats: Stats): Promise<Stats> => {
  const response = await fetch(`${API_URL}/stats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(stats),
  });
  
  if (!response.ok) {
    throw new Error('Failed to save stats');
  }
  
  return response.json();
};

export const getUserStats = async (id: string): Promise<{ stats: Stats[] }> => {
  const response = await fetch(`${API_URL}/stats/user/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to get user stats');
  }
  
  return response.json();
};

export const getUserStatsByLanguage = async (
  id: string,
  languageCode: string
): Promise<{ stats: Stats[] }> => {
  const response = await fetch(`${API_URL}/stats/user/${id}/language/${languageCode}`);
  
  if (!response.ok) {
    throw new Error('Failed to get user stats by language');
  }
  
  return response.json();
};

export const getUserAverageStats = async (
  id: string
): Promise<{ averageStats: any[] }> => {
  const response = await fetch(`${API_URL}/stats/user/${id}/average`);
  
  if (!response.ok) {
    throw new Error('Failed to get user average stats');
  }
  
  return response.json();
};

export const getLanguages = async (): Promise<{ languages: { code: string; name: string }[] }> => {
  const response = await fetch(`${API_URL}/languages`);
  
  if (!response.ok) {
    throw new Error('Failed to get languages');
  }
  
  return response.json();
};

export const getLanguage = async (
  code: string
): Promise<{ code: string; name: string; texts: string[] }> => {
  const response = await fetch(`${API_URL}/languages/${code}`);
  
  if (!response.ok) {
    throw new Error('Failed to get language');
  }
  
  return response.json();
};

export const createCustomLanguage = async (
  languageCode: string,
  name: string,
  texts: string[],
  userId: string
): Promise<any> => {
  const response = await fetch(`${API_URL}/languages/custom`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      language_code: languageCode,
      name,
      texts,
      user_id: userId,
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create custom language');
  }
  
  return response.json();
};

export const getUserCustomLanguages = async (
  id: string
): Promise<{ customLanguages: any[] }> => {
  const response = await fetch(`${API_URL}/languages/custom/user/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to get user custom languages');
  }
  
  return response.json();
};
