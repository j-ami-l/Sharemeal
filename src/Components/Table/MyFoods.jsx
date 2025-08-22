import React, { use, useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import MyFoodsTable from './MyFoodsTable';
import Loading from '../Loading';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyFoods = ({ myfoodsPromise }) => {
    const api = useAxiosSecure()
    const [myFoods, setMyFoods] = useState(null)
    useEffect(() => {
        myfoodsPromise
            .then(data => {
                setMyFoods(data)
            })
    }, [myfoodsPromise])

    if (!myFoods) return <Loading></Loading>

    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            color: "black",
            background: "white",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                api.delete(`/fooddlt/${id}`)
                    .then(() => {
                        const newMyFoods = myFoods.filter(p => p._id !== id)
                        setMyFoods(newMyFoods)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "The food has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='my-15 mx-auto w-11/12 px-4'>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full bg-secondary-content    text-left custom-table">
                    <Thead className="bg-gray-100">
                        <Tr className=" text-sm text-gray-700 uppercase tracking-wide">
                            <Th className="p-3 ">Image</Th>
                            <Th className="p-3">Food Name</Th>
                            <Th className="p-3">Quantity</Th>
                            <Th className="p-3">PickUpPoint</Th>
                            <Th className="p-3">Expiry Date</Th>
                            <Th className="p-3 text-center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {myFoods?.map((Singlefood) => (
                            <MyFoodsTable key={Singlefood._id}
                                handleDelete={handleDelete}
                                Singlefood={Singlefood}></MyFoodsTable>
                        ))}
                    </Tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyFoods;