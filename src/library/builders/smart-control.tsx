'use client';

import { useFormConfig } from '@lib/hooks';
import { Control, SmartControlProps } from '@lib/types';
import { ControlBuilder } from '.';

const SmartControl: React.FC<SmartControlProps> = ({ formId, configKey, parentKey }) => {
    const control: Control = useFormConfig().getControlConfigByKey(formId, configKey);
    return <ControlBuilder key={configKey} control={control} parentKey={parentKey} />;
};

export default SmartControl;
