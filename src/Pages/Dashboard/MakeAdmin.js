import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import MakeAdminModal from './MakeAdminModal';
import MakeAdminRow from './MakeAdminRow';
const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState([])
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
        // method: 'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>

    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className='text-center'>Admin Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index}
                                setAdminInfo={setAdminInfo}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
                <MakeAdminModal
                    adminInfo={adminInfo}
                    refetch={refetch}
                ></MakeAdminModal>
            </div>
        </div>
    );
};

export default MakeAdmin;