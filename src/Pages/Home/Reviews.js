import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch(`http://localhost:5000/reviews`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const shortReviews = reviews.slice((reviews.length - 6), (reviews.length));
    return (
        <div className='mt-16'>
            <h2 className='text-3xl text-center font-bold '>Collected Reviews</h2>
            <div className='grid lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 px-12'>
                {
                    shortReviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;