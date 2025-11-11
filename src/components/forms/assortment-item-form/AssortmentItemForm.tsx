import './AssortmentItemForm.scss';

interface AssortmentItemFormProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

function AssortmentItemForm(props: AssortmentItemFormProps) {
    const { imageSrc, imageAlt, title, description } = props;

    return (
        <div className="about-page__assortment-item">
            <img src={imageSrc} alt={imageAlt} className="about-page__assortment-image" />
            <div className="about-page__assortment-info">
                <h3 className="about-page__assortment-title">{title}</h3>
                <p className="about-page__assortment-description">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AssortmentItemForm;
