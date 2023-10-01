// NotFound2.jsx
import React from 'react';
import astronaut from '../../assets/astronaut.svg';
import saturn from '../../assets/saturn.svg';
import {useNavigate} from 'react-router-dom'

const NotFound2 = () => {

    const navigate = useNavigate()

    const handleRedirection = () => {
        navigate('/')
    }
    return (
        <div className="bg-[#24344c] w-screen h-screen relative overflow-hidden fontDosis">
            <div id="particles-js" className=" bg-[#24344c] fixed w-full h-full opacity-20"></div>
            <div className="denied__wrapper absolute bg-[#24344c] denied__wrapper h-[390px] left-1/2 max-w-[390px] mx-auto top-[30%] translate-x-[-50%] translate-y-[-50%] w-full">
                <div className='relative'>
                    <h1 className="text-center text-white font-Dosis text-[100px] mb-0 font-extrabold">404</h1>
                    <h3 className="text-center text-white text-base md:text-xl leading-6 max-w-[330px] mx-auto mb-8 font-Dosis font-normal">
                        LOST IN 
                        <span className="relative inline-block">
                        &nbsp; SPACE
                            <span className="strikeThru"></span>
                        </span>

                        &nbsp; AADHAR-ID Verifier? Hmm, looks like that page doesn&apos;t exist.
                    </h3>
                    <img id="astronaut" src={astronaut} alt="Astronaut" className="w-[43px] absolute right-20 top-210 animate-spin animation-linear duration-100" />
                    <img id="planet" src={saturn} alt="Planet" className="absolute w-[390px]" />
                </div>
            </div>

            <button className='bg-transparent text-white py-2 px-0 border border-white rounded-md w-[150px] text-15 text-center mx-auto align-middle block mb-4 mt-25 fontDosis font-normal bottom-0 absolute left-1/2 translate-x-[-50%] translate-y-[-50%]' onClick={handleRedirection} >Go Home</button>
        </div>
    );
};

export default NotFound2;
