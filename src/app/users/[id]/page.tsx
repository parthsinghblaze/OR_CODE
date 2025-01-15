import React from 'react';
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import UserDetails from "../../../components/users/userDetails";

function UserDetail({ params }) {
    console.log("params", params)

    const { id: userId } = params

    return (
        <div className={'mx-auto max-w-242.5'}>
            <Breadcrumb pageName="Users" mainPage={"Users"} />
            <UserDetails userId={userId} />
        </div>
    );
}

export default UserDetail;
