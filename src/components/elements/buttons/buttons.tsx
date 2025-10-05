import './buttons.scss';

interface BaseButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

interface ButtonProps extends BaseButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'default';
    size?: 'small' | 'large';
    radius?: '5' | '10' | '50';
    width?: 'full' | 'auto';
    padding?: 'small' | '10-15' | '4-24' | '15' | '20';
}

function Button(props: ButtonProps) {
    const { 
        text, 
        onClick, 
        type = 'button',
        disabled = false,
        className = '',
        variant = 'primary',
        size,
        radius = '10',
        width = 'auto',
        padding = '10-15'
    } = props;

    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--radius-${radius}`,
        `btn--width-${width}`,
        `btn--padding-${padding}`,
        size && `btn--${size}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <button 
            className={classes} 
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

function SendButton(props: BaseButtonProps) {
    const { text, ...otherProps } = props;
    
    return (
        <Button
            {...otherProps}
            text={text}
            variant="success"
            radius="10"
            width="full"
            padding="15"
            type="submit"
        />
    );
}

function OrderButton(props: BaseButtonProps) {
    const { text, ...otherProps } = props;
    
    return (
        <Button
            {...otherProps}
            text={text}
            variant="primary"
            radius="50"
            padding="10-15"
        />
    );
}

function MenuFilterButton(props: BaseButtonProps) {
    const { text, ...otherProps } = props;
    
    return (
        <Button {...otherProps} 
            text={text} 
            variant="default" 
            radius="10" 
            padding="4-24" 
        />
    );
}

export { Button, SendButton, OrderButton, MenuFilterButton };


