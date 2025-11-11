import { useState, useEffect } from "react";

import { showcaseApi } from "@/api/showcaseApi";

interface StatsShowcase {
    number: string;
    description: string;
}

export const useStatsShowcase = () => {
    const [stats, setStats] = useState<StatsShowcase[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadStats = async () => {
            setLoading(true);
            setError(false);

            try {
                const { data } = await showcaseApi.getStats();
                
                if (data.status !== 'ok') {
                    throw new Error('Server returned an error status');
                }

                const dict: Record<string, string> = {
                    cookies_sold: 'кг печенья продано',
                    clients: 'клиентов ежегодно',
                    reviews: 'положительных отзывов',
                }

                const stats = [] ;
                for (let {number, type} of data.data) {
                    stats.push({number: number, description: dict[type]});
                }
                setStats(stats);
            } catch (err) {
                console.error('Failed to load stats:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
    };
    loadStats();
  }, []);

  return { stats, loading, error };
};


