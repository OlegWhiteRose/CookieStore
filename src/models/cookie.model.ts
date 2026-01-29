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

export interface CookiesResponse {
  status: 'ok';
  data: Cookie[];
  max_price: number;
  max_quantity: number;
}

export interface CookieResponse {
  status: 'ok';
  data: Cookie;
}
