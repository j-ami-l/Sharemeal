import React from 'react';
import { useLoaderData } from 'react-router';
import FoodRequestModal from '../../Components/CustomModal/FoodRequestModal';

const FoodDetails = () => {
  const food = useLoaderData();
  
  
  const {
    donor,
    expiredDate,
    foodImageUrl,
    foodName,
    foodquantity,
    notes,
    pickupLocation,
    status,
  } = food;


  const formattedDate = new Date(expiredDate).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });


  return (
    <div className="max-w-md px-2 mx-auto my-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

        <img
          src={foodImageUrl}
          alt={foodName}
          className="w-full h-60 object-cover"
        />

        <div className="p-5 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{foodName}</h2>

          <p className="text-gray-600">
            <span className="font-medium">Quantity:</span> {foodquantity}
          </p>
          <p
            className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
              status === 'available'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {status}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Pickup Location:</span> {pickupLocation}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Expires On:</span> {formattedDate}
          </p>

          {notes && (
            <p className="text-gray-600">
              <span className="font-medium">Notes:</span> {notes}
            </p>
          )}

          <div className="flex items-center gap-3 mt-4">
            <img
              src={donor?.image}
              alt={donor?.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-medium text-gray-800">{donor?.name}</p>
              <p className="text-sm text-gray-500">{donor?.email}</p>
            </div>
          </div>
          
          <FoodRequestModal food={food}></FoodRequestModal>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
