import React from 'react';

function HomeBanner() {
  return (
    <>
      <div className='grid grid-rows-3 grid-flow-col'>
        <div className='row-span-6'>
            <img loading="lazy" className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/images/horizontal/banner_20.jpg`} alt='Banner Image'/>
        </div>
        <div className='row-span-6'>
            <img loading="lazy" className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/images/horizontal/banner_10.jpg`} alt='Banner Image'/>
        </div>
      </div>
    </>
  )
}

export default HomeBanner
