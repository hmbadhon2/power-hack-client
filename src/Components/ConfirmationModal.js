import React from 'react';

const ConfirmationModal = ({
    title, 
    message,
    modalData,
    successButtonName,
    successButtonAction,
    closeModal 
}) => {
    return (
        <div>
         
        <input type="checkbox" id="confirmatin-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box modal-bottom sm:modal-middle">
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            <p className="py-4 text-gray-800">{message}</p>
            <div className="modal-action">
              <label 
              onClick={()=>successButtonAction(modalData)}
              htmlFor="confirmatin-modal" className="btn">{successButtonName}</label>
              <button onClick={closeModal} className='btn btn-outline'> Cancel</button>
            </div>
          </div>
        </div>  
        
                        
                </div>
    );
};

export default ConfirmationModal;