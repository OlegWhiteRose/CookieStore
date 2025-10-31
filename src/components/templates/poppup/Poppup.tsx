import { useEffect, useState } from 'react';
import './Poppup.scss';

interface PoppupProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
    tagFor: React.RefObject<HTMLElement | null>;
    top?: number;
    align?: 'left' | 'right'; 
}

function Poppup(props: PoppupProps) {
    const { active, setActive, children, tagFor, top, align = 'left' } = props;

    const [coords, setCoords] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (!active) return;

        const updateCoords = () => {
            const el = tagFor.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            let left = rect.x;

            if (align === 'right') {
                left = rect.x + rect.width;
            }

            setCoords({
                top: rect.y + (top ?? 0) + window.scrollY,
                left: left + window.scrollX,
            });
        };
        
        updateCoords();

        window.addEventListener('resize', updateCoords);
        window.addEventListener('scroll', updateCoords);

        return () => {
            window.removeEventListener('resize', updateCoords);
            window.removeEventListener('scroll', updateCoords);
        };
    }, [active, align, top, tagFor]);


    return (
        <div
            className={`poppup ${active ? 'active' : ''}`}
            onClick={() => setActive(false)}
        >
            <div
                className="poppup__content" 
                onClick={(e) => e.stopPropagation()}
                style={{
                    top: coords.top,
                    left: coords.left,
                    transform: align === 'right' ? 'translateX(-100%)' : undefined,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Poppup;
