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



// [
//   {
//     "name": "Vegetable Pulao",
//     "image": "https://i.ibb.co/vegetable-pulao.jpg",
//     "quantity": "3 plates",
//     "pickupLocation": "45 Green Road, Farmgate, Dhaka",
//     "expiredDate": "2025-08-22T13:00",
//     "notes": "Served with salad and raita. Please bring a container.",
//     "donor": {
//       "name": "Ayesha Khan",
//       "email": "ayesha.khan@example.com",
//       "image": "https://i.pravatar.cc/100?img=25"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Beef Curry",
//     "image": "https://i.ibb.co/beef-curry.jpg",
//     "quantity": "2 bowls",
//     "pickupLocation": "House 10, Road 5, Banani, Dhaka",
//     "expiredDate": "2025-08-22T19:30",
//     "notes": "Medium spicy, cooked with mustard oil.",
//     "donor": {
//       "name": "Rahim Uddin",
//       "email": "rahim.uddin@example.com",
//       "image": "https://i.pravatar.cc/100?img=31"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Grilled Fish",
//     "image": "https://i.ibb.co/grilled-fish.jpg",
//     "quantity": "4 pieces",
//     "pickupLocation": "Chittagong University Campus, Gate 2",
//     "expiredDate": "2025-08-22T15:45",
//     "notes": "Fresh tilapia, grilled with lemon and herbs.",
//     "donor": {
//       "name": "Sadia Hossain",
//       "email": "sadia.hossain@example.com",
//       "image": "https://i.pravatar.cc/100?img=45"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Chicken Kebab",
//     "image": "https://i.ibb.co/chicken-kebab.jpg",
//     "quantity": "10 sticks",
//     "pickupLocation": "Dhanmondi Lake, near Rabindra Sorobor",
//     "expiredDate": "2025-08-21T21:00",
//     "notes": "Perfect with chutney. Please bring foil or box.",
//     "donor": {
//       "name": "Imran Ali",
//       "email": "imran.ali@example.com",
//       "image": "https://i.pravatar.cc/100?img=56"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Mutton Biryani",
//     "image": "https://i.ibb.co/mutton-biryani.jpg",
//     "quantity": "6 plates",
//     "pickupLocation": "Sector 7, Uttara, Dhaka",
//     "expiredDate": "2025-08-22T20:00",
//     "notes": "Rich flavor with basmati rice.",
//     "donor": {
//       "name": "Nasrin Akter",
//       "email": "nasrin.akter@example.com",
//       "image": "https://i.pravatar.cc/100?img=68"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Homemade Bread",
//     "image": "https://i.ibb.co/homemade-bread.jpg",
//     "quantity": "5 loaves",
//     "pickupLocation": "Khulna New Market, Gate 3",
//     "expiredDate": "2025-08-22T10:00",
//     "notes": "Freshly baked, soft and fluffy.",
//     "donor": {
//       "name": "Karim Hossain",
//       "email": "karim.hossain@example.com",
//       "image": "https://i.pravatar.cc/100?img=78"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Egg Fried Rice",
//     "image": "https://i.ibb.co/egg-fried-rice.jpg",
//     "quantity": "7 plates",
//     "pickupLocation": "Sylhet Railway Station, Platform 1",
//     "expiredDate": "2025-08-22T17:30",
//     "notes": "With vegetables, non-spicy, suitable for kids.",
//     "donor": {
//       "name": "Mahin Chowdhury",
//       "email": "mahin.chowdhury@example.com",
//       "image": "https://i.pravatar.cc/100?img=84"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Dal with Roti",
//     "image": "https://i.ibb.co/dal-roti.jpg",
//     "quantity": "12 sets",
//     "pickupLocation": "Rajshahi Medical College Hospital Gate",
//     "expiredDate": "2025-08-21T23:00",
//     "notes": "Comfort food, perfect for quick meals.",
//     "donor": {
//       "name": "Faria Jannat",
//       "email": "faria.jannat@example.com",
//       "image": "https://i.pravatar.cc/100?img=90"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Fruit Salad",
//     "image": "https://i.ibb.co/fruit-salad.jpg",
//     "quantity": "8 bowls",
//     "pickupLocation": "Barisal Sadar Road, Opposite Dutch Bangla Bank",
//     "expiredDate": "2025-08-22T12:15",
//     "notes": "Includes apples, bananas, papaya, and honey.",
//     "donor": {
//       "name": "Tanvir Hasan",
//       "email": "tanvir.hasan@example.com",
//       "image": "https://i.pravatar.cc/100?img=95"
//     },
//     "status": "available"
//   },
//   {
//     "name": "Chicken Pasta",
//     "image": "https://i.ibb.co/chicken-pasta.jpg",
//     "quantity": "5 boxes",
//     "pickupLocation": "Mirpur 10 Circle, near bus stand",
//     "expiredDate": "2025-08-22T18:00",
//     "notes": "Creamy white sauce pasta with grilled chicken.",
//     "donor": {
//       "name": "Jubair Rahman",
//       "email": "jubair.rahman@example.com",
//       "image": "https://i.pravatar.cc/100?img=102"
//     },
//     "status": "available"
//   }
// ]

