import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const available = event.target.available.value;
        const minimum = event.target.minimum.value;
        const price = event.target.price.value;
        const desc = event.target.desc.value;
        const product = {
            name,
            img,
            available,
            minimum,
            price,
            desc,
        }
        fetch('https://limitless-brook-51245.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('SuccessFully Added ')
                    document.getElementById('form').reset()
                }
                else (
                    toast.error('Something went wrong. Please try once again')
                )
            })
    }
    return (
        <div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li>Dashboard</li>
                    <li>Manage All orders</li>
                </ul>
            </div>
            <div class="card flex-shrink-0 w-full p-10 mb-10 max-w-lg  shadow-2xl bg-base-100 mx-auto">
                <h2 className='text-center font-bold text-2xl mb-4'>Add Product </h2>
                <form onSubmit={handleSubmit} className='' id='form'>
                    <div>
                        <h2 className='block'>Product name:</h2>
                        <input name="name" type='text' required placeholder="Product Name " class="input xl:w-96 lg:w-96 sm:w-52 input-bordered input-sm " />
                    </div>
                    <div>
                        <h2 className='block'>Img Url</h2>
                        <input name="img" type='text' required placeholder="image url " class="input xl:w-96 lg:w-76 sm:w-48 input-bordered input-sm " />
                    </div>
                    <div>
                        <h2 className='block'>Available Quantity </h2>
                        <input name="available" type='number' required placeholder="available quantity" class="input xl:w-96 lg:w-76 sm:w-48 input-bordered input-sm " />
                    </div>
                    <div>
                        <h2 className='block'>Minimum Quantity</h2>
                        <input name="minimum" type='number' required placeholder="minimum quantity " class="input xl:w-96 lg:w-76 sm:w-48 input-bordered input-sm " />
                    </div>
                    <div>
                        <h2 className='block'>Price /pics</h2>
                        <input name="price" type='number' required placeholder="price per pics " class="input xl:w-96 lg:w-76 sm:w-48 input-bordered input-sm " />
                    </div>
                    <div class="form-control xl:w-96 sm:w-76 block">
                        <label class="label">
                            <span class="label-text">Short Description: </span>
                        </label>
                        <textarea name='desc' class="textarea textarea-bordered xl:w-96 lg:w-76 sm:w-48  h-24" required placeholder="write a short description.."></textarea>
                    </div>
                    <div class="card-actions justify-center block ">
                        <input type='submit' class="btn btn-primary" value='Add Product' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;