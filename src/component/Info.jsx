import React from 'react'

function Info() {
  return (
    <div className='w-full bg-amber-50 px-8 py-12'>
      <div className='flex gap-10 justify-between'>

        <div className='w-1/2'>
        <div className='w-6 h-6 bg-gray-100 rounded flex-items-center justify-center mb-3'>
            🥇
        </div>
        <h3 className='font-bold text-sm mb-2'Checkout Pixabay contests></h3>
        <p className='text-ts text-gray-600 leading-4 w-[320px]'>
            Join exciting creative contests to showcase your talent, gain exposure and win  awesome prizes
        </p>
        <p className='text-xs font-bold mt-3 underline cursor-pointer'>See all contests</p>
       </div>
{/* ----------------------------------------------------------- */}
        <div className='w-1/2'>
        <div className='w-6 h-6 bg-gray-100 rounded flex-items-center justify-center mb-3'>
            💬
        </div>
        <h3 className='font-bold text-sm mb-2'>Join the forum</h3>
        <p className='text-ts text-gray-600 leading-4 w-[320px]'>
            Connect with talented artists, share advice, and take part in riveting conversations,
        </p>
        <p className='text-xs font-bold mt-3 underline cursor-pointer'>View the Forum</p>
       </div>
{/* ---------------------------------------------------------------- */}
             <div className='w-1/2'>
        <div className='w-6 h-6 bg-gray-100 rounded flex-items-center justify-center mb-3'>
            🔼
        </div>
        <h3 className='font-bold text-sm mb-2'>Upload the pixabay</h3>
        <p className='text-ts text-gray-600 leading-4 w-[320px]'>
            Join our community pf creators and start uploading your media
        </p>
        <button className='mt-3 bg-green-600 text-white text-xs px-5 py-2 rounded-full'>Upload</button>
        <p className='text-xs font-bold mt-3 underline cursor-pointer'>View the Forum</p>
       </div>


      </div>
    </div>
  )
}

export default Info
