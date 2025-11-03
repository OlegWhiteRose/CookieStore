import fetchClient from './fetchClient';
import { ENDPOINTS } from './endpoints';

export interface CookiesFilter {
  type?: string;
  cost_from?: number;
  cost_to?: number;
  quantity_from?: number;
  quantity_to?: number;
  format?: string;
  title?: string;
}

export const cookiesApi = {
  getCookies: (filter?: CookiesFilter) => {
    const params = new URLSearchParams();
    
    if (filter) {
      if (filter.type) params.append('type', filter.type);
      if (filter.cost_from !== undefined) params.append('cost_from', filter.cost_from.toString());
      if (filter.cost_to !== undefined) params.append('cost_to', filter.cost_to.toString());
      if (filter.quantity_from !== undefined) params.append('quantity_from', filter.quantity_from.toString());
      if (filter.quantity_to !== undefined) params.append('quantity_to', filter.quantity_to.toString());
      if (filter.format) params.append('format', filter.format);
      if (filter.title) params.append('title', filter.title);
    }

    const queryString = params.toString();
    const url = queryString ? `${ENDPOINTS.COOKIES}?${queryString}` : ENDPOINTS.COOKIES;
    
    return fetchClient.get(url);
  },

  getCookieById: (id: number | string) => {
    return fetchClient.get(ENDPOINTS.COOKIE_BY_ID(id));
  },
};
