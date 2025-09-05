import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

const ImpactStats = () => {
    return (
        <section className="py-12 my-10 bg-[#d99f00]/80 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2">
                            <CountUp end={500} duration={3} />+
                        </div>
                        <p className="text-blue-100">Meals Shared</p>
                    </div>

                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2">
                            <CountUp end={120} duration={3} />+
                        </div>
                        <p className="text-blue-100">Active Donors</p>
                    </div>

                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2">
                            <CountUp end={15} duration={3} />+
                        </div>
                        <p className="text-blue-100">Communities Served</p>
                    </div>

                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2">
                            <CountUp end={1200} duration={3} />+
                        </div>
                        <p className="text-blue-100">Pounds Saved</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link to={'/login'}>
                        <button className="bg-white text-black cursor-pointer font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                            Join Our Community
                        </button></Link>
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
