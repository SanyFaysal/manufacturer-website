import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/parts/${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quo. Nobis, cumque? Explicabo excepturi rem veritatis deserunt quos magni expedita officia. Tenetur rerum ad possimus non quia quas fugiat veniam repellat cum voluptatem quaerat architecto placeat facilis est natus perferendis, error quasi modi perspiciatis! Sunt totam rerum magni recusandae consequuntur.</p>
        </div>
    );
};

export default MyOrders;