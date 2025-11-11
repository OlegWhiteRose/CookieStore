import './BenefitItemForm.scss';

interface BenefitItemFormProps {
    icon: string;
    title: string;
    text: string;
}

function BenefitItemForm(props: BenefitItemFormProps) {
    const { icon, title, text } = props;

    return (
        <div className="about-page__benefit">
            <div className="about-page__benefit-icon">{icon}</div>
            <h3 className="about-page__benefit-title">{title}</h3>
            <p className="about-page__benefit-text">
                {text}
            </p>
        </div>
    );
}

export default BenefitItemForm;
