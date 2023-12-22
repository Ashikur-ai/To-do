import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </>
    );
};

export default MainLayout;