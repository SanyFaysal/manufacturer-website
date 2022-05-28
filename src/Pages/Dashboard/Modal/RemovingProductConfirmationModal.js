import React, { useState } from 'react';
import { toast } from 'react-toastify';


const RemovingProductConfirmationModal = ({ product, refetch }) => {

    const handleDelete = () => {
        fetch(`https://limitless-brook-51245.herokuapp.com/removePart/${product?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount === 1) {
                    toast.success('Successfully deleted order');
                    refetch()
                }
                else {
                    toast.error('Some thing went wrong')
                };
            })
    }
    return (
        <div>
            <input type="checkbox" id="removing-product-confirmation-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1 className='tet-2xl font-bold '>Hello </h1>
                    <div className=''>
                        <img src={product?.img} className='w-32 mx-auto ' alt="" />
                    </div>
                    <p class="py-4 font-bold"> Are you sure to remove  <span className='text-info font-bold text-lg'> {product?.name}</span> from your Database? </p>

                    <div class="modal-action">
                        <label for="removing-product-confirmation-modal" class="btn btn-sm ">Cancel</label>
                        <label for="removing-product-confirmation-modal" onClick={handleDelete} class="btn btn-sm btn-success">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemovingProductConfirmationModal;