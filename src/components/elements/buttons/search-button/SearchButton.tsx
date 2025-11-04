import './SearchButton.scss';

interface SearchButtonProps {
    onClick?: () => void;
    text: string;
}

function SearchButton(props: SearchButtonProps) {
    const { onClick, text } = props;

    return (
        <button 
            className="btn btn--secondary btn--hover-effect-opacity btn--align-center search-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default SearchButton;
