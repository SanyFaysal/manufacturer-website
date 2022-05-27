import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    const { userName, ratings, quality, desc, email } = review;

    const starRatings = [];
    for (let index = 0; index < parseInt(ratings); index++) {
        starRatings.push(index)
    }

    return (
        <div class="card text-center shadow bg-gray-50 p-2">
            <h2 class="font-bold text-xl">{userName}</h2>
            <p class="badge badge-ghost block mx-auto">{email}</p>
            <p className='text-sm'>{desc}</p>
            <div class=" justify-start ">
                <p className='text-slate-500'> Product quality : {quality}</p>
                <p>
                    <span className='font-bold  text-sm'>Ratings</span> :    {
                        starRatings.map(star => <FontAwesomeIcon icon={faStar} className='text-orange-500 mx-0'></FontAwesomeIcon>)
                    }
                </p>
            </div>
        </div>

    );
};

export default Review;