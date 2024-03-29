import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch(`https://limitless-brook-51245.herokuapp.com/reviews`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const shortReviews = reviews.slice((reviews.length - 6), (reviews.length)).reverse();
    return (
        <div className='mt-16'>
            <h2 className='text-3xl text-center font-bold my-8 '>Collected Reviews</h2>
            <div className='grid xl:w-[85%] mx-auto lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 px-12'>
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