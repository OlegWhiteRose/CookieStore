import './pages.scss';

import ContactForm from '@/components/forms/contact-form/ContactForm';
import FeedbackInput from '@/components/elements/inputs/feedback-input/FeedbackInput';

import Phone from '@assets/icon/phone.svg?react';
import Mail from '@assets/icon/mail.svg?react';
import Browser from '@assets/icon/browser.svg?react';
import MoneyDatabase from '@assets/icon/money-database.svg?react';

const CONTACTS = [
    {
        title: 'Телефон',
        content: '8 (xxx) xxx-xx-xx',
        icon: Phone
    },
    {
        title: 'Почта',
        content: 'Hkikomori@yandex.ru',
        icon: Mail
    },
    {
        title: 'Юридический адрес',
        content: 'г. Беллер, улица Селлер, д. 15',
        icon: Browser
    },
    {
        title: 'ИНН',
        content: 'xxxxxxxxxx',
        icon: MoneyDatabase
    },
]   


import MapFeedback from '@assets/img/map-feedback.png';

type InputType = 'input' | 'textarea';

interface InputConfig {
  title: string;
  inputHeight: string;
  inputType: InputType;
}

const INPUTS: InputConfig[] = [
  {
    title: 'Ваши имя и фамилия',
    inputHeight: '50px',
    inputType: 'input'
  },
  {
    title: 'Ваши контакты для обратной связи',
    inputHeight: '50px',
    inputType: 'input'
  },
  {
    title: 'Ваше сообщение',
    inputHeight: '200px',
    inputType: 'textarea'
  }
];

function ContactsPage() {
    return (
        <div className="page contacts-page">
            <div className="contacts-page__title">
                <h1>Контакты</h1>
            </div>
            <div className="contacts-page__contacts">
                {CONTACTS.map((contact) => (
                    <ContactForm key={contact.title} title={contact.title} content={contact.content} icon={< contact.icon />} />
                ))}
            </div>
            <div className="contacts-page__title">
                <h1>Обратная связь</h1>
            </div>
            <span className="contacts-page__side-title">
                Мы открыты и будем рады помочь с вопросами, пожеланиями или предложениями. Обращайтесь к нам по интересующим вас темам по указанным выше контактам либо по форме ниже.
            </span>
            <div className="contacts-page__feedback">
                <div className="contacts-page__feedback-data">
                    {INPUTS.map((input) => (
                        <FeedbackInput key={input.title} title={input.title} inputHeight={input.inputHeight} inputType={input.inputType} />
                    ))}
                    <button className="contacts-page__feedback-btn">Отправить ваше сообщение</button>
                </div>
                <div className="contacts-page__feedback-imageContainer">
                    <img src={MapFeedback} />
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;

