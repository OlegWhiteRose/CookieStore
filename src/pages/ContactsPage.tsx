import './pages.scss';

import ContactForm from '@/components/forms/contact-form/ContactForm';
import FeedbackInput from '@/components/elements/inputs/feedback-input/FeedbackInput';
import VerticalSection from '@/components/templates/vertical-section/VerticalSection';
import SectionContent from '@/components/templates/section-content/SectionContent';
import SendButton from '@/components/elements/buttons/send-button/SendButton';

import Phone from '@assets/icon/phone.svg?react';
import Mail from '@assets/icon/mail.svg?react';
import Browser from '@assets/icon/browser.svg?react';
import MoneyDatabase from '@assets/icon/money-database.svg?react';

const CONTACTS = [
    {
        title: 'Телефон',
        message: 'Телефон скопирован',
        content: '8 (xxx) xxx-xx-xx',
        clipboard: '8xxxxxxxxxx',
        icon: Phone
    },
    {
        title: 'Почта',
        message: 'Почта скопирована',
        content: 'Hkikomori@yandex.ru',
        clipboard: 'Hkikomori@yandex.ru',
        icon: Mail
    },
    {
        title: 'Юридический адрес',
        message: 'Юридический адрес скопирован',
        content: 'г. Беллер, улица Селлер, д. 15',
        clipboard: 'г. Беллер, улица Селлер, д. 15',
        icon: Browser
    },
    {
        title: 'ИНН',
        message: 'ИНН скопирован',
        content: 'xxxxxxxxxx',
        clipboard: 'xxxxxxxxxx',
        icon: MoneyDatabase
    },
]   


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
    const sideTitleText = "Мы открыты и будем рады помочь с вопросами, пожеланиями или предложениями. Обращайтесь к нам по интересующим вас темам по указанным выше контактам либо по форме ниже.";

    return (
        <VerticalSection className="page contacts-page">
            <SectionContent className="contacts-page__main">
                <div className="contacts-page__main__title">
                    <h1>Контакты</h1>
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
                        {INPUTS.map((input) => (
                            <FeedbackInput key={input.title} 
                                title={input.title} 
                                inputHeight={input.inputHeight} 
                                inputType={input.inputType} />
                        ))}
                        <SendButton 
                            text="Отправить сообщение"
                            onClick={() => console.log('Form submitted')}
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

