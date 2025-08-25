import React, { use, useState } from "react";
import { AuthContext } from "../../PRovider/AuthProvider";
import { MdFastfood, MdOutlineImage, MdOutlineLocationOn } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaStickyNote } from "react-icons/fa";
import axios from "axios";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";

const AddFood = () => {
    const { user } = use(AuthContext);
    const [showAlert, setShowAlert] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const postTime = new Date();
        const form = e.target;
        const formData = new FormData(form);
        const Post = Object.fromEntries(formData.entries());
        Post.donor = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL
        }


        axios.post('http://localhost:5000/addfood', Post)
            .then(res => {
                console.log(res.data);
                form.reset();
                setShowAlert(true);
            })
            .catch(err => {
                console.log(err);

            })




        const newPost = { ...Post, postTime };
        console.log(newPost);
    };

    return (
        <div className="max-w-2xl mx-auto mt-20 px-8">
            <div className="card bg-white shadow-xl border border-gray-200">
                <div className="bg-[#f8bc15] p-6 rounded-t-xl text-white">
                    <h2 className="text-2xl font-bold"> Share Your Food</h2>
                    <p className="text-sm opacity-90">Give a meal, spread happiness </p>
                </div>

                <div className="card-body bg-base-100 rounded-b-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="avatar">
                            <div className="w-12 rounded-full border-2 border-[#f8bc15]">
                                <img src={user.photoURL} alt="User" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg">{user.displayName}</h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
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

                        <div className="relative">
                            <MdOutlineImage className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="url"
                                name="foodImageUrl"
                                placeholder="Food Image URL"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>

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

                        <button
                            type="submit"
                            className="btn w-full bg-orange-400 hover:bg-orange-600 text-white text-lg"
                        >
                            Add Food
                        </button>
                    </form>
                </div>
            </div>
            <CustomAlert
                show={showAlert}
                onClose={() => setShowAlert(false)}
                type="success"
                title="Food Uploaded 🎉"
                message="Your post was uploaded successfully!"
            >

            </CustomAlert>
        </div>
    );
};

export default AddFood;

