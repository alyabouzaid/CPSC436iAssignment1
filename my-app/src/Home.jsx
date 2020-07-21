import React, {useState,useEffect} from 'react';

const Home = (props) => {
    const [name,setName] = useState ('there');

    useEffect(()=>{
        fetch('htpp:/localhost:9000/users/1')
        .then(res => res.text())
        .then(res => {
            const user = JSON.parse(res);
            if (user) setName(user.firstNmae)
        })

        .catch(err => err)


    } ,[] );

return <h1> Hello {name}</h1>
}

export default Home;