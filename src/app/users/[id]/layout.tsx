import React from 'react';
import DefaultLayout from "../../../components/Layouts/DefaultLayout";

function Layout({ children }) {
    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    );
}

export default Layout;
