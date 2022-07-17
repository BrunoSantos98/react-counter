import React, {useState, useEffect} from 'react'

import './Users.css'

const Users = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUser(data)
        })
    },[])

    return(
        <>
            <h1>Users</h1>
            {
                user.map(users =>{
                    return(
                        <>

                            <div className='separadores'>
                                <div className='micro-separadores'>
                                    <span>Nome:</span>
                                    <h6>{users.name}</h6>
                                </div>
                                <div className='micro-separadores'>
                                    <span>Id:</span>
                                    <h6>{users.id}</h6>
                                </div>
                                <div className='micro-separadores'>
                                    <span>Username:</span>
                                    <h6>{users.username}</h6>
                                </div>
                            </div>

                            <div className='separadores'>
                                <div className='micro-separadores'>
                                    <span>Empresa:</span>
                                    <h6>{users.company.name}</h6>
                                </div>
                                <div className='micro-separadores'>
                                    <span>Lema da Empresa:</span>
                                    <h6>{users.company.catchPhrase}</h6>
                                </div>
                            </div>

                            <div className='separadores'>
                                <div className='micro-separadores'>
                                    <span>Endereço:</span>
                                    <h6>Rua {users.address.street}, cidade de {users.address.city}</h6>
                                </div>
                                <div className='micro-separadores'>
                                    <span>Apartamento / nº:</span>
                                    <h6>{users.address.suite}</h6>
                                </div>
                                <div className='micro-separadores'>
                                    <span>Codigo Postal:</span>
                                    <h6>{users.address.zipcode}</h6>
                                </div>
                            </div>

                        </>
                    )
                })
            }
        </>
    )
}

export default Users