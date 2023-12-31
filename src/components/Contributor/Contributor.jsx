import React from 'react';

const Contributor = (props) => {
    const { data } = props;
    const { login, avatar_url, html_url, contributions } = data;

    return (
        <li className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg p-4 m-5 w-[300px] max-w-[350px] mx-auto text-white hover:bg-opacity-90 hover:shadow-xl transition-transform hover:scale-105">
            <div className="text-center">
                <img src={avatar_url} alt={login} className="w-32 h-32 mx-auto rounded-full border-4 border-white" />
                <h1 className="text-xl font-semibold mt-4">{login}</h1>
                <p className="text-gray-300">
                    Contributions: {contributions}
                </p>
            </div>
            <div className="mt-4 text-center">
                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out"
                >
                    View Profile
                </a>
            </div>
        </li>
    );
};

export default Contributor;
