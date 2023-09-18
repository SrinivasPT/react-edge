import { Section } from '@lib/types';
import { ReactNode } from 'react';
import { CardLayout, SearchBarLayout } from '.';

export interface LayoutBuilderProps {
    section: Section;
    children: ReactNode;
}

const LayoutBuilder: React.FC<LayoutBuilderProps> = ({ section, children }) => {
    // const { actions } = useContext(FormActionsContext);

    switch (section.layoutTypeCode) {
        case 'CARD':
            return <CardLayout section={section}>{children}</CardLayout>;
        case 'SEARCH_BAR':
            return <SearchBarLayout title={section.title}>{children}</SearchBarLayout>;
        default:
            return <CardLayout section={section}>{children}</CardLayout>;
    }
};

export default LayoutBuilder;
