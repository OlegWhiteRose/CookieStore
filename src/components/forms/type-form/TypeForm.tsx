import { Link } from 'react-router-dom';

import './TypeForm.scss';

interface TypeFormProps {
    title: string;
    backgroundImgSrc: string;
    url: string;
}

function TypeForm(props: TypeFormProps) {
    const { title, backgroundImgSrc, url } = props;

    return (
        <Link to={url} className="type-form">
            <div className="type-form__background" style={{ backgroundImage: `url(${backgroundImgSrc})` }}>
                <div className="type-form__title-container">
                    <span>{title}</span>
                </div>
            </div>
        </Link>
    )
}

export default TypeForm;

