

import { faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import html5 from '../../images/html5.png'
import css3 from '../../images/css3.png'
import bootstrap from '../../images/bootstrap.jpg'
import tailwind from '../../images/tailwind.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import nodejs from '../../images/nodejs.png'
import mongodb from '../../images/mongodb.webp'
import expressjs from '../../images/expressjs.png'
import reactrouter from '../../images/reactrouter.png'
import github from '../../images/github.png'
import reactbootstrap from '../../images/reactbootstrap.png'
const MyPortfolio = () => {
    return (
        <div>
            <div class="card  mx-auto xl:w-9/12 lg:w-9/12 mt-4  bg-slate-200 mb-12">
                <div class="card-body">
                    <h2 class="text-center text-3xl font-bold">Faysal Ahmed</h2>
                    <h2 class="text-center text-sm badge badge-ghost block mx-auto ">tfoysalahmed@gmail.com</h2>
                    <div className='form-control block sm:w mx-auto' >
                        <p className=''>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='font-bold'>Gazipur, Dhaka-Bangladesh</span>
                        </p>
                        <p className=''>
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> <span className='font-bold'>Completed HSC from Bhawyal Bodre Alam Govt. College</span>
                        </p>
                        <h2 className='text-2xl font-bold mt-5 uppercase text-center text-slate-500'>I have experience in these technologies</h2>

                        <div className='grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 mx-auto md:grid-cols-3 gap-5 my-5 '>
                            <img className='w-24 h-24 rounded-full ' src={html5} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={css3} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={bootstrap} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={tailwind} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={js} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={react} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={nodejs} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={mongodb} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={expressjs} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={reactrouter} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={github} alt="" />
                            <img className='w-24 h-24 rounded-full ' src={reactbootstrap} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;