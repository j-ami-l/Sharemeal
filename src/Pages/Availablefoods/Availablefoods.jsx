import React from 'react';
import { useLoaderData } from 'react-router';
import AvailablefoodCard from '../../Components/AvailablefoodCard/AvailablefoodCard';

const Availablefoods = () => {
    const allpost = useLoaderData();

    return (
        <div className="mx-auto w-11/12 my-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Welcome! Here Are the Available Foods</h1>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allpost?.map(post => (
                        <AvailablefoodCard
                            post={post}
                            key={post._id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Availablefoods;
