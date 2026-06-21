import { useState , useEffect } from "react";

function User(){

    const [user , setUser] = useState(null)
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => setUser(data))
    } , [])

    if(user === null) {
    return <p>Loading...</p>
}
    return(
        <div>
            <h1>user data</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User