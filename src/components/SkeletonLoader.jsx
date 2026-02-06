import React from 'react';

const SkeletonLoader = ({ className = "", type = "text", lines = 1 }) => {
    return (
        <div className={`${className} animate-pulse relative overflow-hidden bg-white/5 rounded-md`}>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Content Mockup based on Type */}
            {type === "text" && (
                <div className="flex flex-col gap-2 p-1">
                    {Array.from({ length: lines }).map((_, i) => (
                        <div key={i} className="h-4 bg-white/10 rounded w-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    ))}
                </div>
            )}

            {type === "image" && (
                <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-white/5">
                    <div className="w-12 h-12 rounded-full bg-white/10"></div>
                </div>
            )}

            {type === "card" && (
                <div className="flex flex-col gap-4 p-4 h-full">
                    <div className="w-full aspect-video bg-white/10 rounded-lg"></div>
                    <div className="h-6 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-4 w-full bg-white/10 rounded"></div>
                    <div className="h-4 w-5/6 bg-white/10 rounded"></div>
                </div>
            )}

        </div>
    );
};

export default SkeletonLoader;
