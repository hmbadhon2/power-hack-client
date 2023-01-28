import React from 'react';
import BillingModal from './BillingModal';

const BillingPage = () => {
    return (
        <div>
            <BillingModal/>
            
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
					<th className="p-3">Billing ID</th>
					<th className="p-3">Full Name</th>
					<th className="p-3">Email</th>
					<th className="p-3">Phone</th>
					<th className="p-3 text-right">Paid Amount</th>
					<th className="p-3">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				
				
			</tbody>
		</table>
	</div>
</div>
            
        </div>
    );
};

export default BillingPage;