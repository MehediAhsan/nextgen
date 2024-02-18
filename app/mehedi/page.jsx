'use client'
import React, { useEffect, useState } from 'react';

const MehediPage = () => {
    const tableItems = [
        {
            name: "Liam James",
            email: "liamjames@example.com",
            position: "Software engineer",
            salary: "$100K"
        },
        {
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            position: "Product designer",
            salary: "$90K"
        },
        {
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            position: "Front-end developer",
            salary: "$80K"
        },
        {
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            position: "Laravel engineer",
            salary: "$120K"
        },
        {
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            position: "Open source manager",
            salary: "$75K"
        },
    ]

    const [areAllChecked, setAllChecked] = useState(false)
    let [checkboxItems, setCheckboxItem] = useState({})
    let [array, setArray] = useState([]);

    // set or unset all checkbox items
    const handleCheckboxItems = () => {
        setAllChecked(!areAllChecked)
        tableItems.forEach((item, idx) => {
            if(!areAllChecked){
                setArray(tableItems)
            }
            else{
                setArray([])
            }
            checkboxItems[`checkbox${idx}`] = !areAllChecked
            setCheckboxItem({ ...checkboxItems })
        })
    }

    // Update checked value
    const handleCheckboxChange = (e, idx, item) => {
        setAllChecked(false)
        setCheckboxItem({ ...checkboxItems, [`checkbox${idx}`]: e.target.checked })
    }

    useEffect(() => {
        // Set properties with false value
        tableItems.forEach((item, idx) => {
            checkboxItems[`checkbox${idx}`] = false
            setCheckboxItem({ ...checkboxItems })
        })
    }, [])


    useEffect(() => {
        // Check if all checkbox items are checked and update setAllChecked state
        const checkboxItemsVal = Object.values(checkboxItems)
        const checkedItems = checkboxItemsVal.filter(item => item == true)
        console.log(checkedItems);
        if (checkedItems.length == tableItems.length) setAllChecked(true)

        // setArray(tableItems)

    }, [checkboxItems])


    
    console.log(array);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-200 font-medium border-b">
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
                                Username
                            </th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Salary</th>

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
                                                onChange={(e) => handleCheckboxChange(e, idx, item)}
                                            />
                                            <label
                                                htmlFor={`checkbox-${idx}`}
                                                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                            >
                                            </label>
                                        </div>
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MehediPage;