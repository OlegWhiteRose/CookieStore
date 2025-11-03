import { useState, useEffect } from 'react';

import { contactsApi } from '@/api/contactsApi'; 

interface Contact {
    phone: string;
    email: string;
    address: string;
    inn: string;
}

export const useContacts = () => {
    const [contacts, setContacts] = useState<Contact>({
        phone: '?',
        email: '?',
        address: '?',
        inn: '?'
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContacts = async () => {
            setLoading(true);

            try {
                const { data } = await contactsApi.getContacts();
                
                if (data.status !== 'ok') {
                    throw new Error('Server returned an error status');
                }
                setContacts(data.data);
            } catch (err) {
                console.error('Failed to load contacts:', err);
            } finally {
                setLoading(false);
            }
        };
        loadContacts();
    }, []);

    return { contacts, loading };
};


