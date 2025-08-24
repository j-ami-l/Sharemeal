import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AvailablefoodCard from '../../Components/AvailablefoodCard/AvailablefoodCard';

const Availablefoods = () => {
  const allpost = useLoaderData();
  const [search, setSearch] = useState("");


  const filteredPosts = allpost?.filter((post) =>
    post.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto w-11/12 my-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Welcome! Here Are the Available Foods
      </h1>

      <div>
        <label className="input flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            className="grow"
            placeholder="Search foods..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {filteredPosts?.length > 0 ? (
          filteredPosts.map((post) => (
            <AvailablefoodCard post={post} key={post._id} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No foods found
          </p>
        )}
      </div>
    </div>
  );
};

export default Availablefoods;
