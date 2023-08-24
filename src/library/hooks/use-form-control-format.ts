import _ from 'lodash';

const useFormControlFormat = () => {
    const getWidthClass = (width: string) => {
        const defaultWidths = { default: 'full', sm: 'full', md: '1/3', lg: '1/4' };
        const getDefaultWidth = (size: string) => _.get(defaultWidths, size, 'full');

        const defaultWidthClass = `w-${getDefaultWidth('default')}`;
        const smWidthClass = `sm:w-${getDefaultWidth('sm')}`;
        const mdWidthClass = `md:w-${getDefaultWidth('md')}`;
        const lgWidthClass = `lg:w-${getDefaultWidth('lg')}`;

        return `${defaultWidthClass} ${smWidthClass} ${mdWidthClass} ${lgWidthClass}`;
    };

    return { getWidthClass };
};

export default useFormControlFormat;
