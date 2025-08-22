import React, { useState } from 'react';
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const MyRequestTable = ({ Singlefood }) => {
    const [food, setFood] = useState(Singlefood);



    // format date human-friendly
    const formattedDate = new Date(food.expireDate).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    const reqDate = new Date(food.requestDate).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    return (
        <Tr key={food._id} className="border-t bg-white border-accent-content text-sm text-gray-800">

            <Td className="p-3  font-medium">{food.donorName}</Td>

            <Td className="p-3 text-gray-600">{formattedDate}</Td>

            <Td className="p-3 ">{food.pickupLocation}</Td>

            <Td className="p-3 ">{reqDate}</Td>
        </Tr>
    );
};

export default MyRequestTable;
