import { ButtonPallet } from '@lib/controls';
import MenuComponent from './menu';

const PageLayout = (props: any) => {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="sticky top-0 z-50 w-full py-3 bg-gray-900 text-white">
                <MenuComponent />
            </div>
            <ButtonPallet title={props.title} buttons={props.buttons} />
            <div className="flex justify-center pt-2 flex-grow">
                <main className="w-5/6 bg-white px-6 pt-6 shadow-md">{props.children}</main>
            </div>
        </div>
    );
};

export default PageLayout;
