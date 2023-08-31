const useFormControlFormat = () => {
    const getWidthClass = (width: string) => {
        const baseClasses = {
            default: 'w-full',
            sm: 'sm:w-full',
            md: 'md:w-full',
            lg: 'lg:w-full',
        };

        const widthMappings: any = {
            sm: { lg: 'lg:w-1/4', md: 'md:w-1/3', sm: 'sm:w-full' },
            md: { lg: 'lg:w-1/3', md: 'md:w-1/2', sm: 'sm:w-full' },
            lg: { lg: 'lg:w-1/2', md: 'md:w-full', sm: 'sm:w-full' },
        };

        const classes = widthMappings[width] || baseClasses;

        return `${classes.default} ${classes.sm} ${classes.md} ${classes.lg}`;
    };

    return { getWidthClass };
};

export default useFormControlFormat;
