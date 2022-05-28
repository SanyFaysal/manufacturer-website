import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const EditProduct = () => {
    const { id } = useParams()
    const [checked, setChecked] = useState(false);
    const { data: product, isLoading, refetch } = useQuery('profile', () => fetch(`http://localhost:5000/part/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, img, minimum, desc, available, price, _id } = product;

    console.log(_id);
    const handleSubmit = (e) => {
        e.preventDefault();
        const editedName = e.target.name?.value || name;
        const editedPrice = e.target.price?.value || price;
        const editedAvailable = e.target.available?.value || available;
        const editedMinimum = e.target.minimum?.value || minimum;
        const editedDesc = e.target.desc?.value || desc;
        const editedProduct = {
            name: editedName,
            price: editedPrice,
            available: editedAvailable,
            minimum: editedMinimum,
            desc: editedDesc,
            img: product.img
        };
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast.success('Successfully updated Product')
                    document.getElementById('form').reset()
                    refetch()

                }
                else (
                    toast.error('Nothing new ! ')
                )
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card  mx-auto xl:w-9/12 lg:w-9/12 mt-5 bg-slate-200 mb-12">
                <div class="card-body">
                    <div className='lg:flex xl:flex'>
                        <div class=" text-white rounded-full mx-auto my-auto flex justify-center items-center">
                            <img src={img} className="lg:w-56 sm:w-32" alt="" />
                        </div>

                        <div className='form-control block lg:w-3/5 mx-auto'>
                            <h2 class="text-center text-3xl text-primary font-bold">{name}</h2>
                            <p className=' my-3'>
                                <span className=''>{desc}</span>
                            </p>
                            <p className='  block'>
                                Available in stock: <span className='font-bold'>{available}</span>/pics
                            </p>
                            <p className=' block'>
                                Minimum Order :  <span className='font-bold  '>{minimum}</span>/pics
                            </p>
                            <p className=''>
                                <span className='font-bold text-4xl text-red-500 my-2'>${price}</span>
                            </p>
                        </div>
                    </div>
                    <div  >
                        <label class="label cursor-pointer flex justify-center">
                            <input type="checkbox" class="checkbox" onClick={(e) => setChecked(!checked)} />
                            <span class="label-text text-xl ml-3 text-blue-500 "  ><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon> Edit Product information </span>
                        </label>
                        <form onSubmit={handleSubmit} class={checked ? 'form-control block xl:w-9/12 lg:w-9/12 sm:48 mx-auto' : "hidden"} id='form'>
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text">Product name</span>
                                </label>
                                <input name='name' type="text" defaultValue={name} required class="input input-bordered " />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Price </span>
                                </label>
                                <input name='price' type="text" required defaultValue={price} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Available in stock </span>
                                </label>
                                <input name='available' type="text" defaultValue={available} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Description </span>
                                </label>
                                <textarea name='desc' class="textarea textarea-bordered w-full  h-28" required defaultValue={desc}></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Edit Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;