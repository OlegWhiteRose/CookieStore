export type StatType = 'cookies_sold' | 'clients' | 'reviews';

export interface Stat {
  number: string;
  type: StatType;
}

export interface StatsResponse {
  status: 'ok';
  data: Stat[];
}
