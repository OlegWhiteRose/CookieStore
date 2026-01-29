export interface Contact {
  phone: string;
  email: string;
  address: string;
  inn: string;
}

export interface ContactResponse {
  status: 'ok';
  data: Contact;
}
