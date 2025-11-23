import React from "react";
import Link from "next/link";
import {items} from '../../../components/data/sidebardata.js'
import { FaAngleRight } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="flex justify-start items-start">
            <div className="min-h-screen bg-gray-100 text-gray-900 shadow shadow-gray-100">
                <ul>
                    {
                        items?.map((item, index) => (
                            <li key={index} className="relative group">
                                <Link href={item.path} className="flex justify-between items-center hover:text-red-500 py-3 px-6 text-sm">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xs">{item.icon}</span>
                                        <h3 className="">{item.name}</h3>
                                    </div>
                                    {
                                        item.dropdown === true && <FaAngleRight className="ml-2" />
                                    }
                                </Link>
                                {
                                    (item.dropdown === true) && <div className="invisible group-hover:visible absolute left-[197px] bg-gray-100 top-0 px-8 py-4 flex flex-col gap-3 shadow text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0">
                                        {
                                            item.dropdownItems?.map((it,i) => (
                                                <Link href={it.path} key={i} className="text-black hover:text-red-500">{it.name}</Link>
                                            ))
                                        }
                                    </div>
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <main className="p-10 text-gray-400">dashboard content...</main>
        </div>
    );
};

export default Sidebar;