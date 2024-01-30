import React from "react";
import AppRouter from "../AppRouter";
import Navbar from "./Navbar/Navbar";
import HideNavbar from './HideNavbar/HideNavbar'
import Footer from "./Footer/Footer";


const App = () => {
    return <>
        <HideNavbar>
        <Navbar />
        </HideNavbar>
        <AppRouter />
        <HideNavbar>
        <Footer />
        </HideNavbar>
    </>
}

export default App