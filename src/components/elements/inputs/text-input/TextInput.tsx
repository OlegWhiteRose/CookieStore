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

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, '');
        let formatted = '+7';
        
        if (input.length > 1) {
            formatted += ' (' + input.substring(1, 4);
        }
        if (input.length >= 5) {
            formatted += ') ' + input.substring(4, 7);
        }
        if (input.length >= 8) {
            formatted += '-' + input.substring(7, 9);
        }
        if (input.length >= 10) {
            formatted += '-' + input.substring(9, 11);
        }
        
        onChange?.(formatted);
    };

    if (type === 'tel') {
        return (
            <div className={fieldClass}>
                {label && <label className={labelClass}>{label}</label>}
                <input 
                    type="text"
                    className={inputClass}
                    placeholder={placeholder}
                    value={value}
                    onChange={handlePhoneChange}
                    maxLength={18}
                />
            </div>
        );
    }

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
