import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageOrderRow = ({ manage, index }) => {
    const { partsName, price, img, name, email, quantity } = manage;
    console.log(manage);
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-16 h-16">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{partsName?.slice(0, 15)}...</div>
                        <div class="text-sm opacity-75">Price : $ {price}</div>
                    </div>
                </div>
            </td>
            <td>
                <span>{name}</span>
                <span class="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{quantity} <small>pics</small></td>
            <th className='flex justify-center' >
                <td><button className='btn btn-xs'>Shipping</button></td>
                <td> <button className='btn btn-xs btn-success'>Pending</button></td>
            </th>
        </tr>
    );
};

export default ManageOrderRow;