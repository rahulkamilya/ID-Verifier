import React, { useState, useEffect } from 'react';
import Contributor from './Contributor/Contributor';
import axios from 'axios';

const Team = () => {
    const [teamList, setTeam] = useState([]);
    const [filteredTeamList, setFilteredTeam] = useState([]);
    const [search, setSearch] = useState("");
    const getTeam = async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/rahulkamilya/ID-Verifier/contributors?page=1&per_page=100');
            setTeam(response.data);
            setFilteredTeam(response.data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    useEffect(() => {
        getTeam();
    }, []);
    const handleSearch = (e) => {
        let value = e.target.value;
        setSearch(value);
        var searchValue = new RegExp(value + '.+$', 'i');
        let newTeamList = teamList.filter(person => person.login.search(searchValue) !== -1)
        setFilteredTeam(newTeamList);
    }
    return (
        <div className='bg-gray-900 h-screen'>
            <div className='w-[90%] mx-auto'>
                <p className="mx-auto text-center text-4xl font-extrabold text-red-500">
                    Our Team
                </p>
                <input className="block w-[58%] mx-auto mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" value={search} onChange={(e) => handleSearch(e)} placeholder='Search for Contributors' />
            </div>
            <ul className='flex flex-wrap mx-auto w-[90%]'>
                {filteredTeamList?.map(member => {
                    const { login, avatar_url, html_url, contributions } = member
                    return <Contributor data={{ login, avatar_url, html_url, contributions }} />
                })}

            </ul>
        </div>
    );
};

export default Team;
