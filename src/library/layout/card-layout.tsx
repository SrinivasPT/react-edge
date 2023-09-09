import { isNil } from '@lib/utils/functions/general-functions';

const CardLayout = (props: any) => {
    if (isNil(props.title)) return <>{props.children}</>;

    return (
        <div className="block rounded-lg bg-white hover:shadow-md transition-shadow duration-300 ease-in-out w-full border mb-3">
            <div className="border-b border-gray-200 ps-6 pt-2 bg-zinc-50">
                <h3 className="mb-2 text-md font-semibold text-gray-700 uppercase ">{props.title}</h3>
            </div>
            <div className="p-6">{props.children}</div>
        </div>
    );
};

export default CardLayout;
