import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Poppup.scss';

interface PoppupProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
    tagFor: React.RefObject<HTMLElement | null>;
    top?: number;
}

function Poppup(props: PoppupProps) {
    const { active, setActive, children, tagFor, top } = props;

    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [alignRight, setAlignRight] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const popupRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!active) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const button = tagFor.current;
            const popup = popupRef.current;

            if (
                button && !button.contains(target) &&
                popup && !popup.contains(target)
            ) {
                setActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active, setActive, tagFor]);

    useEffect(() => {
        if (!active) return;

        const updateCoords = () => {
            const el = tagFor.current;
            const content = contentRef.current;
            if (!el || !content) return;

            const rect = el.getBoundingClientRect();
            const contentWidth = content.offsetWidth || 200;
            
            const distanceFromLeft = rect.x;
            const distanceFromRight = window.innerWidth - (rect.x + rect.width);
            
            const shouldAlignRight = distanceFromRight < distanceFromLeft;
            
            setAlignRight(shouldAlignRight);

            let left = rect.x;
            if (shouldAlignRight) {
                left = rect.x + rect.width;
            }

            setCoords({
                top: rect.y + (top ?? 0),
                left: left,
            });
        };
        
        updateCoords();

        const handleScroll = () => {
            setIsVisible(false);
            
            setTimeout(() => {
                if (active) {
                    setActive(false);
                }
            }, 200);
        };

        window.addEventListener('resize', updateCoords);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('resize', updateCoords);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [active, top, tagFor, setActive]);

    useEffect(() => {
        if (active) {
            setIsVisible(true);
        }
    }, [active]);


    if (!active) return null;

    return createPortal(
        <div
            ref={popupRef}
            className={`poppup ${isVisible ? 'poppup--visible' : 'poppup--hidden'}`}
        >
            <div
                ref={contentRef}
                className="poppup__content" 
                style={{
                    top: coords.top,
                    left: coords.left,
                    transform: alignRight ? 'translateX(-100%)' : undefined,
                }}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Poppup;
