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
                <span className="type-form__title">{title}</span>
            </div>
        </div>
    )
}

export default TypeForm;

