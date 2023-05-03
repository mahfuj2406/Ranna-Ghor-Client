import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='container'>
            <h1 className='home'>This home User: {user && <span>{user.displayName}</span>}</h1>
            
        </div>
    );
};

export default Home;