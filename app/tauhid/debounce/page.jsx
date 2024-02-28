"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDebounce } from "../../../components/hooks/useDebounce";

const page = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const debounceSearch = useDebounce(search);

    async function getUser() {
        setLoading(true);
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setLoading(false);
            return response.data;

        }
        catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    const asyncFn = async () => {
        const data = await getUser();

        if (debounceSearch) {
            const searchuser = users.filter(user => user.name.toUpperCase().includes(debounceSearch.toUpperCase()));
            setUsers(searchuser)
        }
        else {
            setUsers(data);
        }
    }

    useEffect(() => {
        asyncFn();

    }, [debounceSearch])
    return (
        <div className='m-10'>
            <section className='flex flex-col items-center gap-10'>
                <div>
                    <input onChange={(e) => setSearch(e.target.value)} className='text-black px-4 py-2 outline-none rounded-xl' type="text" />
                </div>
                <div>
                    {
                        loading ? <div>Loading...</div>
                            :
                            <div>
                                {
                                    users?.map(user => (
                                        <div>
                                            <h1>{user?.name}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default page;