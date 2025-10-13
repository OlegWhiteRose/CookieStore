import '../buttons.scss';
import './MenuFilterButton.scss';

interface MenuFilterButtonProps {
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

function MenuFilterButton(props: MenuFilterButtonProps) {
    const { text, icon, onClick } = props;
    
    return (
        <button 
            className="btn btn--default btn--align-center menu-filter-button" 
            onClick={onClick}
        >
            <span className="menu-filter-button__icon">{icon}</span>
            {text}  
        </button>
    );
}

export default MenuFilterButton;

