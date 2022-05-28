import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ManageProductRow from './ManageProductRow'
import RemovingProductConfirmationModal from './Modal/RemovingProductConfirmationModal';
import Loading from '../../Shared/Loading'
const ManageProducts = () => {

    const [product, setProduct] = useState()

    const { data, isLoading, refetch } = useQuery('product', () => fetch('https://limitless-brook-51245.herokuapp.com/part').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li>Manage All orders</li>
                </ul>
            </div>

            <div class="overflow-x-auto mb-16">
                <table class="table  w-full">

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
                            data?.map((manage, index) => <ManageProductRow
                                key={manage._id}
                                manage={manage}
                                index={index}
                                setProduct={setProduct}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            <RemovingProductConfirmationModal
                product={product}
                refetch={refetch}
            ></RemovingProductConfirmationModal>
        </div >
    )

};

export default ManageProducts;