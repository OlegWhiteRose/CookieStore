import './FeedbackInput.scss';

interface FeedbackInputProps {
    title: string;
    inputHeight: string;
    inputType: 'textarea' | 'input';
}

function FeedbackInput(props: FeedbackInputProps) {
    const { title, inputHeight, inputType } = props;
    
    return (
        <div className="feedback-input">
            <span className="feedback-input__title">
                { title }
            </span>
            {inputType === 'textarea' ? (
            <textarea className="feedback-input__input" style={{ height: inputHeight, resize: 'none' }} >
            </textarea>
            ) : (
                <input className="feedback-input__input" style={{ height: inputHeight}} type="text" />
            )}
        </div>
    )
}

export default FeedbackInput;

