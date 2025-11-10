import classes from './Wave.module.scss';

interface WaveBottomProps {
    height?: number;
}

function WaveBottom(props: WaveBottomProps) {
    const { height } = props;

    return (
        <div className={classes.bottom} style={height ? { height: `${height}px` } : undefined}>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M0,40 C360,0 1080,80 1440,40 L1440,82 L0,82 Z" fill="var(--wave-color)" />
            </svg>
        </div>
    )
}

export default WaveBottom;