import { Control } from '@lib/types';
import { logger } from '@lib/utils';
import React from 'react';
import ControlTypeMap from './control-type-map';

interface ControlBuilderProps {
    control: Control;
}

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control }) => {
    logger.info('Rendering the control builder');
    const ControlComponent = ControlTypeMap[control.type];

    return <ControlComponent key={control.id} control={control} />;
};

export default ControlBuilder;
