import { useFormConfig } from '@lib/hooks';
import useFormControlFormat from '@lib/hooks/use-form-control-format';
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
        <div className="flex flex-wrap w-full p-2 border">
            {sectionConfig?.controls.map((control, index) => (
                <div key={index} className="box-border p-2 md:w-1/3">
                    <ControlBuilder control={control} />
                </div>
            ))}
        </div>
    );
};

export default SectionBuilder;
