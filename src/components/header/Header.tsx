import wave from '@assets/img/wave.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={wave} alt="wave" />
        </header>
    )
}

export default Header;

