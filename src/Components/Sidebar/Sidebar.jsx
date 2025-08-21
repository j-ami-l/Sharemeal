import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu + Close icons
import { IoMdClose } from "react-icons/io";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            <div
                className={`fixed top-0  left-0 h-full lg:min-h-screen w-64 bg-gray-800 text-white transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:w-64`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <h1 className="text-lg font-bold">MyLogo</h1>
                </div>
                <nav className="p-4 flex flex-col gap-4">
                    <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
                        Home
                    </a>
                    <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
                        About
                    </a>
                    <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
                        Services
                    </a>
                    <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
                        Contact
                    </a>
                </nav>
            </div>


            <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-800 text-white flex justify-between items-center p-4 z-50">
                <h1 className="text-lg font-bold">MyLogo</h1>
                {!isOpen && <button className="text-2xl" onClick={() => setIsOpen(true)}>
                    <FiMenu />
                </button>}
                {isOpen && <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    <IoMdClose />
                </button>}
            </div>
        </div>
    );
};

export default Sidebar;
