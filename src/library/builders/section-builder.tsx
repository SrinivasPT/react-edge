import { useFormConfig } from '@lib/hooks';
import useFormControlFormat from '@lib/hooks/use-form-control-format';
import { LayoutBuilder } from '@lib/layout';
import { Section } from '@lib/types';
import { ControlBuilder } from '.';

interface SectionBuilderProps {
    formId: string;
    sectionId: string;
    parentKey?: string;
    dataKey?: string;
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({ formId, sectionId, parentKey, dataKey }) => {
    const sectionConfig = useFormConfig().getSectionConfig(formId, sectionId) as Section;
    const sectionDataKey = useFormConfig().getSectionDataKey(sectionConfig, parentKey as string);
    const { getWidthClass } = useFormControlFormat();

    const getOverrides = () => {
        let overrides = {};
        if (sectionConfig?.readonly === 'YES') overrides = { ...overrides, readonly: 'YES' };
        return overrides;
    };

    return (
        <LayoutBuilder section={sectionConfig as Section}>
            <div className="flex flex-wrap w-full">
                {sectionConfig?.controls.map((control, index) => {
                    try {
                        return (
                            <div key={index} className={`${getWidthClass(control)}`}>
                                <ControlBuilder control={{ ...control, ...getOverrides() }} parentKey={dataKey ?? sectionDataKey} />
                            </div>
                        );
                    } catch (error) {
                        console.error(`Error rendering control with index ${index}:`, error);
                        return <label key={index}>Error displaying control</label>;
                    }
                })}
            </div>
        </LayoutBuilder>
    );
};

export default SectionBuilder;
