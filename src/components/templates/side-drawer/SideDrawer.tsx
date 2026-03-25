import { ReactNode, useLayoutEffect, useRef } from 'react';
import './SideDrawer.scss';

export interface SideDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    position?: 'left' | 'right';
}

function SideDrawer({ isOpen, onClose, children, position = 'right' }: SideDrawerProps) {
    const drawerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (drawerRef.current) {
            if (position === 'left') {
                drawerRef.current.style.left = '0';
                drawerRef.current.style.right = 'auto';
            } else {
                drawerRef.current.style.right = '0';
                drawerRef.current.style.left = 'auto';
            }
            
            if (isOpen) {
                drawerRef.current.style.transform = 'translateX(0)';
            } else {
                drawerRef.current.style.transform = position === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
            }
        }
    }, [position, isOpen]);

    useLayoutEffect(() => {
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
            <div 
                ref={drawerRef}
                className="side-drawer"
            >
                {children}
            </div>
        </>
    );
}

export default SideDrawer;
