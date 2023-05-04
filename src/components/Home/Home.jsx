import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { AuthContext } from '../../providers/AuthProviders';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, []);


    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                        <div className='p-4'>
                            <p className="mb-5  text-justify text-white">Welcome to my food recipe website! I'm a passionate cook who creates delicious recipes using fresh, high-quality ingredients. Whether you're a beginner or an experienced home cook, my easy-to-follow recipes will inspire you to get in the kitchen and start cooking. Thank you for visiting my website and enjoy the meals!</p>
                        </div>
                        <button className="btn btn-primary capitalize">Visit Our Recipes</button>
                    </div>
                </div>
            </div>
            <div className='min-w-screen mt-10'>
                <div className='container border mx-auto quality-section'>
                    <h1 className='md:text-5xl text-3xl text-center text white my-5'>Why We Are Best?</h1>
                    <div className='grid md:grid-cols-4 gap-4 bg-white'>

                        <div className="card w-96 bg-base-100 shadow-xl mx-auto  px-10 pt-10 rounded-full bg-white h-60 w-60">
                            <svg className="svg-inline--fa fa-truck h-20 text-amber-800" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"></path></svg>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">INSTANT DELIVERY</h2>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto  px-10 pt-10 rounded-full bg-white h-60 w-60">
                        <svg className="svg-inline--fa fa-check-double fa-light text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-double" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"></path></svg>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Aways Fresh</h2>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto  px-10 pt-10 rounded-full bg-white h-60 w-60">
                        <svg className="svg-inline--fa fa-check-double fa-light text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-double" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"></path></svg>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Superior Quality</h2>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl mx-auto  px-10 pt-10 rounded-full bg-white h-60 w-60">
                        <svg className="svg-inline--fa fa-headset text-cyan-700" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"></path></svg>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">24x7 Support</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
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