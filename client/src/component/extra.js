import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import Contact from './Contact';
function ContactList() {
    const [contacts, setContact] = useState([])
    const [check, setCheck] = useState(false);
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])


    const getUsersData = async () => {
        try {
            const response = await axios.get(`/api/users`);
            setContact(response.data);


        } catch (error) {
            console.log(error.message);
        }

    }
    useEffect(async () => {
        try {
            await getUsersData();
            if (search === "") {
                setFilteredData(contacts)
            }

        }
        catch (error) {
            console.log(error.message);
        }
    }, [check, filteredData]);

    // deleted User
    const deltedUser = async (_id) => {
        await axios.delete(`/api/users/+${_id}`);
        getUsersData();
    }

    const contactList = filteredData.length == 0 ? (<h4 style={{ position: "absolute", left: "40%" }}>No Data Found</h4>) : filteredData.map((contact) => {
        return (
            <Contact key={contact._id} contact={contact} check={check} deltedUser={deltedUser} />
        )
    })
    const filterData = (e) => {
        setSearch(e.target.value);
        const result = contacts.filter((element) => {
            return element.name.includes(search) || element.phone_no.toString().includes(search) || element.email.includes(search)
        })
        setFilteredData(result)
    }


    const deleteAll = async () => {
        await axios.delete(`/api/users`)
    }
    return (
        <>



            <div className="container mt-5 rounded-top p-2 overflow-auto" style={{ boxShadow: "0px 0px 10px grey" }} >
                {check && <button className="btn mb-1 text-white" style={{ backgroundColor: "teal", border: "none", boxShadow: "0px 0px 8px black" }} onClick={deleteAll}>Delete All</button>}
                <input type="text" className="mb-2" placeholder="Search Here" value={search} onChange={filterData} style={{ float: "right", borderStyle: "dashed", borderRadius: "10px", textAlign: "center", fontFamily: "monospace" }} />
                <table className="table">

                    <thead style={{ borderRadius: "10px" }}>
                        <tr className="bg-danger text-white rounded mt-2" style={{ boxShadow: "0px 0px 10px grey" }} >
                            <th scope="col">
                                <input type="checkbox" onClick={() => {
                                    setCheck(!check)

                                }} className="mr-1" />
                                All
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactList;