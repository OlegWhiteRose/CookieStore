import './AdvantageForm.scss';

import NextIcon from '@assets/icon/next.svg?react';

export interface AdvantageFormProps {
    title: string;
    description: string;
    className?: string;
    imgSrc?: string;
    size?: [number, number];
    bottom?: number;
    right?: number;
}

function AdvantageForm(props: AdvantageFormProps) {
    const { title, description, className = '', imgSrc, size, bottom = 20, right = 20} = props;

    const [width, height] = size || [175, 175];

    const imageStyle = {
        width: `${width}px`,
        height: `${height}px`,
        bottom: `${bottom}px`,
        right: `${right}px`
    };

    console.log(size);
    
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
            <img className="advantage-form__image" src={imgSrc} style={imageStyle}>
            </img>
        </div>
    );
}

export default AdvantageForm;

