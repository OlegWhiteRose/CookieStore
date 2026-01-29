import axiosClient from './axiosClient';
import { ENDPOINTS } from './endpoints';
import { Feedback, FeedbackResponse } from '@/models';

export const feedbackApi = {
  create: async (data: Feedback) => {
    return axiosClient.post<FeedbackResponse>(ENDPOINTS.FEEDBACK, data);
  }
};
