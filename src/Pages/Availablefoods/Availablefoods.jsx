import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import AvailablefoodCard from '../../Components/AvailablefoodCard/AvailablefoodCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';

const Availablefoods = () => {
  // const allpost = useLoaderData();
  const api = useAxiosSecure()
  const { user } = useContext(AuthContext)
  const [search, setSearch] = useState("");
  const [gridCol, setGridCol] = useState(3)
  const handleSearch = e => {
    e.preventDefault()
    const s = e.target.value;
    if (s) {
      setSearch(s)
      console.log(s);
      console.log(search);
    }
    if (!s) {
      setSearch("")
      refetch()
    }
  }


  const { data: allpost = [], isFetching, refetch, isError, error } = useQuery({
    queryKey: ['allpost', search],
    queryFn: async () => {
      if (!user) return []
      const res = await api.get(`/allfoodpost?search=${search}`)
      return res.data;
    },
    enabled: !!user
  })


  return (
    <div className="mx-auto w-11/12 my-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Welcome! Here Are the Available Foods
      </h1>

      <div className='flex gap-2 items-center'>
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
              type="text"
              className="grow"
              placeholder="Search foods..."
              onChange={handleSearch}
            />

            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>
        <div className="dropdown hidden lg:block">
          <div tabIndex={0} role="button" className="btn m-1">Column</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setGridCol(3)}><a>3</a></li>
            <li onClick={() => setGridCol(2)}><a>2</a></li>
          </ul>
        </div>
      </div>
      <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${gridCol === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} mt-6`}>
        {allpost?.length > 0 ? (
          allpost.map((post) => (
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
