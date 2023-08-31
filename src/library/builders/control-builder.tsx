import useFormControlFormat from '@lib/hooks/use-form-control-format';
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
    const { getWidthClass } = useFormControlFormat();

    if (!ControlComponent) {
        return <div>Error: Unknown control type {control.type}</div>;
    }

    const renderControl = () => {
        try {
            return <ControlComponent key={control.id} control={control} />;
        } catch (error) {
            console.error(`Error rendering control with id ${control.id}:`, error);
            return <label>Error displaying control</label>;
        }
    };

    /**
     * Have all the control spacing done here rather than the control itself
     */
    return <div className={`${getWidthClass('sm')} pe-4 pb-3`}>{renderControl()}</div>;
};

export default ControlBuilder;
