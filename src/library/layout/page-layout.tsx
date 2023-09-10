import { ButtonPallet } from '@lib/controls';

const PageLayout = (props: any) => {
    return (
        <div className="w-full min-h-screen bg-gray-100 px-8">
            <div className="flex-grow bg-white p-4 shadow-lg">
                <ButtonPallet title={props.title} buttons={props.buttons} />
                <div className="px-6">
                    <main>{props.children}</main>
                </div>
            </div>
        </div>
    );
};

export default PageLayout;
