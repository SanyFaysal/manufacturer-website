import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);;
    return (
        <div class="card shadow-xl max-w-lg mx-auto my-8 py-12">
            <h2 className='text-center text-4xl font-bold uppercase mb-4'>Register Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto w-96'>
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
                <input type="submit" class="btn " value='Register' className='w-96 mx-auto btn block' />
            </form>
            <p className='pl-16 pt-3'>Already have an account ? <Link to='/login' className='text-green-500'>Go to login</Link></p>
            <div class="divider w-96 mx-auto mt-10 ">OR</div>

            <button class="btn btn-outline btn-warning w-96 mx-auto block">Google SignIn</button>

        </div>
    );
};

export default Register;