import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='w-full p-5'>
            <div className="max-w-screen rounded overflow-hidden shadow-lg my-10 border">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black" >differences between uncontrolled and controlled components</div>
                    <p className="text-black text-base p-5">
                        <strong>Controlled Components</strong>
                        <br></br>Components that React fully controls are referred to as controlled components. Thus, whenever the state changes, React manages the state and updates the component.In a controlled component, the parent component has complete control over the component's behavior and state and passes down the component's state via props.
                        When you need to validate and modify user input before sending it to a server, controlled components are frequently used for forms and inputs.<br></br>
                        <strong>Uncontrolled Components</strong><br></br>
                        Components that are not controlled by React have the browser control their state. This indicates that React doesn't have direct access to the component's state because it is stored in the DOM.
                        In an uncontrolled component, the user's interactions with the component control the component's state. For instance, the user enters text in an input field, and the browser controls the input's status.
                        Uncontrolled components, such a button or a checkbox, are frequently used for straightforward components that don't need to manage complex state.
                    </p>
                </div>
            </div>
            <div className="max-w-screen rounded overflow-hidden shadow-lg my-10 border">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black" >How to validate React props using PropTypes</div>
                    <p className="text-black text-base p-5">
                        React provides a PropTypes library that use to validate the props that are passed to my components. Here's how to use PropTypes to validate props:
                            <li>npm install prop-types</li>
                            <li>Import the PropTypes library</li>
                            <li>Define the expected props and their data types using the propTypes object</li>
                            <li>Use isRequired to mark a prop as required</li>
                    </p>
                </div>
            </div>
            <div className="max-w-screen rounded overflow-hidden shadow-lg my-10 border">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black" >Differences between nodejs and express js:</div>
                    <p className="text-black text-base p-5">
                        <strong>Node.js</strong>
                        <br></br>A JavaScript runtime called Node.js enables programmers to execute JavaScript on the server-side.
                        The event-driven, non-blocking I/O mechanism provided by Node.js makes it effective and scalable for developing server-side applications.
                        A built-in module system in Node.js enables programmers to create their applications using modules and packages from the NPM.
                        Node.js is useful for creating a variety of server-side applications since it has APIs for working with file systems, network protocols, and other system-level activities.<br></br>
                        <strong>Express.js</strong><br></br>
                        Express.js is a Node.js web application framework that offers a selection of features and tools for developing web apps.
                        Express.js offers a straightforward, basic API with features like routing, middleware, and templating for creating web applications.
                        Because Express.js is adaptable and modular, programmers can combine it with other Node.js modules and packages to create sophisticated web applications.
                        The comprehensive error-handling system offered by Express.js is simple to use, which facilitates web application debugging and troubleshooting.
                    </p>
                </div>
            </div>
            <div className="max-w-screen rounded overflow-hidden shadow-lg my-10 border">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black" >What is a custom hook, and why will I create a custom hook?</div>
                    <p className="text-black text-base p-5">
                        A custom hook in React is a JavaScript function with the prefix use that enables you to separate off common stateful behavior from components and save it in reusable functions.
                        With the use of custom hooks, you can share functionality between components, eliminate repetition, and make code more modular and reusable. You can abstract away complicated activity and give a straightforward, declarative interface to components that require that capability by developing a custom hook.<br></br>
                        <li>Reusing stateful logic between components</li>
                        <li>
                            bstracting away complex behavior
                        </li>
                        <li>
                            Improving code organization
                        </li>
                        <li>
                            Making code more testable
                        </li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;