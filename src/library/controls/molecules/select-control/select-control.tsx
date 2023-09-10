import { Domain } from '@domain/types';
import { ControlBuilderProps } from '@lib/types';
import { logger } from '@lib/utils';
import { useAppSelector } from '@store/hooks';

const SelectControl: React.FC<ControlBuilderProps> = ({ control, parentKey }) => {
    logger.debug(`Rendering InputControl for ${control.id} - Domain Code: ${control.domainCode}`);
    const domain = useAppSelector((state: any) => state.domain.queries['domain(null)']?.data);
    const options = domain[control.domainCode as string] as Domain[];

    return (
        <>
            <label className="w-full">{control.label}</label>
            <select id={control.id} className={`border p-2 w-full`} defaultValue="--select--">
                {options?.map((option, index) => (
                    <option key={index} value={option.code}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectControl;
