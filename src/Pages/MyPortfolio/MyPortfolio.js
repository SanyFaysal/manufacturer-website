import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faBuilding, faGraduationCap, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div class="card  mx-auto xl:w-9/12 lg:w-9/12 mt-4  bg-slate-200 mb-12">
                <div class="card-body">
                    <h2 class="text-center text-3xl ">Faysal Ahmed</h2>
                    <h2 class="text-center text-sm badge badge-ghost block mx-auto ">tfoysalahmed@gmail.com</h2>
                    <div className='form-control block sm:w mx-auto' >
                        <p className=''>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> <span className='font-bold'>Gazipur, Dhaka-Bangladesh</span>
                        </p>
                        <p className=''>
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> <span className='font-bold'>Completed HSC from Bhawyal Bodre Alam Govt. College</span>
                        </p>
                        <h2 className='text-2xl font-bold mt-2'> List of technologies:</h2>

                        <table>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' />React js</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> Mongodb</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> Express js</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> Firebase</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> Tailwind</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> Daisy UI</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> React Router</tr>
                            <tr><FontAwesomeIcon icon={faArrowAltCircleRight} className='text-red-600' /> React toastify</tr>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;