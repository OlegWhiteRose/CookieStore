import classes from './Wave.module.scss';

type WaveTopProps = {
    height?: number;
}

function WaveTop(props: WaveTopProps) {
    const { height = 60 } = props;

    return (
        <div className={classes.top} style={{ height: `${height}px` }}>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="var(--wave-color)" />
            </svg>
        </div>
    )
}

export default WaveTop;

