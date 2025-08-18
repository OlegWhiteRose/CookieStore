import './AdvantageForm.scss';

import NextIcon from '@assets/icon/next.svg?react';

interface AdvantageFormProps {
    title: string;
    description: string;
    className?: string;
}

function AdvantageForm(props: AdvantageFormProps) {
    const { title, description, className = '' } = props;

    return (
        <div className={`advantage-form ${className}`}>
            <div className="advantage-form__content">
                <div className="advantage-form__text">
                    <h3  className="advantage-form__title">{title}</h3>
                    <p className="advantage-form__description">{description}</p>
                </div>
                <span className="advantage-form__link">
                    Узнать больше
                    <NextIcon className="advantage-form__link-icon" />
                </span>
            </div>
            <div className="advantage-form__image"></div>
        </div>
    );
}

export default AdvantageForm;

