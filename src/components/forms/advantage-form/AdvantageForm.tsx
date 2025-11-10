import { useNavigate } from 'react-router-dom';

import './AdvantageForm.scss';

import NextIcon from '@assets/icon/next.svg?react';

export interface AdvantageFormProps {
    title: string;
    description: string;
    className?: string;
    imgSrc: string;
    size: [number, number];
    bottom?: number;
    right?: number;
}

function AdvantageForm(props: AdvantageFormProps) {
    const { title, description, className = '', imgSrc, size, bottom, right} = props;

    const navigate = useNavigate();
    
    function handleGlobalClick() {
        navigate('/about');    
    }

    const [width, height] = size;
    const bottomValue = bottom || 5;
    const rightValue = right || 5;

    return (
        <div onClick={handleGlobalClick} className={`advantage-form ${className}`}>
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
            <img className="advantage-form__image" 
                src={imgSrc} 
                alt={title} 
                width={width} 
                height={height} 
                style={{ bottom: bottomValue, right: rightValue }} />
        </div>
    );
}

export default AdvantageForm;

