import React from 'react';
import useParts from '../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    const demo = [...parts.slice(0, 6)];

    return (
        <div className='  container mx-auto  '>
            <h3 className='text-center text-4xl font-bold  py-3'> The main <span className='text-orange-500'>{demo.length}</span> Parts of a bicycle -</h3>
            <div className='grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    demo.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;