const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.cookie-store.com';

interface FetchClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

const fetchClient = {
  async get<T = any>(url: string): Promise<FetchClientResponse<T>> {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async post<T = any>(url: string, body?: any): Promise<FetchClientResponse<T>> {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};

export default fetchClient;
