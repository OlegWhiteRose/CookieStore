export interface OrderItem {
  cookieId: string;
  title: string;
  price: number;
  quantity: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'delivered' | 'cancelled';

export interface Order {
  phone: string;
  email: string;
  city: string;
  postalCode: string;
  street: string;
  house: string;
  building: string;
  apartment: string;
  comment?: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
}

export interface OrderResponse {
  status: 'ok';
  data: {
    _id: string;
    phone: string;
    email: string;
    city: string;
    postalCode: string;
    street: string;
    house: string;
    building: string;
    apartment: string;
    comment?: string;
    items: OrderItem[];
    totalAmount: number;
    status: OrderStatus;
    createdAt: string;
  };
}
