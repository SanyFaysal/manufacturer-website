import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading'
const Register = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        eUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const onSubmit = async data => {
        const { email, password, name } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        reset()
    };;
    const [user] = useAuthState(auth)
    const [token] = useToken(user || eUser || gUser)
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/home')
    }
    return (
        <div class="card shadow-xl max-w-lg mx-auto my-8 py-12">
            <h2 className='text-center text-4xl font-bold  mb-4 '>Register Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto w-96'>
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: true })} placeholder="your name" class="input w-full input-bordered" />
                    {errors.name?.type === 'required' && <span className='text-error'>Name is required</span>}
                </div>
                <div className='mx-auto w-96 mt-5'>
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} placeholder="email" class="input w-full input-bordered" />
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
                <input type="submit" class="btn " value='Register' className='w-96 mx-auto btn block' />
            </form>

            <p className='pl-16 pt-3'>Already have an account ? <Link to='/login' className='text-green-500'>Go to login</Link></p>
            <div class="divider w-96 mx-auto mt-10 ">OR</div>
            {gError && <p className='text-red-500 text-center'>{error?.message}</p>}
            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-warning w-96 mx-auto block">Google SignIn</button>

        </div>
    );
};

export default Register;