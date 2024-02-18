"use client"
import React, { useEffect, useState } from 'react';

const page = () => {
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
    const [areAllChecked, setAllChecked] = useState(false)
    let [checkboxItems, setCheckboxItem] = useState({})

    // set or unset all checkbox items
    const handleCheckboxItems = () => {
        setAllChecked(!areAllChecked);
        tableItems.forEach((item, idx) => {
            checkboxItems[`checkbox${idx}`] = !areAllChecked;
            setCheckboxItem({ ...checkboxItems });
        })
    }

    // Update checked value
    const handleCheckboxChange = (e, idx, id) => {
        setAllChecked(false);
        if (e.target.checked) {
            // console.log(true);
            arr.push(id);
        } else {
            // console.log(false);
            arr = arr.filter(item => item !== id);
        }
        setCheckboxItem({ ...checkboxItems, [`checkbox${idx}`]: e.target.checked });
    }
    
    useEffect(() => {
        // Set properties with false value
        tableItems.forEach((item, idx) => {
            checkboxItems[`checkbox${idx}`] = false;
            setCheckboxItem({ ...checkboxItems });
        })
    }, [])

    useEffect(() => {
        // Check if all checkbox items are checked and update setAllChecked state
        const checkboxItemsVal = Object.values(checkboxItems);
        const checkedItems = checkboxItemsVal.filter(item => item == true);
        if (checkedItems.length == tableItems.length) setAllChecked(true);
    }, [checkboxItems])

    return (
        <div>
            <h1>aha next js kije joss</h1>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">

                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6 flex items-center gap-x-4">
                                    <div>
                                        <input type="checkbox" id="checkbox-all-items" className="checkbox-item peer hidden"
                                            checked={areAllChecked}
                                            onChange={handleCheckboxItems}
                                        />
                                        <label
                                            htmlFor="checkbox-all-items"
                                            className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
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
                                    <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                                            <div>
                                                <input type="checkbox" id={`checkbox-${idx}`} name={`checkbox-${idx}`} className="checkbox-item peer hidden"
                                                    checked={checkboxItems[`checkbox${idx}`]}
                                                    onChange={(e) => handleCheckboxChange(e, idx, item.id)}
                                                />
                                                <label
                                                    htmlFor={`checkbox-${idx}`}
                                                    className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                                >
                                                </label>
                                            </div>
                                            {item.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                                        <td className="text-right px-6 whitespace-nowrap">
                                            <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Edit
                                            </a>
                                            <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;