import '../inputs.scss';

interface TextInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant?: 'light' | 'dark' | 'transparent';
    labelVariant?: 'light' | 'dark' | 'large';
    type?: 'text' | 'email' | 'tel' | 'number';
    wide?: boolean;
    error?: boolean;
}

function TextInput(props: TextInputProps) {
    const { 
        label, 
        placeholder, 
        value, 
        onChange, 
        variant = 'dark',
        labelVariant = 'dark',
        type = 'text',
        wide = false,
        error = false
    } = props;

    const fieldClass = `input-field ${wide ? 'input-field--wide' : ''}`.trim();
    const labelClass = `input-label input-label--${labelVariant}`.trim();
    const inputClass = `input-control input-control--${variant} ${error ? 'input-control--error' : ''}`.trim();

    return (
        <div className={fieldClass}>
            {label && <label className={labelClass}>{label}</label>}
            <input 
                type={type}
                className={inputClass}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
}

export default TextInput;
