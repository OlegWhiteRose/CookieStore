import fetchClient from "./fetchClient";
import { ENDPOINTS } from "./endpoints";

export const contactsApi = {
    getContacts: () => fetchClient.get(ENDPOINTS.CONTACTS),
};

