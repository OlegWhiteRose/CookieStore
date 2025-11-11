import { useState, useEffect } from 'react';

import { cookiesApi, CookiesFilter } from '@/api/cookiesApi';

export interface Cookie {
  id: number;
  title: string;
  price: number;
  format: string;
  type: string;
  img_url: string;
  description: string;
  ingredients: string;
  address: string;
  quantity: number;
}

export interface CookiesMetadata {
  max_price: number;
  max_quantity: number;
}

export const useCookies = (filter?: CookiesFilter) => {
  const [cookies, setCookies] = useState<Cookie[]>([]);
  const [metadata, setMetadata] = useState<CookiesMetadata>({ max_price: 10000, max_quantity: 500 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCookies = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await cookiesApi.getCookies(filter);
        
        if (data.status !== 'ok') {
          throw new Error('Server returned an error status');
        }

        setCookies(data.data || []);
        
        if (data.max_price && data.max_quantity) {
          setMetadata({
            max_price: data.max_price,
            max_quantity: data.max_quantity,
          });
        }
      } catch (err) {
        console.error('Failed to load cookies:', err);
        setError(err instanceof Error ? err.message : 'Failed to load cookies');
      } finally {
        setLoading(false);
      }
    };

    loadCookies();
  }, [
    filter?.type,
    filter?.cost_from,
    filter?.cost_to,
    filter?.quantity_from,
    filter?.quantity_to,
    filter?.format,
    filter?.title,
  ]);

  return { cookies, metadata, loading, error };
};
