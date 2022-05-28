import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import { faBarsProgress, faDesktop, faDiamond, faDiamondTurnRight, faUpRightAndDownLeftFromCenter, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Feature from './Feature';

const Features = () => {
    const features = [
        { id: 1, title: 'High Quality', icon: faChessQueen, desc: 'Higher-quality products pay off big time in terms of reliability. This is especially critical when your safety is at stake or the item is in frequent use. ', },
        { id: 2, title: 'Awesome Design', icon: faBarsProgress, desc: 'Good creative design will help you create a strong impression, build a brand identity, convey key information, narrate your story, and build consumer trust.', },
        { id: 3, title: 'User Friendly', icon: faUserFriends, desc: 'We dont want to push our ideas on to customers, we simply want to make what they wantI believe in the power of recognition and empowerment leading to great employee engagement', },
    ]
    return (
        <div className='mt-10 w-[90%] mx-auto'>
            <h1 className='text-5xl font-bold text-center mb-4'>Product Features</h1>
            <h2 className='uppercase text-center w-2xl w-5/12 mx-auto'>A Quality full parts in your bicycle can give make your journey comfortable and easier</h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>

        </div>
    )
};

export default Features;