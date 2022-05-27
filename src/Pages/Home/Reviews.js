import React, { useEffect, useState } from 'react';
import Review from './Review';


const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(reviews => {
                setReviews(reviews)
            })
    }, [])

    // console.log(reviews.reverse());
    return (
        <div className='mt-16'>
            <h2 className='text-3xl text-center font-bold '>Collected Reviews</h2>
            <div className='grid lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 px-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;