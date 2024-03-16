import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
        <div className='space-y-2'>
            <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
            <p>{address?.state},{address?.city},{address?.zipCode}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>{address?.mobile}</p>
               
            </div>
        </div>
    </div>
  )
}

export default AddressCard