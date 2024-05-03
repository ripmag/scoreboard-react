import React from "react";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                head
            </header>

            <Outlet />
            <footer>
                footer
            </footer>
        </>

    );
}