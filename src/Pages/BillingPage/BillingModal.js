import {useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'

const BillingModal = ({billId}) => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
console.log(billId)

// const {data:updateBill=[]} = useQuery({
//   queryKey:['updateBill'],
//   queryFn:()=> fetch(`https://power-hack-server-jade.vercel.app/billing-list/${billId}`)
//   .then(res => res.json())
//   .then(data=>{
//     console.log(data)
//   })
// })

  const onSubmit = data =>{
    const billing = {
        name:data.name,
        mail:data.mail,
        phone:data.phone,
        amount:data.amount
    }
    console.log(billing);
    fetch('https://power-hack-server-jade.vercel.app/add-billing',{
       method:'POST',
       headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(billing) 
    })
    .then(res=> res.json())
    .then(res => {
      if(data.acknowledged){
				toast.success('Your bill payment is successfully');
				
			}
        console.log(res)
    })
  } 



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
                         htmlFor="Name">Name</label>
                        <input 
                        {...register("name", { required: true })} 
                        aria-invalid={errors.Name ? "true" : "false"}
                        className='border mt-2 p-1 rounded '
                        placeholder='Enter Your Full Name'
                        // defaultValue={updateBill.name}
                        type="text" />
                        {errors.name?.type === 'required' && <p role="alert">Name is required</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label
                        className='font-semibold'
                         htmlFor="mail"> Email</label>
                        <input 
                         {...register("mail", { required: "Email Address is required" })} 
                         aria-invalid={errors.mail ? "true" : "false"} 
                        className='border mt-2 p-1 rounded '
                        placeholder='Your Email'
                        
                        type="email" />
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                    </div>
                    </div>
                    <div className='flex flex-row mt-3'>
                    <div className='flex flex-col mr-4'>
                        <label
                        className='font-semibold'
                         htmlFor="phone"> Phone </label>
                        <input 
                        {...register("phone",
                         {  required:"true"})} 
                        aria-invalid={errors.phone ? "true" : "false"}
                        className='border mt-2 p-1 rounded '
                        placeholder='Your Phone Number '
                        type="text" />
                        
                         {errors.phone?.type === 'required' && <p role="alert">Phone Number is Required</p>}
                    </div>
                    <div className='flex flex-col mr-4'>
                        <label
                        className='font-semibold'
                         htmlFor="amount"> Payable Amount </label>
                         
                            <input 
                            {...register("amount", { required: true })} 
                            aria-invalid={errors.amount ? "true" : "false"}
                            className='border mt-2 p-1 rounded '
                            
                            placeholder='Payable Amount'
                            type="text"/>
                             {errors.amount?.type === 'required' && <p role="alert">Payable amount is required</p>}
                       
                        
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