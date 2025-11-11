import fetchClient from './fetchClient';
import { ENDPOINTS } from './endpoints';

export const showcaseApi = {
  getStats: () => fetchClient.get(ENDPOINTS.STATS),
};

