import { useAppSelector } from '@store/hooks';

const useFormControlFormat = () => {
    const controlMaster = useAppSelector((state: any) => state.controlMaster.queries['AllControls(null)']?.data);

    const getWidthClass = (masterId: string) => {
        const width = controlMaster?.find((control: any) => control.masterId === masterId)?.width ?? 'default';
        const baseClasses = {
            default: 'w-full',
            sm: 'sm:w-full',
            md: 'md:w-full',
            lg: 'lg:w-full',
        };

        const widthMappings: any = {
            SM: { lg: 'lg:w-1/4', md: 'md:w-1/3', sm: 'sm:w-full' },
            MD: { lg: 'lg:w-1/3', md: 'md:w-1/2', sm: 'sm:w-full' },
            LG: { lg: 'lg:w-1/2', md: 'md:w-full', sm: 'sm:w-full' },
        };

        const classes = widthMappings[width] || baseClasses;

        return `${classes.default} ${classes.sm} ${classes.md} ${classes.lg}`;
    };

    return { getWidthClass };
};

export default useFormControlFormat;
