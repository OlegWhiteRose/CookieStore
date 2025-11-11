import '../inputs.scss';

interface TextAreaInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant?: 'light' | 'dark' | 'transparent';
    labelVariant?: 'light' | 'dark' | 'large';
    rows?: number;
    wide?: boolean;
    error?: boolean;
}

function TextAreaInput(props: TextAreaInputProps) {
    const { 
        label, 
        placeholder, 
        value, 
        onChange, 
        variant = 'dark',
        labelVariant = 'dark',
        rows = 3,
        wide = false,
        error = false
    } = props;

    const fieldClass = `input-field ${wide ? 'input-field--wide' : ''}`.trim();
    const labelClass = `input-label input-label--${labelVariant}`.trim();
    const textareaClass = `textarea-control textarea-control--${variant} ${error ? 'textarea-control--error' : ''}`.trim();

    return (
        <div className={fieldClass}>
            {label && <label className={labelClass}>{label}</label>}
            <textarea 
                className={textareaClass}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                rows={rows}
            />
        </div>
    );
}

export default TextAreaInput;
