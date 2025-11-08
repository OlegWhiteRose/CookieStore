import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContacts } from '@/hooks/useContacts';
import { showAlert } from '@/common/showAlert';

import '../pages.scss';
import './ContactsPage.scss';

import ContactForm from '@/components/forms/contact-form/ContactForm';
import FeedbackInput from '@/components/elements/inputs/feedback-input/FeedbackInput';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';
import SectionContent from '@/components/templates/section-content/SectionContent';
import SendButton from '@/components/elements/buttons/send-button/SendButton';

import Phone from '@assets/icon/phone.svg?react';
import Mail from '@assets/icon/mail.svg?react';
import Browser from '@assets/icon/browser.svg?react';
import MoneyDatabase from '@assets/icon/money-database.svg?react';
import MapFeedback from '@assets/img/cookie-male-box.jpg';

type InputType = 'input' | 'textarea';

interface InputConfig {
  title: string;
  inputHeight: string;
  inputType: InputType;
}

const INPUTS: InputConfig[] = [
  {
    title: 'Ваши имя и фамилия',
    inputHeight: '30px',
    inputType: 'input'
  },
  {
    title: 'Ваши контакты для обратной связи',
    inputHeight: '40px',
    inputType: 'textarea'
  },
  {
    title: 'Ваше сообщение',
    inputHeight: '200px',
    inputType: 'textarea'
  }
];

function ContactsPage() {
    const { contacts, loading } = useContacts();
    const location = useLocation();

    const [formValues, setFormValues] = useState({
        name: '',
        contactInfo: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        contactInfo: false,
        message: false
    });

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    const updateField = (field: keyof typeof formValues, value: string) => {
        setFormValues({ ...formValues, [field]: value });
        if (errors[field as keyof typeof errors]) {
            setErrors({ ...errors, [field]: false });
        }
    };

    const handleSubmit = () => {
        const newErrors = {
            name: !formValues.name.trim(),
            contactInfo: !formValues.contactInfo.trim(),
            message: !formValues.message.trim()
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error)) {
            showAlert('Заполните все поля', 'error');
            return;
        }

        showAlert('Письмо отправлено', 'success');
        setFormValues({ name: '', contactInfo: '', message: '' });
    };

    const CONTACTS = [
        {
            title: 'Телефон',
            message: 'Телефон скопирован',
            content: contacts.phone,
            clipboard: contacts.phone,
            icon: Phone
        },
        {
            title: 'Почта',
            message: 'Почта скопирована',
            content: contacts.email,
            clipboard: contacts.email,
            icon: Mail
        },
        {
            title: 'Юридический адрес',
            message: 'Юридический адрес скопирован',
            content: contacts.address,
            clipboard: contacts.address,
            icon: Browser
        },
        {
            title: 'ИНН',
            message: 'ИНН скопирован',
            content: contacts.inn,
            clipboard: contacts.inn,
            icon: MoneyDatabase
        },
    ]

    const sideTitleText = "Мы открыты и будем рады помочь с вопросами, пожеланиями или предложениями. Обращайтесь к нам по интересующим вас темам по указанным выше контактам либо по форме ниже.";

    return (
        <VerticalSection className="page contacts-page">
            <SectionContent className="contacts-page__main">
                <div className="contacts-page__main__title">
                    <h1 id="contacts">Контакты</h1>
                </div>
                <div className="contacts-page__main__contacts">
                    {CONTACTS.map((contact) => (
                        <ContactForm key={contact.title} 
                            title={contact.title} 
                            content={contact.content} 
                            clipboard={contact.clipboard} 
                            message={contact.message}
                            icon={< contact.icon />} />
                    ))}
                </div>
                <div className="contacts-page__main__title">
                    <h1 id="about">Обратная связь</h1>
                </div>
                <span className="contacts-page__main__side-title">
                    { sideTitleText }                
                </span>
                <div className="contacts-page__main__feedback">
                    <div className="contacts-page__main__feedback-data">
                        <FeedbackInput 
                            title="Ваши имя и фамилия"
                            inputHeight="30px"
                            inputType="input"
                            value={formValues.name}
                            onChange={(value) => updateField('name', value)}
                            error={errors.name}
                        />
                        <FeedbackInput 
                            title="Ваши контакты для обратной связи"
                            inputHeight="40px"
                            inputType="textarea"
                            value={formValues.contactInfo}
                            onChange={(value) => updateField('contactInfo', value)}
                            error={errors.contactInfo}
                        />
                        <FeedbackInput 
                            title="Ваше сообщение"
                            inputHeight="200px"
                            inputType="textarea"
                            value={formValues.message}
                            onChange={(value) => updateField('message', value)}
                            error={errors.message}
                        />
                        <SendButton 
                            text="Отправить сообщение"
                            onClick={handleSubmit}
                        />
                    </div>
                    <div className="contacts-page__main__feedback-imageContainer">
                        <img src={MapFeedback} />
                    </div>
                </div>
            </SectionContent>
        </VerticalSection>
    )
}

export default ContactsPage;

