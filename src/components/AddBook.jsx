import React, { useState } from 'react'

function AddBook({ onAdd }) {
    const[formData, setFormData] = useState({
        name: '',
        description: '',
        ratings: '',
        price: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file'? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name.trim()) return;

        onAdd(formData);
        setFormData({
            name: '',
            description: '',
            ratings: '',
            price: '',
            image: null
        })
    }
    return (
        <div>


            <form 
                className="max-w-lg mx-auto bg-gray-200 p-12 shadow-2xl rounded-xl mb-10" 
                onSubmit={handleSubmit}>
                    
                <h1
                 className='block text-center mb-10 font-bold text-4xl'>
                    Add Book
                </h1>
                <label>
                    <span className='font-bold'>Upload Image: </span>
                    <input 
                    type="file" 
                    name="image" 
                    id="image" 
                    className="bg-gray-50 p-2 block rounded text-sm text-gray-900 border-1 border-gray-400 outline-none mb-5" 
                    onChange={handleChange}/>
                </label>

                <label>
                    <span className='font-bold'>Name: </span>
                    <input
                     type="text" 
                     name='name' 
                     value={formData.name}
                     className='mb-5 block rounded border-1 border-gray-400 text-gray-900 bg-gray-50' 
                     onChange={handleChange}/>
                </label>

                <label>
                    <span className='font-bold mb-20'>Description: </span>
                    <textarea
                     id="message" 
                     rows="4"
                     value={formData.description} 
                     className="block p-2.5 w-full text-sm  bg-gray-50 text-gray-900  rounded-lg border" 
                     placeholder="Leave a comment..." 
                     onChange={handleChange}
                     ></textarea>
                </label>

                <label>
                    <span className='font-bold'>Ratings⭐:</span>
                    <input 
                        type="text" 
                        name='ratings' 
                        value={formData.ratings}
                        className='mb-5 block rounded border-1 border-gray-400 text-gray-900 bg-gray-50' 
                        onChange={handleChange}/>
                </label>

                <label>
                    <span className='font-bold mt-5'>Price:</span>
                    <input 
                        type="text" 
                        name='price'
                        value={formData.price} 
                        className=' block rounded border-1 border-gray-400 text-gray-900 bg-gray-50'
                        onChange={handleChange} />
                </label>

                <button 
                    type='submit'
                    className='ml-40 text-center mx-auto font-bold bg-white rounded p-2 hover:bg-black hover:text-white duration-700 ease-in-out mt-10'>Add Book</button>
            </form>
        </div>
    )
}

export default AddBook