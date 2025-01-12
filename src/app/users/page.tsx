import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UserListContainer from "../../components/users/UserListContainer";

const Users: React.FC = () => {
    return (
        <>
        <Breadcrumb pageName="Users" mainPage={"User management"} />
        <UserListContainer />
        </>
    );
};

export default Users;
