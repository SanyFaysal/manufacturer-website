import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGraduationCap, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import linkedin from '../../images/linkedin-brands.svg'
const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [checked, setChecked] = useState(false);
    const { data: details, isLoading, refetch } = useQuery('profile', () => fetch(`http://localhost:5000/userInfo/${user?.email}`).then(res => res.json()))
    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const eInstitute = e.target.eInstitute.value;
        const degree = e.target.degree.value;
        const linkedin = e.target.linkedin.value;
        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            phone,
            address,
            eInstitute,
            degree,
            linkedin
        };
        fetch('http://localhost:5000/userInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Added successfully')
                    document.getElementById('form').reset()
                    refetch()
                }
                else (
                    toast.error('Something went wrong. Please try once again')
                )
            })
    }

    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li>My Profile</li>
                </ul>
            </div>
            <div class="card  mx-auto xl:w-9/12 lg:w-9/12  bg-slate-200 mb-12">
                <div class="card-body">
                    <div class="bg-slate-600 text-white rounded-full w-32 h-32 mx-auto my-auto flex justify-center items-center">
                        <label tabIndex="0" class="text-6xl ">{user?.displayName?.split(' ')[0].slice(0, 1)}{user?.displayName?.split(' ')[1].slice(0, 1)}</label>
                    </div>
                    <h2 class="text-center text-3xl ">{user?.displayName}</h2>
                    <h2 class="text-center text-sm badge badge block mx-auto ">{user?.email}</h2>
                    <div className={details?.length ? 'form-control block w-3/5 mx-auto' : "hidden"}>
                        <p className=''>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Lives in <span className='font-bold'>{details[0]?.address}</span>
                        </p>
                        <p className=''>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Contact Info <span className='font-bold'>{details[0]?.phone}</span>
                        </p>
                        <p className=''>
                            <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> Studied at <span className='font-bold'>{details[0]?.eInstitute}</span>
                        </p>
                        <p className=''>
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> Graduation <span className='font-bold'>{details[0]?.degree}</span>
                        </p>
                        <p className=''>
                            <img src={linkedin} className='w-4 inline mr-2' alt='linkedin' />Linkedin : {details[0]?.linkedin}
                        </p>
                    </div>

                    <div className={details?.length ? 'hidden' : 'block'} >
                        <label class="label cursor-pointer flex justify-center">
                            <input type="checkbox" class="checkbox" onClick={(e) => setChecked(!checked)} />
                            <span class="label-text ml-3 text-blue-500"  >Want to  update your Profile Profile? </span>
                        </label>
                        <form onSubmit={handleSubmit} class={checked ? 'form-control block xl:w-9/12 lg:w-9/12 sm:48 mx-auto' : "hidden"} id='form'>
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text">Add Phone Number</span>
                                </label>
                                <input name='phone' type="text" placeholder="phone number" required class="input input-bordered " />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Add your Address</span>
                                </label>
                                <input name='address' type="text" required placeholder="present address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Last Educational institution</span>
                                </label>
                                <input name='eInstitute' type="text" placeholder="Institute name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Last Achievement</span>
                                </label>
                                <input name='degree' required type="text" placeholder=" your last degree" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Linkedin profile Link</span>
                                </label>
                                <input name='linkedin' required type="text" placeholder="link here / type Not available" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Add Info</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;