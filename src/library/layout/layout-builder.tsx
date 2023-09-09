import { CardLayout, SearchBarLayout } from '.';

const LayoutBuilder = (props: any) => {
    switch (props.layoutTypeCode) {
        case 'CARD':
            return <CardLayout title={props.title}>{props.children}</CardLayout>;
        case 'SEARCH_BAR':
            return <SearchBarLayout title={props.title}>{props.children}</SearchBarLayout>;
        default:
            return <CardLayout title={props.title}>{props.children}</CardLayout>;
    }
};

export default LayoutBuilder;
