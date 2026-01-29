import axiosClient from "./axiosClient";
import { ENDPOINTS } from "./endpoints";
import { ContactResponse } from "@/models";

export const contactsApi = {
    getContacts: () => axiosClient.get<ContactResponse>(ENDPOINTS.CONTACTS),
};

