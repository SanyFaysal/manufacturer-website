import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderRow = ({ order }) => {
    const { img, partsName, price, name, email, quantity } = order
    return (
        <tr>
            <td><FontAwesomeIcon icon={faTrash} className='text-2xl text-red-700 font-bold'></FontAwesomeIcon></td>
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
                {name}
                <span class="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{quantity} <small>pics</small></td>
            <th>
                <button class="btn btn-tiny btn-success btn-xs">Payment</button>
            </th>
        </tr>
    );
};

export default OrderRow;