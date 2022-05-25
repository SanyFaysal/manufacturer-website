import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate(from, { replace: true });
    }
    return (
        <div class="card shadow-xl max-w-lg mx-auto my-8 py-12">
            <h2 className='text-center text-4xl font-bold  mb-4'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto w-96'>
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} name="email" placeholder="email" class="input w-full input-bordered" />
                    {errors.email?.type === 'required' && <span className='text-error'>Email is required</span>}
                </div>

                <div className=' my-5 w-96 mx-auto'>
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input {...register("password", { required: true })} placeholder="password" class="input w-full input-bordered" />
                    {errors.password && <span className='text-error'>Password is required</span>}
                </div>
                {error && <p className='text-red-500 text-center'>{error?.message}</p>}


                <input type="submit" class="btn " value='Login' className='w-96 mx-auto btn block' />
            </form>

            <p className='pl-16 pt-3'>New to bicycle parts? <Link to='/register' className='text-green-500 btn btn-link text-xs p-0 m-0'>Create an account</Link></p>
            <div class="divider w-96 mx-auto mt-10 ">OR</div>
            {gError && <p className='text-red-400 text-center'>{error?.message}</p>}
            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-warning w-96 mx-auto block">Google SignIn</button>

        </div>
    );
};

export default Login;