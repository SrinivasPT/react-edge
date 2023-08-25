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

    /**
     * Have all the control spacing done here rather than teh control itself
     */
    return (
        <div className="w-1/3 pe-4 pb-3">
            <ControlComponent key={control.id} control={control} />
        </div>
    );
};

export default ControlBuilder;
