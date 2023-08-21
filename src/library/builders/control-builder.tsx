import { Control } from '@lib/types';
import React from 'react';
import ControlTypeMap from './control-type-map';

interface ControlBuilderProps {
    control: Control;
}

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control }) => {
    const ControlComponent = ControlTypeMap[control.type];

    return <ControlComponent key={control.id} control={control} />;
};

export default ControlBuilder;
