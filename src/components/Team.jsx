import React, { useState, useEffect } from 'react';
import Contributor from './Contributor/Contributor';
import axios from 'axios';

const Team = () => {
    const [teamList, setTeam] = useState([]);

    const getTeam = async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/rahulkamilya/ID-Verifier/contributors?page=1&per_page=100');
            setTeam(response.data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    useEffect(() => {
        getTeam();
    }, []);

    return (
        <div className='bg-gray-900 h-screen'>
            <p className="mx-auto text-center text-4xl font-extrabold text-red-500">
          Our Team
        </p>
            <ul className='flex flex-wrap mx-auto w-[90%]'>
            {teamList.map(member => {
                const {login, avatar_url, html_url, contributions} = member
                return <Contributor data={{login, avatar_url, html_url, contributions}} />
            })}

            </ul>
        </div>
    );
};

export default Team;
