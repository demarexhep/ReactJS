import React from 'react'

export function Userlist(props) {
    return (
        <div>
            {props.users.length > 1 ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((data, i) => {

                            return (
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                : <h2>Loading</h2>
            }
        </div>
    )
}