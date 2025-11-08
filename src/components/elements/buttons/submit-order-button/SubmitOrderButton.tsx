import '../buttons.scss';
import './SubmitOrderButton.scss';

interface SubmitOrderButtonProps {
    text: string;
    onClick?: (e: React.FormEvent) => void;
}

function SubmitOrderButton(props: SubmitOrderButtonProps) {
    const { text, onClick } = props;

    const handleClick = (e: React.FormEvent) => {
        if (onClick) {
            onClick(e);
        }
    };
    
    return (
        <button 
            type="submit"
            className="btn btn--secondary btn--hover-effect-lift submit-order-button" 
            onClick={handleClick}
        >
            <span>{text}</span>
        </button>
    );
}

export default SubmitOrderButton;
