import './AdvantageForm.scss';

interface AdvantageFormProps {
    backgroundImgSrc: string;
    description: string;
}

function AdvantageForm(props: AdvantageFormProps) {
    const { backgroundImgSrc, description } = props;

    return (
        <div className="advantage-form">
            <div className="advantage-form__icon" style={{ backgroundImage: `url(${backgroundImgSrc})` }}>
            </div>
            <span className="advantage-form__description">
                { description }
            </span>
        </div>
    );
}

export default AdvantageForm;

