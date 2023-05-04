import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <FiAlertTriangle className="text-6xl text-red-500 mb-4" />
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1683215396~exp=1683215996~hmac=4e30bb04ef6fa5cd173c9a107418a4152448ef520992f490f49505a2b3427e22" alt="404 Not Found" className="mb-8" />
            <h1 className="text-2xl font-bold mb-2">Oops! Page not found.</h1>
            <p className="text-gray-500 text-center mb-8">
                We're sorry, but the page you requested could not be found.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go back to homepage
            </Link>
        </div>
    );
};

export default ErrorPage;