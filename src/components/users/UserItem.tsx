"use client";

import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Link from "next/link";

function UserItem({ item = {}, index }) {
    console.log("item", item);
    const [isVerify, setIsVerify] = useState(item?.is_verify);
    const [loading, setLoading] = useState(false)
    async function toggleVerify() {
        setLoading(true)
        try {
            const response = await axiosInstance.post(`/user/verify/${item?._id}`)
            if(response) {
                setIsVerify(!isVerify)
                console.log(response?.data)
            }
        } catch (e) {
            alert("NOT ABLE TO ALERT!")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div
            className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark`}
        >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{index + 1}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <Link href={`/users/${item._id}`} className={"text-black underline dark:text-white"}>
                    {item.name}
                </Link>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.email}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
                {
                    loading ? (
                        <button className={'bg-indigo-400 rounded text-white p-3 radius'}>
                            Loading...
                        </button>
                    ) : (
                        <button className={`${isVerify ? 'bg-indigo-400' : 'bg-danger'} rounded text-white p-3 radius`}
                                onClick={toggleVerify}>
                            {isVerify ? 'Verified account' : 'Not Verified'}
                        </button>
                    )
                }

            </div>
        </div>
    );
}

export default UserItem;
