import React, { use, useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import MyFoodsTable from './MyFoodsTable';
import Loading from '../Loading';

const MyFoods = ({ myfoodsPromise }) => {
    const [myFoods, setMyFoods] = useState(null)
    useEffect(() => {
        myfoodsPromise
            .then(data => {
                setMyFoods(data)
            })
    }, [myfoodsPromise])

    if(!myFoods) return <Loading></Loading>
    
    const handleDelete = (id) => {}

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