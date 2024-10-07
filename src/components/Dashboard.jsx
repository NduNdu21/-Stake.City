import classNames from 'classnames';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import DashboardGrid from './DashboardGrid';
//import { HiMenuAlt3 } from 'react-icons/hi';
import logo from "../logo7.svg"

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex">
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main content */}
            <div className={classNames("flex flex-col flex-1 transition-all duration-300", {
                "ml-0 md:ml-60": isSidebarOpen, // Adjust margin based on sidebar state
                "ml-0": !isSidebarOpen, // No margin if the sidebar is closed
            })}>
                {/* Header */}
                <DashboardHeader />

                {/* Grid content */}
                <div className="flex-1 min-h-0 overflow-auto">
                    <DashboardGrid />
                </div>
            </div>

            {/* Mobile hamburger menu */}
            <div className="fixed top-3 left-3 z-50 md:hidden">
                <button onClick={toggleSidebar}>
                    <img src={logo} alt='' className='w-10 h-10'/>
                </button>
            </div>
        </div>
    );
}
