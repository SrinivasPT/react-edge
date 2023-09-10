import { InputControl } from '@lib/controls';
import { ControlBuilderProps } from '@lib/types';
import InputTypeMap from '../input-control/input-types-map';

const DateControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    return (
        <>
            <label className="w-full">{control.label}</label>
            <InputControl control={control} parentKey={parentKey} type={InputTypeMap[control.controlTypeCode]} />
        </>
    );
};

export default DateControl;
