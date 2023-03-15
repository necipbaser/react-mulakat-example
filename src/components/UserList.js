import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Components
import UserItem from './UserItem'

function UserList(){
    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=5')
        setUsers(response.data.results)
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className="user-list">
            <ul>
                {
                    users.map((user,index)=>(
                        <li key={index} >
                            <UserItem user={user} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserList