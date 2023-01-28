import React from 'react';
import BillingHeader from './BillingHeader';
import BillingPage from './BillingPage';
import BillingPagination from './BillingPagination';

const MainBillingPage = () => {
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100">
          <BillingHeader/> 
          <BillingPage/>
          <BillingPagination/> 
        </div>
    );
};

export default MainBillingPage;