import React, { useState } from 'react';

const DynamicTable = () => {
    const tableItems = [
        {
            id: 1,
            name: "Liam James",
            email: "liamjames@example.com",
            position: "Software engineer",
            salary: "100K"
        },
        {
            id: 2,
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            position: "Product designer",
            salary: "90K"
        },
        {
            id: 3,
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            position: "Front-end developer",
            salary: "80K"
        },
        {
            id: 4,
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            position: "Laravel engineer",
            salary: "120K"
        },
        {
            id: 5,
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            position: "Open source manager",
            salary: "75K"
        },
    ];

    const [checkedIds, setCheckedIds] = useState([]);

    const handleCheckboxChange = (id) => {
        if (checkedIds.includes(id)) {
            setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
        } else {
            setCheckedIds([...checkedIds, id]);
        }
    };

    const handleCheckboxAllChange = () => {
        if (checkedIds.length === tableItems.length) {
            setCheckedIds([]);
        } else {
            setCheckedIds(tableItems.map((item) => item.id));
        }
    };

    console.log(checkedIds);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border border-red-500 overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-200 font-medium border-b italic">
                        <tr>
                            <th className="py-3 px-6 flex items-center gap-x-4">
                                <input
                                    type="checkbox"
                                    id="checkbox-all-items"
                                    className="peer hidden"
                                    checked={checkedIds.length === tableItems.length}
                                    onChange={handleCheckboxAllChange}
                                />
                                <label
                                    htmlFor="checkbox-all-items"
                                    className="relative flex w-5 h-5 bg-white peer-checked:bg-yellow-600 rounded-md border ring-offset-2 ring-yellow-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                ></label>
                                Id
                            </th>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Salary</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-400 divide-y">
                        {tableItems.map((item) => (
                            <tr key={item.id} className={`${checkedIds.includes(item.id) ? 'bg-blue-100' : ''}`}>
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${item.id}`}
                                        name={`checkbox-${item.id}`}
                                        className="peer hidden"
                                        checked={checkedIds.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                    <label
                                        htmlFor={`checkbox-${item.id}`}
                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-yellow-600 rounded-md border ring-offset-2 ring-yellow-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    ></label>
                                    {item.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DynamicTable;
