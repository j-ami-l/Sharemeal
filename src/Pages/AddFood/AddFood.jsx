import React, { use } from "react";
import { AuthContext } from "../../PRovider/AuthProvider";
import { MdFastfood, MdOutlineImage, MdOutlineLocationOn } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaStickyNote } from "react-icons/fa";

const AddFood = () => {
    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const postTime = new Date();
        const form = e.target;
        const formData = new FormData(form);
        const Post = Object.fromEntries(formData.entries());

        const newPost = { ...Post, postTime };
        console.log(newPost);
    };

    return (
        <div className="max-w-2xl mx-auto mt-20 px-8">
            <div className="card shadow-xl border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-t-xl text-white">
                    <h2 className="text-2xl font-bold">🍲 Share Your Food</h2>
                    <p className="text-sm opacity-90">Give a meal, spread happiness ❤️</p>
                </div>

                {/* Form */}
                <div className="card-body bg-base-100 rounded-b-xl">
                    {/* Donor Info */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="avatar">
                            <div className="w-12 rounded-full border-2 border-orange-500">
                                <img src={user.photoURL} alt="User" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg">{user.displayName}</h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Food Name */}
                        <div className="relative">
                            <MdFastfood className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="text"
                                name="foodName"
                                placeholder="Food Name"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>

                        {/* Food Image */}
                        <div className="relative">
                            <MdOutlineImage className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="url"
                                name="foodImageUrl"
                                placeholder="Food Image URL"
                                className="input input-bordered w-full pl-10"
                            />
                        </div>

                        {/* Quantity */}
                        <div className="relative">
                            <BiDish className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="text"
                                name="foodquantity"
                                placeholder="Quantity (e.g. 5 plates)"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>

                        {/* Pickup Location */}
                        <div className="relative">
                            <MdOutlineLocationOn className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="text"
                                name="pickupLocation"
                                placeholder="Pickup Location"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>

                        {/* Expired Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-600">Expiry Date</span>
                            </label>
                            <input
                                type="datetime-local"
                                name="expiredDate"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        

                        <input type="hidden" name="notes" defaultValue="" />
                        <input type="hidden" name="status" defaultValue="available" />

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn w-full bg-orange-400 hover:bg-orange-600 text-white text-lg"
                        >
                            ➕ Add Food
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;
