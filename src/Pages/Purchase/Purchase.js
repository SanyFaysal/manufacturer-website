import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Purchase = () => {
    const { _id } = useParams();
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/part/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setDetail(data[0])
            })
    }, [_id])
    const { name, desc, img, available, minimum, price } = detail;

    return (
        <div class="hero max-w-screen-lg  mx-auto border mt-16 ">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <figure class="px-10 pt-10 w-64 mx-auto"><img src={img} alt="Shoes" /></figure>
                    <h1 class="text-3xl ">Purchase <span className='text-orange-500'>{detail?.name}</span></h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;