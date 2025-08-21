import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu + Close icons
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = <>
        <NavLink to={'/'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">Home</li></NavLink>
        <NavLink to={'/availablefoods'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">Available Foods</li></NavLink>
        <NavLink to={'/addfood'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">Add Food</li></NavLink>
        <NavLink to={'/managemyfood'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">My Foods</li></NavLink>
        <NavLink to={'/myrequestfood'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">My Food Request</li></NavLink>
        <NavLink to={'/login'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">Login</li></NavLink>
        <NavLink to={'/signup'}><li className="hover:bg-[#e78534] hover:text-white rounded px-3 py-2">Signup</li></NavLink>

    </>

    return (
        <div className="flex">
            <div
                className={`fixed top-0 z-[1000] left-0 h-full lg:min-h-screen w-64 bg-secondary text-gray-800 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:w-64`}
            >
                <div className="p-4 flex justify-between items-center border-b border-[#e78534]">
                    <img className="w-30 lg:w-50 " src={logo} alt="" />
                </div>
                <ul className="p-4 flex flex-col gap-4">
                    {links}
                </ul>
            </div>


            <div className="md:hidden fixed top-0 left-0 right-0 bg-secondary text-gray-800 flex justify-between items-center px-5 py-4 z-50">
                <img className="w-35" src={logo} alt="" />
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
