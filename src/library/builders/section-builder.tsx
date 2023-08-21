import { Section } from '@lib/types';
import { ControlBuilder } from '.';

interface SectionBuilderProps {
    section: Section;
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({ section }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section?.controls.map((control, index) => (
                <ControlBuilder key={index} control={control} />
            ))}
        </div>
    );
};

export default SectionBuilder;
