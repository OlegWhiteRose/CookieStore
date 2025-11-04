import { useState, useEffect } from 'react';
import { cookiesApi } from '@/api/cookiesApi';
import { Cookie } from './useCookies';

export const useCookie = (id: number | string | undefined) => {
  const [cookie, setCookie] = useState<Cookie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError('No ID provided');
      return;
    }

    const loadCookie = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await cookiesApi.getCookieById(id);
        
        if (data.status !== 'ok') {
          throw new Error('Server returned an error status');
        }

        setCookie(data.data || null);
      } catch (err) {
        console.error('Failed to load cookie:', err);
        setError(err instanceof Error ? err.message : 'Failed to load cookie');
      } finally {
        setLoading(false);
      }
    };

    loadCookie();
  }, [id]);

  return { cookie, loading, error };
};
