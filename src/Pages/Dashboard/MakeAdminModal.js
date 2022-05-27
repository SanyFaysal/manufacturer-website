import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MakeAdminModal = ({ adminInfo, refetch }) => {

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${adminInfo?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data?.modifiedCount > 0) {
                    toast.success('Successfully make an admin ')
                }
                else {
                    toast.error('Something went wrong ! ')
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirmation-cancel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hey <span className='text-info font-bold'></span></h3>
                    <p class="py-4"> Are you sure to make  <span className='font-bold'>{adminInfo.email} </span> as an Admin ?</p>
                    <div class="modal-action">
                        <label for="confirmation-cancel-modal" class="btn btn-sm ">Cancel</label>
                        <label for="confirmation-cancel-modal" onClick={handleMakeAdmin} class="btn btn-sm btn-success">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminModal;