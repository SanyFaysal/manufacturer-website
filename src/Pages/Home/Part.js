import React from 'react';
import { useNavigate } from 'react-router-dom';
const Part = ({ part }) => {
    const { name, img, desc, minimum, available, price, _id } = part;
    const navigate = useNavigate();

    return (
        <div class="card bg-white max-h-min shadow">
            <figure class="px-10 pt-10 w-56 mx-auto"><img src={img} alt="Shoes" /></figure>
            <div class="card-body px-6">
                <h2 class="card-title text-xl">{name}</h2>
                <p title={desc} className="text-sm">{desc.slice(0, 85)}...</p>
                <p className='text-slate-500'>Available: <span className='font-bold'>{available}</span>  <small>pics/in stock</small></p>
                <p className='text-slate-500'>Min. Order : <span className='font-bold'>{minimum}</span> <small>pics</small></p>
                <p className=' font-bold text-4xl  text-orange-700'>$ {price}</p>
                <div class="card-actions justify-end">
                    <div onClick={() => navigate(`/purchase/${_id}`)} class="btn btn-sm ">Purchase</div>
                </div>
            </div>
        </div>
    );
};

export default Part;