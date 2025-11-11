import './FilterApplyButton.scss';

interface FilterApplyButtonProps {
    onClick?: () => void;
    text: string;
}

function FilterApplyButton(props: FilterApplyButtonProps) {
    const { onClick, text } = props;

    return (
        <button 
            className="btn btn--secondary btn--hover-effect-opacity btn--align-center filter-apply-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default FilterApplyButton;
