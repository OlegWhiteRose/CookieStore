import './TypeForm.scss';

interface TypeFormProps {
    title: string;
    backgroundImgSrc: string;
}

function TypeForm(props: TypeFormProps) {
    const { title, backgroundImgSrc } = props;

    return (
        <div className="type-form">
            <div className="type-form__background" style={{ backgroundImage: `url(${backgroundImgSrc})` }}>
                <div className="type-form__title-container">
                    <span>{title}</span>
                </div>
            </div>
        </div>
    )
}

export default TypeForm;

