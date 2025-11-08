import '../buttons.scss';
import './OrderButton.scss';

interface OrderButtonProps {
    text: string;
    onClick?: () => void;
}

function OrderButton(props: OrderButtonProps) {
    const { text, onClick } = props;
    
    return (
        <button 
            className="btn btn--primary btn--hover-effect-lift btn--align-center order-button" 
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default OrderButton;

 