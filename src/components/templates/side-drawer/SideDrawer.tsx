import { ReactNode, useEffect } from 'react';
import './SideDrawer.scss';

export interface SideDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    position?: 'left' | 'right';
}

function SideDrawer({ isOpen, onClose, children, position = 'right' }: SideDrawerProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <div 
                className={`side-drawer-overlay ${isOpen ? 'side-drawer-overlay--active' : ''}`}
                onClick={onClose}
            />
            <div className={`side-drawer side-drawer--${position} ${isOpen ? 'side-drawer--open' : ''}`}>
                {children}
            </div>
        </>
    );
}

export default SideDrawer;
