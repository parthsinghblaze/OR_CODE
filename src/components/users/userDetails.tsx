"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDetails} from "../../redux/slice/userSlice";
import axiosInstance from "../../utils/axiosInstance";

function UserDetails({ userId }) {

    const dispatch = useDispatch()
    const [qrCode, setQrCode] = useState(null);

    const { userDetails, userDetailsLoading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUserDetails({ userId }))
    }, [userId])

    async function generateQRCode() {
        try {
            const response = await axiosInstance.get(`user/generate-qr-code/${userId}`)
            setQrCode(response?.data?.qrCode)
        } catch (e) {

        }
    }

    if (userDetailsLoading) {
        return <h1>Loading</h1>
    }

    return (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="relative z-20 h-35 md:h-65">
                <Image
                    src={"/images/cover/cover-01.png"}
                    alt="profile cover"
                    className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                    width={970}
                    height={260}
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                />
            </div>
            <div className="px-4 pb-6 text-center xl:pb-11.5">
                <div className="mt-4">
                    <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                        {userDetails?.name}
                    </h3>
                    <p className="font-medium">{userDetails?.email}</p>
                </div>
            </div>
            <div className={'flex flex-col items-center justify-center pb-4'}>
                <button
                    className="flex justify-center rounded rounded-lg border border-stroke bg-indigo-400 text-white px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    onClick={generateQRCode}
                >
                    Generate QR
                </button>
                {
                    qrCode && <img src={qrCode} alt="QR Code" />
                }
            </div>
            <div>

            </div>
        </div>
    );
}

export default UserDetails;
