import React from 'react';
import { useForm } from "react-hook-form";

const BillingModal = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
    return (
       <div className='text-gray-800'>
      
<input type="checkbox" id="Bill-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="Bill-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                    <div >
                    <div className='flex flex-row mt-3'>
                    <div className='flex flex-col mr-4'>
                        <label
                        className='font-semibold'
                         htmlFor="">Name</label>
                        <input 
                        className='border mt-2 p-1 rounded '
                        placeholder='Enter Your Full Name'
                        type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label
                        className='font-semibold'
                         htmlFor=""> Email</label>
                        <input 
                         {...register("mail", { required: "Email Address is required" })} 
                         aria-invalid={errors.mail ? "true" : "false"} 
                        className='border mt-2 p-1 rounded '
                        placeholder='Enter Your Email'
                        type="email" />
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                    </div>
                    </div>
                    <div className='flex flex-row mt-3'>
                    <div className='flex flex-col mr-4'>
                        <label
                        className='font-semibold'
                         htmlFor=""> Phone </label>
                        <input 
                        className='border mt-2 p-1 rounded '
                        placeholder='Enter Your Phone No:'
                        type="text" />
                    </div>
                    <div className='flex flex-col mr-4'>
                        <label
                        className='font-semibold'
                         htmlFor=""> Payable Amount </label>
                        <input 
                        className='border mt-2 p-1 rounded '
                        placeholder='Enter Payable Amount'
                        type="text" />
                    </div>
                    
                    </div>
                    <input type="submit" value="Submit" className='w-full btn bg-gray-800 mt-5' /> 
                    
                    </div>
                    
                     
                </form>
    
  </div>
</div>
       </div>
    );
};

export default BillingModal;