import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen'>
            <FontAwesomeIcon icon={faSadTear} className='text-6xl mx-auto my-4 block flex justify-center'></FontAwesomeIcon>
            <h1 className='text-5xl text-bold text-center'>404</h1>
            <h2 className='text-xl font-bold text-center'>Page not found</h2>

        </div>
    );
};

export default NotFound;