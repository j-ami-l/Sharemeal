import React, { useState } from 'react';
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { MdDelete } from "react-icons/md";
import MyFoodModal from '../CustomModal/MyFoodModal';

const MyFoodsTable = ({ Singlefood, handleDelete ,refetch }) => {
    const [food, setFood] = useState(Singlefood);

    const handleUpdates = (data) => {
        if(data.modifiedCount === 1){
            refetch()
        }
        
    };

    

    // format date human-friendly
    const formattedDate = new Date(food.expiredDate).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });


    return (
        <Tr key={food._id} className="border-t bg-white border-accent-content text-sm text-gray-800">
            <Td className="p-3">
                <img
                    src={food.foodImageUrl}
                    alt={food.foodName}
                    className="w-35 h-20 object-cover rounded-md border border-accent-content"
                />
            </Td>

            <Td className="p-3  font-medium">{food.foodName}</Td>

            <Td className="p-3 ">{food.foodquantity}</Td>

            <Td className="p-3 ">{food.pickupLocation}</Td>

            <Td className="p-3 text-gray-600">{formattedDate}</Td>

            <Td className="p-3 text-gray-500">
                <div className="space-x-2 flex items-center">
                    <MyFoodModal handleUpdates={handleUpdates} food={food} />
                    <div
                        onClick={() => handleDelete(food._id)}
                        className="cursor-pointer  border-2 p-2 rounded-full"
                    >
                        <MdDelete size={18} className="text-accent-content" />
                    </div>
                </div>
            </Td>
        </Tr>
    );
};

export default MyFoodsTable;
