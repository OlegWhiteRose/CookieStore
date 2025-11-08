import '../inputs.scss';
import './FeedbackInput.scss';

interface FeedbackInputProps {
    title: string;
    inputHeight?: string;
    inputType: 'textarea' | 'input';
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    error?: boolean;
}

function FeedbackInput(props: FeedbackInputProps) {
    const { title, inputHeight, inputType, value, onChange, placeholder, error = false } = props;
    
    const inputClass = `input-control input-control--dark ${error ? 'input-control--error' : ''}`.trim();
    const textareaClass = `textarea-control textarea-control--dark ${error ? 'textarea-control--error' : ''}`.trim();
    
    return (
        <div className="input-field feedback-input">
            <label className="input-label input-label--light input-label--large">
                {title}
            </label>
            {inputType === 'textarea' ? (
                <textarea 
                    className={textareaClass}
                    style={{ height: inputHeight }}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                />
            ) : (
                <input 
                    className={inputClass}
                    style={{ height: inputHeight }}
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

