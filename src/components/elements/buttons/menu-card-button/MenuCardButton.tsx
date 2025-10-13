import '../buttons.scss';
import './MenuCardButton.scss';

interface MenuCardButtonProps {
    text: string;
    onClick?: () => void;
}

function MenuCardButton(props: MenuCardButtonProps) {
    const { text, onClick } = props;
    
    return (
        <button 
            className="btn btn--secondary btn--align-center menu-card-button" 
            onClick={onClick}
        >
            {text}  
        </button>
    );
}

export default MenuCardButton;

