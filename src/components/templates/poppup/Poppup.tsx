import { useEffect, useRef, useState } from 'react';
import './Poppup.scss';

interface PoppupProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
    tagFor: React.RefObject<HTMLElement | null>;
    top?: number;
}

function Poppup(props: PoppupProps) {
    const { active, setActive, children } = props;
    const popupRef = useRef<HTMLDivElement>(null);
    const [alignLeft, setAlignLeft] = useState(false);

    useEffect(() => {
        if (!active) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const popup = popupRef.current;
            const button = props.tagFor.current;

            if (
                popup && !popup.contains(target) &&
                button && !button.contains(target)
            ) {
                setActive(false);
            }
        };

        const timeoutId = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active, setActive, props.tagFor]);

    useEffect(() => {
        if (!active) return;
        
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        const button = props.tagFor.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const distanceFromLeft = rect.left;
        const distanceFromRight = window.innerWidth - rect.right;

        setAlignLeft(distanceFromLeft < distanceFromRight);
    }, [active, props.tagFor]);

    useEffect(() => {
        if (!active) return;

        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        } 
    }, [active, setActive]);


    if (!active) return null;

    return (
        <>
            <div 
                className="poppup-overlay" 
                onClick={() => setActive(false)}
            />
            
            <div
                ref={popupRef}
                className={`poppup ${alignLeft ? 'poppup--align-left' : ''}`}
            >
                {children}
            </div>
        </>
    );
}

export default Poppup;
