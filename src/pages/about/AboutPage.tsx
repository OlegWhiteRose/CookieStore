import { useRef, useState } from 'react';

import '../pages.scss';
import './AboutPage.scss';

import Poppup from '@/components/templates/poppup/Poppup';

function AboutPage() {
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    console.log(active);

    return (
        <div className='page about-page'>
            <button ref={buttonRef} onClick={() => setActive(!active)}>Open</button>
            <Poppup active={active} setActive={setActive} tagFor={buttonRef} top={100} align='right'>
                <p>123</p>
            </Poppup>
        </div>
    )
}

export default AboutPage;

