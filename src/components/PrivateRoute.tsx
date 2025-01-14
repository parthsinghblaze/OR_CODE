import React, {useEffect, useState} from 'react';
import Loader from "@/components/common/Loader";
import axiosInstance from "../utils/axiosInstance";
import { usePathname } from "next/navigation";


const publicRoute = [
    '/auth/signin'
]

function PrivateRoute({ children }) {
    const pathname = usePathname();

    console.log("Current route:", pathname);

    const [loading, setLoading] = useState<boolean>(true);
    const [isLogin, setIsLogin] = useState(false)
    async function validateToken() {
        setLoading(true)
        try {
            const data = await axiosInstance.post('/auth/validate-admin');
            if(data.status === 200) {
                setLoading(false);
                setIsLogin(true)
            }
        } catch (e) {
            setLoading(false);
            setIsLogin(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        validateToken()
        // setTimeout(() => setLoading(false), 1000);
    }, []);

    if(loading) {
        return <Loader/>
    }

    console.log("publicRoute.includes(pathname)", publicRoute.includes(pathname))

    if(isLogin || publicRoute.includes(pathname)) {
        return (
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
                {children}
            </div>
        );
    }
}

export default PrivateRoute;