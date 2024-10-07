import React from "react";
import profileImage from '../imgs/avatar.svg';
import styles from "./Dashboard.module.css"
import CircularProgress from "./CircularProgress";
import token from "../imgs/bitcoin-2207.svg"
//import { useNavigate } from 'react-router-dom'


const DashboardGrid = () => {

    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-white min-h-screen ${styles.dashback} ${styles.starAnimation}`}>
            <div className="col-span-1 gap-4">
                {/*Profile column */}
                <ProfileSection />
                <TrophiesSection />
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-6">
                {/* Right Column */}
                <PointsSection />
                <LevelSection />
                <HistorySection />
                <TokensSection />
            </div>
        </div>
    )
}

const ProfileSection = () => {
    //const navigate = useNavigate();

    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] text-center ${styles.float} w-full`}>
            <span className="text-[#F0F3F5] text-xl font-bold">Profile</span>
            <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 mt-2"
            />

            <p className="text-[#F0F3F5] text-md">John Doe</p>
            <p className="text-[#F0F3F5] text-sm font-semibold">Email: email@address.com</p>
            <p className="text-[#F0F3F5] text-sm font-semibold">Phone number: +123456789</p>

            <button className="mt-4 px-4 py-2 bg-[#20C997] rounded-3xl text-white">
                Customise me
            </button>
        </div>
    )
}

const TrophiesSection = () => {
    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] mt-6 ${styles.float}`}>
            <span className="text-lg font-semibold">Trophies</span>
            <p></p>
        </div>
    )
}

const PointsSection = () => {
    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] ${styles.float}`}>
            <p className="text-lg font-semibold">Your Balance</p>
            <div className="flex items-center">
                <img src={token} alt="" className="w-12 h-12 p-1" />
                <span className="text-4xl font-bold text-[#20C997]">3456</span>
                <button className="mt-1 px-4 py-2 text-white bg-[#20C997]">
                    Spend Tokens
                </button>
            </div>
            <p className="font-semibold">Completed tasks</p>
            <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                    Complete a task <span className="text-[#20C997]">20</span>
                </li>
                <li className="flex justify-between">
                    Create a subtask <span className="text-[#20C997]">5</span>
                </li>
            </ul>
        </div>
    )
}

const LevelSection = () => {
    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] justify-items-center ${styles.float}`}>
            <span className="text-lg font-semibold">My Level</span>
            <p className="text-2xl font-bold">80</p>
            <CircularProgress percent={80}/>
        </div>
    )
}

/*const QuestSection = () => {
    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] ${styles.float}`}>
            <span className="text-lg font-semibold">Next Quests</span>
            <ul className="mt-4 space-y-2">
                <li className="flex justify-between">
                    Complete a task <span className="text-[#20C997]">20</span>
                </li>
                <li className="flex justify-between">
                    Create a subtask <span className="text-[#20C997]">5</span>
                </li>
            </ul>
        </div>
    )
}*/

const TokensSection = () => {
    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] ${styles.float}`}>
            <span className="text-xl font-bold">Leaderboard</span>
            <p className="text-md">This week</p>
        </div>
    )
}

const HistorySection = () => {
    return (
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md shadow-[#20C997] ${styles.float}`}>
            <span className="text-xl font-bold">History</span>
            <p className="text-lg font-semibold">Chart</p>
        </div>
    )
}

export default DashboardGrid