'use client';

import React, {useEffect} from 'react';
import TableOne from "../Tables/TableOne";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/slice/userSlice";
import Image from "next/image";
import UserItem from "./UserItem";

function UserListContainer(props) {

    const dispatch = useDispatch();
    const {users, loading} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className={"max-w-full"}>
            <button className={'btn bg-indigo-400 p-2 text-white mb-4'} onClick={() => dispatch(fetchUsers())}>Refresh</button>
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

                    {
                        loading && <h1>Loading...</h1>
                    }

                    {!loading && users.length > 0 && users.map((item, index) => {
                        return <UserItem key={item?._id} item={item} index={index} />
                    })}

                    {
                        !loading && users.length === 0 &&  (
                            <h1>No users found</h1>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default UserListContainer;
