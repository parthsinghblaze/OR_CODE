"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import ReduxProvider from "../redux/ReduxProvider";
import {useSelector} from "react-redux";
import PrivateRoute from "../components/PrivateRoute";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        <ReduxProvider>
            <PrivateRoute children={children} />
        </ReduxProvider>
        </body>
        </html>
    );
}
