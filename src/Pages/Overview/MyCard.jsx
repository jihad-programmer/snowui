import React from 'react'

function MyCard() {
  return (
    <div>
        <div className='bg-[#EDEEFC] w-fit md:w-[202px] h-[112px] rounded-[16px] my-5'>
            <div className='mx-auto my-auto p-6'>
              <p className='text-[14px] font-semibold my-auto'>Views</p>
              <div className='flex items-center gap-2.5'>
               <p className='font-semibold text-[12px] '>7 ,2 6 5</p> 
               <p className='text-[14px]'>+11.01%</p>
               <img src="../Icon (10).png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
 export default MyCard