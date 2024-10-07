import React from 'react';

const CircularProgress = ({ percent }) => {
    const radius = 40; // This is the base radius
    const strokeWidth = 10; // This is the base stroke width
    const circumference = 2 * Math.PI * radius; // Circumference formula

    const progressOffset = circumference - (percent / 100) * circumference; // Calculate offset based on percentage

    return (
        <svg
            viewBox="0 0 120 120"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        >
            {/* Background Circle */}
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="transparent"
                className="text-gray-700"
            />

            {/* Progress Circle */}
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                className="text-[#20C997] transition-all duration-300"
            />
        </svg>
    );
};

export default CircularProgress;
