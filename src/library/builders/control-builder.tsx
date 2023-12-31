import { useFormConfig } from '@lib/hooks';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';
import React from 'react';
import ControlTypeMap from './control-type-map';

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.debug('Rendering the control builder');

    const { getFullControlConfig } = useFormConfig();
    const controlConfig = getFullControlConfig(control);
    const ControlComponent = ControlTypeMap[controlConfig.controlTypeCode];

    if (!ControlComponent) {
        return <div>Error: Unknown control type for {control.masterId}</div>;
    }

    const renderControl = () => {
        try {
            return <ControlComponent key={controlConfig.id} control={controlConfig} parentKey={parentKey} />;
        } catch (error) {
            console.error(`Error rendering control with id ${control.id}:`, error);
            return <label>Error displaying control</label>;
        }
    };

    /**
     * Have all the control spacing done here rather than the control itself
     */
    return <div className={`w-full pe-3 pb-2`}>{renderControl()}</div>;
};

export default ControlBuilder;
