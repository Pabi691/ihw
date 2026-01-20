import React from 'react';
import MobileMainLayout from '../../layout/MobileMainLayout';
import CatMenMobile from '../../components/mobileComponents/CatMenMobileBanner';
import SeparateCatMenMobile from '../../components/mobileComponents/SeparateCatMenMobile';
import AllCatMenMobile from '../../components/mobileComponents/AllCatMobile';
import PlantersCategory from '../../components/PlantersCategory';

const Bucket = () => {
  return (
    <MobileMainLayout link='javascript:;' title="Bucket">
      Working on it...
        {/* <CatMenMobile />
        <img alt='coupon-code' loading="lazy" src={`${process.env.PUBLIC_URL}/images/mobile/coupon.png`} />

        <div className='my-3'>
          <h2 className='font-semibold text-sm md:text-xl md:text-center ms-3 md:ms-0 mb-3'>Men's Topwear</h2>
          <SeparateCatMenMobile slug="mens-topwear" />
        </div>
        <div className='mb-3 ms-3 md:hidden block'>
          <AllCatMenMobile slug="men" />
        </div> 
        <div className='mb-3 hidden md:block'>
          <PlantersCategory title="Trending Categories" />
        </div>  */}
    </MobileMainLayout>
  );
};

export default Bucket;
