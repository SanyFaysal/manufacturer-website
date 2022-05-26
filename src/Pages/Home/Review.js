import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    const { userName, ratings, quanlity, desc, email } = review;

    const starRatings = [];
    for (let index = 0; index < parseInt(ratings); index++) {
        starRatings.push(index)
    }

    return (
        <div class="card text-center  bg-base-100">
            <h2 class="font-bold text-xl">{userName}</h2>
            <p class="badge badge-ghost block mx-auto">{email}</p>
            <p>{desc}</p>
            <div class=" justify-start ">
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