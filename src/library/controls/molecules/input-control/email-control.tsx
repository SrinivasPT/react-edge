import { InputControl } from '@lib/controls';
import { ControlBuilderProps } from '@lib/types';
import InputTypeMap from './input-types-map';

const EmailControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    return (
        <>
            <label className="w-full">{control.label}</label>
            <InputControl control={control} parentKey={parentKey} type={InputTypeMap[control.controlTypeCode]} />
        </>
    );
};

export default EmailControl;
