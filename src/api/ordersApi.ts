import axiosClient from './axiosClient';
import { ENDPOINTS } from './endpoints';
import { Order, OrderResponse } from '@/models';

export const ordersApi = {
  create: async (data: Omit<Order, 'status'>) => {
    return axiosClient.post<OrderResponse>(ENDPOINTS.ORDERS, data);
  }
};
