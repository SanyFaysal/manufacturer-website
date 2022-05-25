import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/parts/${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    if (loading) {
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
                            <th>Payment History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <OrderRow
                                key={order._id}
                                order={order}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;