export const ENDPOINTS = {
  STATS: '/api/stats-showcase',
  COOKIES: '/api/cookies',
  COOKIE_BY_ID: (id: number | string) => `/api/cookies/${id}`,
  CONTACTS: '/api/contacts',
} as const;
