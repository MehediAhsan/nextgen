"use client"
import React from 'react';
import { useState } from 'react';

const table = () => {
    const tableItems = [
        {
            id: 1,
            name: "Liam James",
            age: 20,
            email: "liamjames@example.com",
            phone: "01300334455"
        },
        {
            id: 2,
            name: "Olivia Emma",
            age: 20,
            email: "oliviaemma@example.com",
            phone: "01300334455"
        },
        {
            id: 3,
            name: "William Benjamin",
            age: 20,
            email: "william.benjamin@example.com",
            phone: "01300334455"
        },
        {
            id: 4,
            name: "Henry Theodore",
            age: 20,
            email: "henrytheodore@example.com",
            phone: "01300334455"
        },
        {
            id: 5,
            name: "Amelia Elijah",
            age: 20,
            email: "amelia.elijah@example.com",
            phone: "01300334455"
        },
    ]

    let arr = new Array();
    let [selectedItems, setSelectedItems] = useState([])

    const handleSelectAll = () => {
        if (selectedItems.length !== tableItems.length) {
            tableItems.forEach(item => {
                arr.push(item.id);
                setSelectedItems(arr);
            })
        } else {
            setSelectedItems([])
        }

    }

    const handleSelect = (id) => {
        const checked = selectedItems.includes(id);
        if (checked) {
            setSelectedItems(selectedItems.filter(sid => sid !== id));
        }
        else {
            setSelectedItems([...selectedItems, id])
        }
    }
    return (
        <div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 bg-teal-500 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6 flex items-center gap-x-4">
                                <div>
                                    <input type="checkbox" id="checkbox-all-items" className="checkbox-item peer hidden"
                                        checked={selectedItems.length === tableItems.length}
                                        onChange={handleSelectAll}
                                    />
                                    <label
                                        htmlFor="checkbox-all-items"
                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-pink-500 rounded-md border ring-offset-2 ring-pink-500 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    >
                                    </label>
                                </div>
                                ID
                            </th>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Age</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">phone</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx} className="odd:bg-yellow-50 even:bg-teal-50">
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                                        <div>
                                            <input type="checkbox" id={`checkbox-${idx}`} name={`checkbox-${idx}`} className="checkbox-item peer hidden"
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => handleSelect(item.id)}
                                            />
                                            <label
                                                htmlFor={`checkbox-${idx}`}
                                                className="relative flex w-5 h-5 bg-white peer-checked:bg-pink-500 rounded-md border ring-offset-2 ring-pink-500 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                            >
                                            </label>
                                        </div>
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                                    {/* <td className="text-right px-6 whitespace-nowrap">
                                            <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Edit
                                            </a>
                                            <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Delete
                                            </button>
                                        </td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default table;