import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L41irIEBBiYU12D99YS28HMYRqicK0Fbo543x3IYYFwrYJaJhEEQeZEBszpe86H3W54KNrjIVhAS59aUUrekHDS00CYPQmm9A');
const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery('order', () => fetch(`https://limitless-brook-51245.herokuapp.com/order/${id}`).then(res => res.json()))

    console.log(order)
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(order);
    const { partsName, phone, name, price, quantity, address } = order;
    const payBill = parseInt(quantity) * parseInt(price)
    return (
        <div className=''>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li>Payment</li>
                </ul>
            </div>

            <div className='xl:w-[75%] bg-slate-100 py-10'>
                <div className='card  max-w-lg mx-auto'>
                    <h2 className='text-2xl font-bold text-center card-title block'>Payment for <span className='text-primary'>{partsName}</span></h2>
                    <div className='card-body text-xl'>
                        <p className='text-xl'>We will send it at {address}</p>
                        <p>Try to turn on your number  <span className='font-bold'>{phone}</span> Your orders Quantity: <span class="font-bold"> {quantity}</span>  pics</p>
                        <h2 className=' text-xl font-bold'>Please Pay <span className='text-primary'>{payBill} $</span></h2>
                    </div>
                </div>
                <div className='max-w-lg mx-auto'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payBill={payBill} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;