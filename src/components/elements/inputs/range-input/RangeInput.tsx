import './RangeInput.scss';

interface RangeInputProps {
    placeholderFrom: string;
    placeholderTo: string;
}

function RangeInput(props: RangeInputProps) {
    const { placeholderFrom, placeholderTo } = props;

    return (
        <div className="range-input">
            <input 
                type="number" 
                placeholder={placeholderFrom} 
                className="range-input__field"
            />
            <input 
                type="number" 
                placeholder={placeholderTo} 
                className="range-input__field"
            />
        </div>
    );
}

export default RangeInput;
