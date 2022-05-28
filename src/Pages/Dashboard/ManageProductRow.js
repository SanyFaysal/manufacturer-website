import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageOrderRow = ({ manage, index, setManageProduct }) => {
    const { name, img, desc, minimum, available, price, _id } = manage;
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
                        <div class="font-bold">{name?.slice(0, 15)}...</div>
                        <div class="text-sm opacity-75">Price : $ {price}</div>
                    </div>
                </div>
            </td>
            <td>{minimum} pics</td>
            <td>{available} pics</td>
            <th className='flex justify-center' >
                <td><label for="confirmation-cancel-modal" onClick={() => setManageProduct(manage)} className=' btn btn-xs'>Remove</label></td>
            </th >
        </tr >
    );
};

export default ManageOrderRow;