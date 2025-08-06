import './ContactForm.scss';

interface ContactFormProps {
    title: string;
    content: string;
    icon: React.ReactNode;
}

function ContactForm(props: ContactFormProps) {
    const { title, content, icon } = props;
    
    return (
        <div className="contact-form">
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

