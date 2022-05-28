import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useParts from '../../hooks/useParts';
import Part from '../Home/Part';

const AllParts = () => {
    const [parts] = useParts()
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className='mb-5'>
            <h2 className='text-4xl py-8 text-center  font-bold'>Purchase Your Require Parts</h2>
            <div className='grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 px-12'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                        admin={admin}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default AllParts;