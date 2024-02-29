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
            dropdownItems: [
                {
                    name: 'Submenu',
                    path: '/submenu'
                },
                {
                    name: 'Submenu',
                    path: '/submenu'
                }, 
                {
                    name: 'Submenu',
                    path: '/submenu'
                }, 
                {
                    name: 'Submenu',
                    path: '/submenu'
                } 
            ]
        },
        {
            name: 'Fasion Designs',
            path: '/projects',
            icon: <FaCheck />,
            dropdown: false,
        },
        {
            name: 'Gift Cards Items',
            path: '/projects',
            icon: <FaCheckDouble />,
            dropdown: true,
            dropdownItems: [
                {
                    name: 'Submenu',
                    path: '/submenu'
                },
                {
                    name: 'Submenu',
                    path: '/submenu'
                }, 
                {
                    name: 'Submenu',
                    path: '/submenu'
                }, 
                {
                    name: 'Submenu',
                    path: '/submenu'
                } 
            ]
        },
        {
            name: 'About Us',
            path: '/projects',
            icon: <SiHelpscout />,
            dropdown: false,
        },
        {
            name: 'Contact Us',
            path: '/projects',
            icon: <FiPhoneCall />,
            dropdown: false,
        }
    ]

    return (
        <div className="flex justify-start items-start px-10">
            <div className="min-h-screen bg-white text-gray-900 shadow shadow-gray-100">
                <ul>
                    {
                        items.map((item, index) => (
                            <Link href={item.path} key={index} className="relative group">
                                <li className="flex justify-between items-center hover:text-red-500 py-3 px-6 text-sm">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xs">{item.icon}</span>
                                        <h3 className="">{item.name}</h3>
                                    </div>
                                    {
                                        item.dropdown === true && <FaAngleRight className="ml-2" />
                                    }
                                </li>
                                {
                                    (item.dropdown === true) && <div className="invisible group-hover:visible absolute left-[197px] bg-white text-black top-0 p-6 flex flex-col gap-3 shadow">
                                        {
                                            item.dropdownItems?.map((it,i) => (
                                                <Link href={it.path} key={i} className="">{it.name}</Link>
                                            ))
                                        }
                                    </div>
                                }
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