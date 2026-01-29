import axiosClient from './axiosClient';
import { ENDPOINTS } from './endpoints';
import { StatsResponse } from '@/models';

export const showcaseApi = {
  getStats: () => axiosClient.get<StatsResponse>(ENDPOINTS.STATS),
};

