import React, { useState, useRef, use } from "react";
import { AuthContext } from "../../PRovider/AuthProvider";

const CustomModal = ({ food }) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const { user } = use(AuthContext);

    const {
        _id,
        donor,
        expiredDate,
        foodImageUrl,
        foodName,
        foodquantity,
        notes,
        pickupLocation,
        status,
    } = food;

    const handleSubmitUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const requestData = Object.fromEntries(formData.entries());
        requestData.requestDate = new Date;
        requestData.FoodId = food._id;
    
        console.log("Request Data:", requestData);


        setIsOpen(false);
    };

    return (
        <div>
            {/* Open Modal Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="mt-6 w-full bg-accent-content cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
                Request
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/50">
                    <div
                        className="relative shadow-2xl bg-white p-6 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                        ref={modalRef}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-[10px] right-[10px] bg-transparent border-0 text-2xl cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>

                        <form onSubmit={handleSubmitUpdate} className="space-y-4">
                            {/* Food Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Food Name
                                </label>
                                <input
                                    type="text"
                                    name="foodName"
                                    value={foodName}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* Food Image */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Food Image
                                </label>
                                <img
                                    src={foodImageUrl}
                                    alt={foodName}
                                    className="w-32 h-32 object-cover rounded-md border"
                                />
                            </div>

                            {/* Donator Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Donator Email
                                </label>
                                <input
                                    type="text"
                                    name="donorEmail"
                                    value={donor.email}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* Donator Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Donator Name
                                </label>
                                <input
                                    type="text"
                                    name="donorName"
                                    value={donor.name}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* User Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="text"
                                    name="userEmail"
                                    value={user?.email}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* Request Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Request Date
                                </label>
                                <input
                                    type="text"
                                    name="requestDate"
                                    value={new Date().toLocaleString()}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* Pickup Location */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Pickup Location
                                </label>
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    value={pickupLocation}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* Expire Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Expire Date
                                </label>
                                <input
                                    type="text"
                                    name="expireDate"
                                    value={new Date(expiredDate).toLocaleString()}
                                    readOnly
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                                />
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Additional Notes
                                </label>
                                <textarea
                                    name="requestNotes"
                                    placeholder="Write something..."
                                    className="w-full border rounded-lg px-3 py-2"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CustomModal;
