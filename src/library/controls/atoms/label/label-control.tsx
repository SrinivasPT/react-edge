import { Control } from '@lib/types';

const LabelControl: React.FC<{ control: Control }> = ({ control }) => {
    return <label className={control.className}>{control.label}</label>;
};

export default LabelControl;
