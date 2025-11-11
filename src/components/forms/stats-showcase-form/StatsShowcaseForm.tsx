import './StatsShowcaseForm.scss';

interface StatsShowcaseFormProps {
    number: string;
    description: string;
}

function StatsShowcaseForm(props: StatsShowcaseFormProps) {
    const { number, description } = props;

    return (
        <div className="stats-showcase-form">
            <h1 className="stats-showcase-form__number">{ number }</h1>
            <span className="stats-showcase-form__description">{ description }</span>
        </div>
    );
}

export default StatsShowcaseForm;

