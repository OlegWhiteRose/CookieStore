import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "@/store/alert/alertReducer";

import './Alert.scss';

import SuccessSrc from '@assets/icon/alert-success.png';
import ErrorSrc from '@assets/icon/alert-error.png';
import Close from '@assets/icon/alert-close.svg?react';

interface AlertProps {
    id: number;
    text: string;
    type?: 'success' | 'error';
    duration?: number;
}

function Alert(props: AlertProps) {
    const { id, text, type = 'success', duration = 2300 } = props;
    const [isClosing, setIsClosing] = useState(false);
    const dispatch = useDispatch();

    const iconSrc = type === 'success' ? SuccessSrc : ErrorSrc;

    const handleClose = useCallback(() => {
        if (isClosing) return; 
        
        setIsClosing(true);
        
        setTimeout(() => {
            dispatch(removeAlert(id));
        }, 300); 
    }, [dispatch, id, isClosing]);

    const handleCloseClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
    }, [handleClose]);

    useEffect(() => {
        if (duration <= 0) return; 
        
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, handleClose]);

    return (
        <div 
            className={`alert-container__alert ${isClosing ? 'alert-container__alert--closing' : ''}`}
            role="alert"
            aria-live="polite"
            aria-atomic="true"
        >
            <div className="alert-container__alert__content">
                <img 
                    className="alert-container__alert__content-icon" 
                    src={iconSrc} 
                    alt={`${type} icon`}
                    loading="lazy"
                />
                <span className="alert-container__alert__content-text">
                    {text}
                </span>
            </div>

            <button
                className="alert-container__alert__close"
                onClick={handleCloseClick}
                aria-label="Закрыть уведомление"
                type="button"
            >
                <Close />
            </button>
        </div>
    );
};

export default Alert;

