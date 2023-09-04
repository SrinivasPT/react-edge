import { useFormConfig } from '@lib/hooks';
import useFormControlFormat from '@lib/hooks/use-form-control-format';
import { CardLayout } from '@lib/layout';
import { ControlBuilder } from '.';

interface SectionBuilderProps {
    formId: string;
    sectionId: string;
    parentKey?: string;
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({ formId, sectionId, parentKey }) => {
    const sectionConfig = useFormConfig().getSectionConfig(formId, sectionId);
    const { getWidthClass } = useFormControlFormat();

    return (
        <CardLayout title={sectionConfig?.title}>
            <div className="flex flex-wrap w-full">
                {sectionConfig?.controls.map((control, index) => {
                    try {
                        return (
                            <div key={index} className={`${getWidthClass(control.width ?? 'full')}`}>
                                <ControlBuilder control={control} parentKey={parentKey ?? `${sectionId}`} />
                            </div>
                        );
                    } catch (error) {
                        console.error(`Error rendering control with index ${index}:`, error);
                        return <label key={index}>Error displaying control</label>;
                    }
                })}
            </div>
        </CardLayout>
    );
};

export default SectionBuilder;
