import React from "react";
import banner from "../../../assets/images/R.jpg";
import Plan from "../PlanSection/Plan";

const Banner = () => {
    return (
        <div className="h-48 w-full bg-gray-700">
            <div className="flex items-center justify-center h-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Save big with our cheap car rental!</h1>
                    <p className="text-xl sm:text-2xl">Airport Pickup Or Nearest Pickup Center.{" "}
                        <a className="text-red-500">24 Hour</a>
                        {" "} Customer Support.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
