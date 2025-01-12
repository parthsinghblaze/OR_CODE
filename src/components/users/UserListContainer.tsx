'use client';

import React, {useEffect} from 'react';
import TableOne from "../Tables/TableOne";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/slice/userSlice";
import Image from "next/image";

function UserListContainer(props) {

    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className={"max-w-full"}>
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Sr no
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Name
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Email
                            </h5>
                        </div>
                        <div className="hidden p-2.5 text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Is Verify
                            </h5>
                        </div>
                    </div>

                    {users.map((item, key) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-5 ${
                                key === users.length - 1
                                    ? ""
                                    : "border-b border-stroke dark:border-strokedark"
                            }`}
                            key={key}
                        >
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{key + 1}</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{item.name}</p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-meta-3">{item.email}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="text-black dark:text-white">{item?.is_verify ? "Yes" : "No"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserListContainer;