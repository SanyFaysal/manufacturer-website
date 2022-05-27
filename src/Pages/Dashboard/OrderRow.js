import { faDollar, faDollarSign, faMoneyBill, faMoneyCheckDollar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({ order, index, setOrder }) => {
    const navigate = useNavigate()
    const { img, partsName, price, name, email, quantity, _id } = order;

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
                <span className='block'>{name}</span>
                <span class="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td className=''>{quantity} <small>pics</small></td>
            <th className='flex justify-center' >
                <td><label for="confirmation-cancel-modal"><FontAwesomeIcon icon={faTrash} onClick={() => setOrder(order)} className='text-2xl  text-red-700 font-bold' title='Delete'></FontAwesomeIcon></label></td>
                <td>  <FontAwesomeIcon icon={faMoneyCheckDollar} onClick={() => navigate(`/dashboard/payment/${_id}`)} className='text-3xl text-green-600' title='Payment'></FontAwesomeIcon></td>
            </th>
        </tr>
    );
};

export default OrderRow;