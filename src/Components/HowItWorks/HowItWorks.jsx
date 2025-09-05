import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-accent-content/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-orange-400">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">List Surplus Food</h3>
                        <p className="text-gray-600">Share details of your surplus food including quantity, location, and expiration date.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-accent-content/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-orange-400">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Connect with Recipients</h3>
                        <p className="text-gray-600">People in your community can view available food and make requests.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-accent-content/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-orange-400">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Arrange Pickup</h3>
                        <p className="text-gray-600">Coordinate a convenient time and location for food pickup.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;