import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import CancelOrderConfirmModal from './CancelOrderConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [order, setOrder] = useState()
    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`http://localhost:5000/parts/${user.email}`)
        .then(res => res.json())
    );
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li>Dashboard</li>
                    <li>My orders</li>
                </ul>
            </div>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts info</th>
                            <th>Buyer</th>
                            <th>Order Quantity</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                setOrder={setOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            <CancelOrderConfirmModal
                order={order}
                refetch={refetch}
            ></CancelOrderConfirmModal>
        </div>
    );
};

export default MyOrders;