import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import Features from './Features';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Features></Features>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>

        </div>
    );
};
export default Home;