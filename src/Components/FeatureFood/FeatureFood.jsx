import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router'; // fixed import
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const FeatureFood = () => {
  const api = useAxiosSecure();

  const { data: featuredFoods = [], isFetching, isError, error } = useQuery({
    queryKey: ['featuredpost'],
    queryFn: async () => {
      const res = await api.get(`/featuredfoods`);
      return res.data;
    },
  });

  if (isFetching) return <p className="text-center text-gray-500">Loading featured foods...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        🍴 Featured Foods
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredFoods.map((food) => (
          <div
            key={food._id}
            className="relative h-72 shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={food.foodImageUrl}
              alt={food.foodName}
              className="object-cover w-full h-full"
            />

            <div
              className="absolute inset-0"
              style={{ backgroundColor: '#00000080' }}
            ></div>

            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-white drop-shadow-md">
                  {food.foodName}
                </h2>
                <p className="mt-2 text-gray-100 text-sm">
                  📍 {food.pickupLocation}
                </p>
                <p className="mt-1 text-gray-100 text-sm">
                  🍽 {food.foodquantity}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-[10px] md:text-sm">
                  Featured Item
                </span>
                <Link to={`/availablefood/${food._id}`}>
                  <button className="btn btn-sm bg-white text-black hover:bg-gray-200 text-[10px] border-none shadow-md">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-5'>
        <Link to={'/availablefoods'}><button className='cursor-pointer px-6 py-2 bg-[#f8bc15]  rounded font-semibold shadow-md transition text-white'>All Available Foods</button></Link>
      </div>
    </div>
  );
};

export default FeatureFood;
