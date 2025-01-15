"use client";

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePathname, useRouter} from "next/navigation";
import axiosInstance from "../utils/axiosInstance";
import {signSuccess} from "../redux/slice/auth";
import Loader from "./common/Loader/index";


const publicRoute = [
    '/auth/signin',
    '/auth/signup'
];

function AuthProvider({ children }) {

    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    // const [login, setLogin] = useState(false);

    const { isLogin } = useSelector((state) => state.auth);

    console.log("isLogin", isLogin)

    async function validateToken() {
        try {
            const data = await axiosInstance.post("auth/validate-admin");
            if(data) {
                dispatch(signSuccess());
            }
        } catch (e) {
            router.push('/auth/signin')
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        console.log("RUNNING!");
        validateToken()
    }, [])


    function gotToLogin() {
        router.push('/sign-in')
    }

    if(loading) {
        return <Loader />
    }

    if(isLogin || publicRoute.includes(pathname)) {
        return children
    }

}

export default AuthProvider;
