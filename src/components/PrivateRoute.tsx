import React, {useEffect, useState} from 'react';
import Loader from "@/components/common/Loader";

function PrivateRoute({ children }) {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if(loading) {
        return <Loader/>
    }

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
                {children}
        </div>
    );
}

export default PrivateRoute;