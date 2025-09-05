import React from 'react';
import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "List Surplus Food",
        description: "Share details of your surplus food including quantity, location, and expiration date.",
        icon: "🍲"
    },
    {
        id: 2,
        title: "Connect with Recipients",
        description: "People in your community can view available food and make requests.",
        icon: "🤝"
    },
    {
        id: 3,
        title: "Arrange Pickup",
        description: "Coordinate a convenient time and location for food pickup.",
        icon: "📦"
    },
];

const HowItWorks = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            className="text-center p-6 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                        >
                            <div className="w-16 h-16 bg-accent-content/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
