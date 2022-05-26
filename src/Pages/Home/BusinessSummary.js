
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Summary from './Summary';
import { faComputer, faComputerMouse, faHandHoldingHand, faThumbsUp, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    const summaries = [
        { id: 1, title: '72', color: 'bg-emerald-100', desc: 'Countries', icon: faHandHoldingHand },
        { id: 2, title: '534 + ', color: 'bg-purple-100', desc: 'Complete Projects', icon: faComputer },
        { id: 3, title: '334 +', color: 'bg-orange-100', desc: 'Happy Clients', icon: faUserGroup },
        { id: 4, title: '375 +', color: 'bg-slate-100', desc: 'Feedbacks', icon: faThumbsUp },
    ]
    return (

        <div className='mx-auto my-16 '>
            <h1 className='text-5xl font-bold text-center pt-8 pb-3 '>Millions of buisness Trust us </h1>
            <p className='uppercase text-2xl text-center pb-6'>Concern to understand customers require</p>
            <div className=' grid sm:grid-cols-1 xl:grid-cols-4 mx-auto'>
                {summaries.map(summary => <Summary
                    key={summary.id}
                    summary={summary}
                ></Summary>)}
            </div>
        </div>

    );
};

export default BusinessSummary;