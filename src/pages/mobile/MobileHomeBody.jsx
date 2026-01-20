import React from 'react'
import HomeBannerMobile from '../../components/mobileComponents/HomeBannerMobile'
import AllCatMobile from '../../components/mobileComponents/AllCatMobile'
import BottomFixedNav from '../../components/mobileComponents/BottomFixedNav'

const MobileHomeBody = () => {
  
  return (
    <div>
      <div className=''>
        <HomeBannerMobile />
      </div>

      <div className='ms-2 remove_nav'><AllCatMobile slug="men" /></div>
      <div className='ms-2 remove_nav'><AllCatMobile slug="women" /></div>
      <div>
        <BottomFixedNav />
      </div>

    </div>
  )
}

export default MobileHomeBody
