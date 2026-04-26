import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div className='space-y-4'>
            <h1 className='text-xl font-semibold'>Login with</h1>
            <div className='space-y-3'>
                <button className='btn w-full text-blue-500'><FaGoogle/> Login with Google</button>
                <button className='btn w-full'> <FaGithub/>
                    Login with GitHub</button>
            </div>
        </div>
    );
};

export default RightSideBar;