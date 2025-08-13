import './Alert.scss';

import SuccessSrc from '@assets/icon/alert-success.png';
import ErrorSrc from '@assets/icon/alert-error.png';
import Close from '@assets/icon/alert-close.svg?react';

interface AlertProps {
    text: string;
    type?: 'success' | 'error';
}

function Alert(props: AlertProps) {
    const { text, type } = props;

    function handleCloseClick() {
        alert('Закрыть');
    }

    return (
        <div className="alert">
            <div className="alert__content">
                <img className="alert__content-icon" src={ SuccessSrc } />
                <span className="alert__content-text">{ text }</span>
            </div>

            <div className="alert__close" onClick={handleCloseClick}>
                <Close />
            </div>
        </div>
    )
}


export default Alert;
