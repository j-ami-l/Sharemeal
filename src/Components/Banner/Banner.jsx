import React from 'react';
import g_1 from '../../assets/b_1.jpg';
import g_2 from '../../assets/b_2.jpg'; 
import g_3 from '../../assets/b_3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=''>
            <div className="my-12">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="rounded-lg overflow-hidden"
                >
                    <SwiperSlide>
                        <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] bg-green-200">
                            <img
                                src={g_1}
                                alt="Share Food"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10 bg-black/60 text-white p-6 md:p-10 rounded max-w-xl text-center">
                                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                                    Share Your Extra Meals 🍲
                                </h1>
                                <p className="text-sm md:text-lg leading-relaxed">
                                    Don’t let good food go to waste. Share your leftover meals with people nearby who need them.
                                </p>
                                <Link to="/addfood">
                                    <button className="mt-4 cursor-pointer px-6 py-2 bg-[#f8bc15]  rounded font-semibold shadow-md transition">
                                        Share Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] bg-lime-300">
                            <img
                                src={g_2}
                                alt="Reduce Waste"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10 bg-black/60 text-white p-6 md:p-10 rounded max-w-xl text-center">
                                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                                    Together, Let’s End Food Waste 🌍
                                </h1>
                                <p className="text-sm md:text-lg leading-relaxed">
                                    Every shared plate makes a difference. Save food, save money, and save the environment.
                                </p>
                                <Link to="/availablefoods">
                                    <button className="mt-4 cursor-pointer px-6 py-2 bg-[#f8bc15] rounded font-semibold shadow-md transition">
                                        See Available Food
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] bg-emerald-300">
                            <img
                                src={g_3}
                                alt="Request Food"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10 bg-black/60 text-white p-6 md:p-10 rounded max-w-xl text-center">
                                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                                    Need a Meal? We’ve Got You 🤝
                                </h1>
                                <p className="text-sm md:text-lg leading-relaxed">
                                    Browse available food shared by kind people in your community and request what you need.
                                </p>
                                <Link to="/availablefoods">
                                    <button className="mt-4 cursor-pointer px-6 py-2 bg-[#f8bc15] rounded font-semibold shadow-md transition">
                                        Request Food
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
