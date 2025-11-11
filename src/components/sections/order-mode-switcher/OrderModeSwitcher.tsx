import './OrderModeSwitcher.scss';

type Mode = 'cart' | 'order';

interface OrderModeSwitcherProps {
    activeMode: Mode;
    onModeChange: (mode: Mode) => void;
}

function OrderModeSwitcher(props: OrderModeSwitcherProps) {
    const { activeMode, onModeChange } = props;

    return (
        <div className="order-mode-switcher">
            <div className="order-mode-switcher__buttons">
                <button 
                    className={`order-mode-switcher__btn ${activeMode === 'cart' ? 'order-mode-switcher__btn--active' : ''}`}
                    onClick={() => onModeChange('cart')}
                >
                    <div className="order-mode-switcher__circle">1</div>
                    <span>Корзина</span>
                </button>
                <button 
                    className={`order-mode-switcher__btn ${activeMode === 'order' ? 'order-mode-switcher__btn--active' : ''}`}
                    onClick={() => onModeChange('order')}
                >
                    <div className="order-mode-switcher__circle">2</div>
                    <span>Заказ</span>
                </button>
            </div>
            <div className="order-mode-switcher__line">
                <div 
                    className={`order-mode-switcher__line-active ${activeMode === 'order' ? 'order-mode-switcher__line-active--order' : ''}`}
                />
            </div>
        </div>
    );
}

export default OrderModeSwitcher;
