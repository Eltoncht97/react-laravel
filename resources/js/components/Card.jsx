import React from "react";

export const Card = () => {
    return (
        <div className="max-w-sm mt-5 ml-5 rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full"
                src="./images/windows.jpg"
                alt="iMac wallpaper"
            />
            <div className="py-6 px-4">
                <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur quaerat maiores autem laboriosam dolor, quia
                    iusto vitae id dignissimos doloremque cupiditate rerum
                    repellendus? Et, excepturi labore facere id velit illo.
                </p>
            </div>
            <div className="py-6 px-4">
                <span className="inline-block bg-gray-200 text-sm rounded-full px-3 py-1 font-semibold mr-2">
                    #photography1
                </span>
                <span className="inline-block bg-gray-200 text-sm rounded-full px-3 py-1 font-semibold mr-2">
                    #travel
                </span>
                <span className="inline-block bg-gray-200 text-sm rounded-full px-3 py-1 font-semibold">
                    #winter
                </span>
            </div>
        </div>
    );
};
