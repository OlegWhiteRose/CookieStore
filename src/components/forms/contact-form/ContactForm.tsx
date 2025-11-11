import './ContactForm.scss';

import copyToClipboard from '@common/copyToClipboard';

interface ContactFormProps {
    title: string;
    content: string;
    clipboard: string;
    message: string;
    icon: React.ReactNode;
}

function ContactForm(props: ContactFormProps) {
    const { title, content, clipboard, message, icon } = props;

    function handleCopyClick() {
        copyToClipboard(clipboard, message);
    }

    return (
        <div onClick={handleCopyClick}  className="contact-form">
            <div className="contact-form__title">
                { title }
            </div>
            <div className="contact-form__content">
                { content }
            </div>

            <div className="contact-form__bottom">
                <span>Нажмите, чтобы скопировать</span>
                <div className="contact-form__bottom-icon">
                    { icon }
                </div>
            </div>
        </div>
    )
}

export default ContactForm;

