import classNames from 'classnames';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import DashboardGrid from './DashboardGrid';
//import { HiMenuAlt3 } from 'react-icons/hi';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex">
            {/* Main content */}
            <div className={classNames("flex flex-col flex-1 transition-all duration-300", {
                "mr-0 md:mr-60": isSidebarOpen, // Adjust margin based on sidebar state
            })}>
                {/* Header */}
                <DashboardHeader toggleSidebar={toggleSidebar}/>

                {/* Grid content */}
                <div className="flex-1 min-h-0 overflow-auto">
                    <DashboardGrid />
                </div>
            </div>
            
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen}  className={`absolute right-0 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}/>
        </div>
    );
}
