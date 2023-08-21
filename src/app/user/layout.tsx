import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-white mx-auto max-w-6xl p-8">{children}</div>;
};

export default Layout;
