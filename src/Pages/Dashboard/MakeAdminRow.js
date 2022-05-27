import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ user, index, setAdminInfo }) => {
    const { name, email } = user;
    console.log(user)
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <th className='text-center' >
                {user?.role === 'admin' && <FontAwesomeIcon icon={faCheckCircle} className=' text-2xl  bg-success rounded-full text-white'></FontAwesomeIcon>}
                <label for="confirmation-cancel-modal" onClick={() => setAdminInfo(user)} className={user?.role === 'admin' ? 'hidden' : ' btn btn-xs  '}>Make Admin</label> </th>
        </tr>
    );
};

export default ManageOrderRow;