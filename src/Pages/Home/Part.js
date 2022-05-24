import React from 'react';
import { useNavigate } from 'react-router-dom';
const Part = ({ part }) => {
    const { name, img, desc, minimum, available, price, _id } = part;
    const navigate = useNavigate();
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 w-64 mx-auto"><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p title={desc} className="text-sm">{desc.slice(0, 85)}...</p>
                <p className='text-slate-500'>Available: <span className='font-bold'>{available}</span>  <small>pics/in stock</small></p>
                <p className='text-slate-500'>Min. Order : <span className='font-bold'>{minimum}</span> <small>pics</small></p>
                <p className=' font-bold text-3xl text-orange-700'>$ {price}</p>
                <div class="card-actions justify-end">
                    <div onClick={() => navigate(`/purchase/${_id}`)} class="btn btn-sm btn-outline btn-error">Purchase</div>
                </div>
            </div>
        </div>
    );
};

export default Part;