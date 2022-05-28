import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    const demo = [...parts.slice(0, 6)];
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className='  container mx-auto  '>
            <h3 className='text-center text-4xl font-bold  py-3'> The main <span className='text-orange-500'>{demo.length}</span> Parts of a bicycle -</h3>
            <div className='grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 px-12 bg-base-100'>
                {
                    demo.map(part => <Part
                        key={part._id}
                        part={part}
                        admin={admin}
                    ></Part>)
                }
            </div>
            <div className='flex justify-end mr-12 mt-8'>
                <button class="btn btn-sm btn-secondary "><Link to='/allParts'>See All <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </Link></button>
            </div>
        </div>
    );
};

export default Parts;