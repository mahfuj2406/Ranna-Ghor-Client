import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { AuthContext } from '../../providers/AuthProviders';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data => setChefs(data))
        .catch(error=>console.log(error))
    },[]);

    
    const {user} = useContext(AuthContext);
    return (
        <div className='container'>
            <h1>jThis is the home</h1>
            <p>total data count : {chefs.length}</p>
            {
                chefs.map(chef => <Chefs 
                key={chef.id} 
                Chefs={chef}
                ></Chefs>
                )
            }
        </div>
    );
};

export default Home;