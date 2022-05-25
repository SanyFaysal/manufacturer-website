import { faDollar, faDollarSign, faMoneyBill, faMoneyCheckDollar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const OrderRow = ({ order, index, setOrder }) => {
    const { img, partsName, price, name, email, quantity } = order;
    setOrder(order)
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
                {name}
                <span class="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{quantity} <small>pics</small></td>
            <th className='flex justify-center' >
                <td><label for="confirmation-cancel-modal"><FontAwesomeIcon icon={faTrash} className='text-2xl  text-red-700 font-bold' title='Delete'></FontAwesomeIcon></label></td>
                <td>  <FontAwesomeIcon icon={faMoneyCheckDollar} className='text-3xl text-green-600' title='Payment'></FontAwesomeIcon></td>
            </th>
        </tr>
    );
};

export default OrderRow;