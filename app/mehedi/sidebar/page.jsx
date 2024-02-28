import React from "react";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";

const Sidebar = () => {
    const items = [
        {
            name: 'All Projects',
            path: '/projects',
            icon: <GrProjects />,
            dropdown: true,
        },
        {
            name: 'Fasion Designs',
            path: '/projects',
            icon: <FaCheck />
        },
        {
            name: 'Gift Cards Items',
            path: '/projects',
            icon: <FaCheckDouble />,
            dropdown: true,
        },
        {
            name: 'About Us',
            path: '/projects',
            icon: <SiHelpscout />,
        },
        {
            name: 'Contact Us',
            path: '/projects',
            icon: <FiPhoneCall />,
        }
    ]

    return (
        <div className="flex justify-start items-start">
            <div className="min-h-screen bg-teal-800">
                <ul>
                    {
                        items.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li className="flex justify-between items-center hover:bg-blue-200 hover:text-blue-800 py-3 px-5 text-sm">
                                    <div className="flex gap-2 items-center">
                                    <span className="text-xs">{item.icon}</span>
                                    <h3 className="">{item.name}</h3>
                                    </div>
                                    {
                                        item.dropdown === true && <FaAngleRight className="ml-2" />
                                    }
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <main className="p-10">children</main>
        </div>
    );
};

export default Sidebar;