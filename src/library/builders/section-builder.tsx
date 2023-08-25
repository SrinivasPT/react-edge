import { useFormConfig } from '@lib/hooks';
import useFormControlFormat from '@lib/hooks/use-form-control-format';
import { CardLayout } from '@lib/layout';
import { ControlBuilder } from '.';

interface SectionBuilderProps {
    formId: string;
    sectionId: string;
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({ formId, sectionId }) => {
    const { getSectionConfig } = useFormConfig();
    const sectionConfig = getSectionConfig(formId, sectionId);
    const { getWidthClass } = useFormControlFormat();

    return (
        <CardLayout title={sectionConfig?.title}>
            <div className="flex flex-wrap w-full">
                {sectionConfig?.controls.map((control, index) => (
                    <ControlBuilder key={index} control={control} />
                ))}
            </div>
        </CardLayout>
    );
};

export default SectionBuilder;
