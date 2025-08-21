import React from 'react';

const AvailablefoodCard = ({ post }) => {
    const { donor, foodImageUrl, foodName, expiredDate } = post;

    // Format the expiry date to a readable format (e.g., "Aug 27, 2025, 1:06 AM")
    const formattedDate = new Date(expiredDate).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    return (
        <div className="relative h-72 shadow-md rounded-lg overflow-hidden">
            {/* Background Image */}
            <img
                src={foodImageUrl}
                alt={foodName}
                className="object-cover w-full h-full"
            />

            {/* Custom Dark Overlay */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: '#00000080' }}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold text-white drop-shadow-md">
                        {foodName}
                    </h2>
                    <div className="flex items-center mt-2 text-gray-100">
                        <img
                            src={donor.image}
                            alt={donor.name}
                            className="w-9 h-9 rounded-full border-2 border-white mr-3 shadow-md"
                        />
                        <span className="text-lg font-medium tracking-wide">
                            {donor.name}
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="text-white text-sm md:text-base">
                        Expires: {formattedDate}
                    </h4>
                    <button className="btn btn-sm bg-white text-black hover:bg-gray-200 text-sm border-none shadow-md">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailablefoodCard;
