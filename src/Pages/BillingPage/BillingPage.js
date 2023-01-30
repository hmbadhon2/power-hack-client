import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BillingModal from './BillingModal';
import ConfirmationModal from '../../Components/ConfirmationModal';
import toast from 'react-hot-toast';

const BillingPage = ({updateBill,setUpdateBill}) => {

	const [deletingBill, setDeletingBill] = useState(null);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(10);

	
	
	const closeModal = ()=>{
		setDeletingBill(null)
	}

    const { data:billings=[],refetch } = useQuery({
        queryKey:['billings'],
        queryFn:()=>fetch('http://localhost:5000/billing-list')
        .then(res => res.json())
        .then(data => {
			
            return data;
        })
    })

	const Billings = Object.keys(billings);

	

	const handledeletingBill = bill =>{
		fetch(`http://localhost:5000/delete-billing/${bill._id}`,{
			method:'DELETE',
		})
		.then(res=>res.json())
		.then(data =>{
			if(data.deletedCount>0){    
				toast.success(`Bill No: ${bill._id} deleted successfully`)
				refetch()
			  }
			
		})
	}

	

    return (
        <div>
        
            
    <div>
	<div className="overflow-x-auto rounded">
		<table className="min-w-full text-xs">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Billing Sl</th>
					<th className="p-3">Billing ID</th>
					<th className="p-3">Full Name</th>
					<th className="p-3">Email</th>
					<th className="p-3">Phone</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Action</th>
				</tr>
			</thead> 
			<tbody>
				{
                   billings.map((bill,i)=> <tr 
                key={bill._id}
                bill={bill}
                className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                    <td className="p-3">
						<p>{i+1} </p>
					</td>
                    <td className="p-3">
						<p>{bill._id} </p>
					</td>
					<td className="p-3">
						<p>{bill.name}</p>
					</td>
					<td className="p-3">
						<p className="dark:text-gray-400">{bill.mail}</p>
					</td>
					<td className="p-3">
						<p className="dark:text-gray-400">{bill.phone}</p>
					</td>
					<td className="p-3 text-right">
						<p>{bill.amount}</p>
					</td>
					<td className="p-3 text-right">
						<span className=" flex flex-row px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>
							<label 
							onClick={()=>setUpdateBill(bill._id)}
							htmlFor="Bill-modal" type="button" className="hidden mr-1 font-semibold rounded lg:block bg-violet-400 text-gray-100"> Edit </label>
								
							</span>
							|
							<span>		
								<label 
							onClick={()=>setDeletingBill(bill)}
							htmlFor="confirmatin-modal"
							 className='ml-1'> Delete </label></span>
						</span>
					</td>

                </tr>)

                 }
			</tbody>
		</table>

		{
			<BillingModal
			/>   
		}
		<div>
            {
        deletingBill &&
        <ConfirmationModal
          title = 'Are you sure you want to delete ?'
          message = {`If you ${deletingBill.name} delete.It can not be undone`}
          modalData={deletingBill}
          successButtonName ="Delete"
          successButtonAction ={handledeletingBill}
          closeModal={closeModal}>

          </ConfirmationModal>
            }
      </div>
	  <div>
		
	  </div>
	</div>
</div>
            
        </div>
    );
};

export default BillingPage;