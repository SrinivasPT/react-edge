import { useFormConfig } from '@lib/hooks';
import { ControlBuilder } from '.';

interface SectionBuilderProps {
    formId: string;
    sectionId: string;
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({ formId, sectionId }) => {
    const { getSectionConfig } = useFormConfig();
    const sectionConfig = getSectionConfig(formId, sectionId);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sectionConfig?.controls.map((control, index) => (
                <ControlBuilder key={index} control={control} />
            ))}
        </div>
    );
};

export default SectionBuilder;
