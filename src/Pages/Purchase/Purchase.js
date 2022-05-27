import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
const Purchase = () => {
    const [user, loading] = useAuthState(auth)
    const { _id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [detail, setDetail] = useState({})
    const { name, desc, img, available, minimum, price } = detail;
    useEffect(() => {
        fetch(`http://localhost:5000/part/${_id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [_id])
    const [quant, setQuant] = useState(detail.minimum);
    const onSubmit = data => {
        data.partsName = name;
        data.desc = desc;
        data.price = price;
        data.img = img;
        fetch('http://localhost:5000/part', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Thanks for order ')
                    reset()
                }
            })
    };





    if (loading || !detail) {
        return <Loading></Loading>
    }
    return (
        <div class="hero max-w-screen-lg pb-10 px-5 bg-slate-50  mx-auto border rounded mb-16 mt-2">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left pr-12">
                    <figure class="px-10 pt-10 w-64 mx-auto border bg-white rounded"><img src={img} alt="Shoes" /></figure>
                    <h1 class="text-xl  mt-3 font-bold">{name}</h1>
                    <h5 className='mt-2 font-bold'>Description</h5>
                    <p className='mb-3 block'>{desc?.slice(0, 250)}</p>
                    <p className='my-2 badge  badge-ghost'> In stock : <span className='text-2xl font-bold'> {available}</span> <span className='text-xs font-bold'> pics </span></p>
                    <p className='badge  ml-2 badge-ghost'>Minimum Order : <span className='text-2xl font-bold'> {minimum}</span> <span>pics</span></p>
                    <p className='text-xl mb-2'>Price :  <span className='text-4xl font-bold text-red-500'>$ {price}</span><small className='text-xs'>/pics</small></p>
                </div>
                <div class="card flex-shrink-0 w-full p-10 max-w-sm  bg-white border">
                    <h2 className='font-bold text-center text-2xl'>FILL UP</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mx-auto w-80'>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("name")} value={user?.displayName} readOnly class="input w-full input-bordered" />
                        </div>
                        <div className='mx-auto w-80'>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} name="email" value={user?.email} readOnly class="input w-full input-bordered" />
                        </div>

                        <div className=' w-80 mx-auto'>
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input {...register("address", { required: true })} placeholder="address" class="input w-full input-bordered" />
                            {errors.address && <span className='text-error'>Please give your address</span>}
                        </div>
                        <div className=' w-80 mx-auto'>
                            <label class="label">
                                <span class="label-text">Phone mobile number </span>
                            </label>
                            <input {...register("phone", { required: true })} placeholder="password" class="input w-full input-bordered" />
                            {errors.phone && <span className='text-error'>Please give your mobile number</span>}
                        </div>
                        <div className=' w-80 mx-auto'>
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input {...register("quantity", { required: true })} defaultValue={minimum} class="input w-full input-bordered " onChange={(e) => setQuant(e.target.value)} />
                            {(quant < minimum) && <span className='text-red-500'>Please input minimum {minimum} pics or more </span>}
                            {(quant > available) && <span className='text-red-500'>Please input maximum {available} or fewer </span>}
                        </div>
                        <input disabled={(quant < minimum) || (quant > available)} type="submit" class="btn " value='Purchase' className='w-80 mx-auto btn block mt-5' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;