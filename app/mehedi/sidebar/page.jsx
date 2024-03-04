import React from "react";
import Link from "next/link";
import {items} from '../../../components/data/sidebardata.js'
import { FaAngleRight } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="flex justify-start items-start px-10">
            <div className="min-h-screen bg-white text-gray-900 shadow shadow-gray-100">
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
                                    (item.dropdown === true) && <div className="invisible group-hover:visible absolute left-[197px] bg-white text-black top-0 p-6 flex flex-col gap-3 shadow">
                                        {
                                            item.dropdownItems?.map((it,i) => (
                                                <Link href={it.path} key={i} className="">{it.name}</Link>
                                            ))
                                        }
                                    </div>
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <main className="p-10">children</main>
        </div>
    );
};

export default Sidebar;