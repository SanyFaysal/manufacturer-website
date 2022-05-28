import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrders = () => {
    const [manageOrder, setMangeOrder] = useState([]);
    useEffect(() => {
        fetch('https://limitless-brook-51245.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setMangeOrder(data)
            })
    }, [])
    return (
        <div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li>Manage All orders</li>
                </ul>
            </div>

            <div class="overflow-x-auto mb-16">
                <table class="table table-zebra w-full">

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
                            manageOrder.map((manage, index) => <ManageOrderRow
                                key={manage._id}
                                manage={manage}
                                index={index}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div >
    )

};

export default ManageAllOrders;