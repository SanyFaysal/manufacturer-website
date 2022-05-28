import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageProductRow from './ManageProductRow'
import RemovingProductConfirmaitonModal from './Modal/RemovingProductConfirmationModal';
const ManageProducts = () => {
    const [managePart, setManagePart] = useState([]);
    const [manageProduct, setManageProduct] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setManagePart(data)
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
                            <th>In Stock</th>
                            <th>Minimum order </th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managePart.map((manage, index) => <ManageProductRow
                                key={manage._id}
                                manage={manage}
                                index={index}
                                setManageProduct={setManageProduct}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            <RemovingProductConfirmaitonModal></RemovingProductConfirmaitonModal>
        </div >
    )

};

export default ManageProducts;