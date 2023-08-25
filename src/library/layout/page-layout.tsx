const PageLayout = (props: any) => {
    return (
        <div className="w-full min-h-screen bg-gray-100 px-8">
            <div className="flex-grow bg-white p-4 shadow-lg">
                <main>{props.children}</main>
                <div>I am here</div>
            </div>
        </div>
    );
};

export default PageLayout;
