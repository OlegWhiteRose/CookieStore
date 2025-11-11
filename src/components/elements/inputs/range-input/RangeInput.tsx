import './RangeInput.scss';

interface RangeInputProps {
    placeholderFrom: string;
    placeholderTo: string;
    valueFrom?: number;
    valueTo?: number;
    onChangeFrom?: (value: number | undefined) => void;
    onChangeTo?: (value: number | undefined) => void;
}

function RangeInput(props: RangeInputProps) {
    const { placeholderFrom, placeholderTo, valueFrom, valueTo, onChangeFrom, onChangeTo } = props;

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChangeFrom?.(value ? Number(value) : undefined);
    };

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChangeTo?.(value ? Number(value) : undefined);
    };

    return (
        <div className="range-input">
            <input 
                type="number" 
                placeholder={placeholderFrom} 
                className="range-input__field"
                value={valueFrom !== undefined ? valueFrom : ''}
                onChange={handleFromChange}
            />
            <input 
                type="number" 
                placeholder={placeholderTo} 
                className="range-input__field"
                value={valueTo !== undefined ? valueTo : ''}
                onChange={handleToChange}
            />
        </div>
    );
}

export default RangeInput;
