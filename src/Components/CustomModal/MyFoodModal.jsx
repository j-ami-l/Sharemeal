import React, { useState, useRef, use } from "react";
import { AuthContext } from "../../PRovider/AuthProvider";
import { MdFastfood, MdOutlineImage, MdOutlineLocationOn } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaPencil } from "react-icons/fa6";

const MyFoodModal = ({ food, handleUpdates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const { user } = use(AuthContext);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const UpdateFood = Object.fromEntries(formData.entries());

    UpdateFood.donor = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    };

    
  };

  return (
    <div>
      <div
        className="cursor-pointer border-2 p-2 rounded-[50%]"
        onClick={() => setIsOpen(true)}
      >
        <FaPencil size={18} className="text-accent-content" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-[100] bg-black/40">
          <div
            className="relative shadow-2xl bg-white rounded-2xl w-[95%] md:w-[600px] max-h-[90vh] overflow-y-auto"
            ref={modalRef}
          >
            <div className="bg-[#f8bc15] p-6 rounded-t-2xl text-white">
              <p className="text-sm opacity-90">Edit your food donation details</p>
            </div>

            <button
              className="absolute top-4 right-5 text-2xl cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="avatar">
                  <div className="w-12 rounded-full border-2 border-orange-500">
                    <img src={user.photoURL} alt="User" />
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-lg">{user.displayName}</h1>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <form onSubmit={handleSubmitUpdate} className="space-y-4">
                <div className="relative">
                  <MdFastfood className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    name="foodName"
                    placeholder="Food Name"
                    defaultValue={food.foodName}
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <MdOutlineImage className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="url"
                    name="foodImageUrl"
                    placeholder="Food Image URL"
                    defaultValue={food.foodImageUrl}
                    className="input input-bordered w-full pl-10"
                  />
                </div>

                <div className="relative">
                  <BiDish className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    name="foodquantity"
                    placeholder="Quantity (e.g. 5 plates)"
                    defaultValue={food.foodquantity}
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <MdOutlineLocationOn className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="Pickup Location"
                    defaultValue={food.pickupLocation}
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text ml-1 text-gray-600">Expiry Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="expiredDate"
                    defaultValue={food.expiredDate?.slice(0, 16)}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <input type="hidden" name="notes" defaultValue={food.notes || ""} />
                <input type="hidden" name="status" defaultValue={food.status || "available"} />

                <button
                  type="submit"
                  className="btn w-full bg-orange-400 hover:bg-orange-600 text-white text-lg"
                >
                   Update Food
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFoodModal;
