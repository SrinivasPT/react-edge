import { useFormConfig } from '@lib/hooks';
import { SectionBuilder } from '.';

export interface PageBuilderProps {
    formId: string;
}

const PageBuilder: React.FC<PageBuilderProps> = ({ formId }) => {
    const { getFormConfig } = useFormConfig();
    const formConfig = getFormConfig(formId);

    return (
        <>
            {formConfig?.sections.map((section, index) => (
                <SectionBuilder key={index} formId={formId} sectionId={section.id} parentKey="data" />
            ))}
        </>
    );
};

export default PageBuilder;
