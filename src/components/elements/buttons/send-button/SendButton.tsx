import '../buttons.scss';
import './SendButton.scss';

interface SendButtonProps {
    text: string;
    onClick?: () => void;
}

function SendButton(props: SendButtonProps) {
    const { text, onClick } = props;
    
    return (
        <button 
            className="btn btn--secondary btn--hover-effect-lift btn--align-center send-button" 
            onClick={onClick}
        >
            {text}
        </button>
    );
}   

export default SendButton;
