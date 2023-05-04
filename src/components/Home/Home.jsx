import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data => console.log(data))
        .catch(error=>console.log(error))
    },[])
    const {user} = useContext(AuthContext);
    return (
        <div className='container'>
            <h1 className='home'>This home User: {user && <span>{user.displayName}</span>}</h1>
            
        </div>
    );
};

export default Home;