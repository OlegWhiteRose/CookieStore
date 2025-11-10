import '../inputs.scss';
import './FeedbackInput.scss';

interface FeedbackInputProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    inputType: 'textarea' | 'input';
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    error?: boolean;
}

function FeedbackInput(props: FeedbackInputProps) {
    const { title, size = 'medium', inputType, value, onChange, placeholder, error = false } = props;
    
    const sizeClass = size ? `input-control--${size}` : '';
    const inputClass = `input-control input-control--dark ${sizeClass} ${error ? 'input-control--error' : ''}`.trim();
    const textareaClass = `textarea-control textarea-control--dark ${sizeClass} ${error ? 'textarea-control--error' : ''}`.trim();
    
    return (
        <div className="input-field feedback-input">
            <label className="input-label input-label--light input-label--large">
                {title}
            </label>
            {inputType === 'textarea' ? (
                <textarea 
                    className={textareaClass}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                />
            ) : (
                <input 
                    className={inputClass}
                    type="text"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}

export default FeedbackInput;

