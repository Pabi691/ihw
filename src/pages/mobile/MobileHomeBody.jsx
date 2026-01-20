import React, { useEffect, useState } from 'react'
import HomeBannerMobile from '../../components/mobileComponents/HomeBannerMobile'
import { useGlobal } from '../../global/GlobalContext'
import axios from 'axios'
import AllCatMobile from '../../components/mobileComponents/AllCatMobile'
import BottomFixedNav from '../../components/mobileComponents/BottomFixedNav'
// import SingleSlider from '../../components/SingleSlider'
// import TargetAudience from '../../components/TargetAudience'
// import ProductSliderHome from '../../components/ProductSliderHome'

const MobileHomeBody = () => {

  const [menCat, setMenCat] = useState([]);
  const [womenCat, setWomenCat] = useState([]);
  const { token } = useGlobal();

  useEffect(() => {
    const fetchCategories = async (category, storageKey, setCategory) => {
      const cached = sessionStorage.getItem(storageKey);
      if (cached) {
        setCategory(JSON.parse(cached));
        return;
      }
  
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/get_slug_data/${category}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const data = response.data.category_data;
        setCategory(data);
        // sessionStorage.setItem(storageKey, JSON.stringify(data));
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };
  
    if (token) {
      fetchCategories("men", "mencategories", setMenCat);
      fetchCategories("women", "womencategories", setWomenCat);
    }
  }, [token]);
  




  return (
    <div>
      <div className=''>
        <HomeBannerMobile />
      </div>
      {/* <img className='w-full' loading="lazy" alt='mpi-plastic-coupon' src={`${process.env.PUBLIC_URL}/images/mobile/coupon.png`} /> */}

      {/* <div className='ms-2 remove_nav'>
        <ProductSliderHome />
      </div> */}
      {/* <div className='flex gap-2 my-3'>
        <div className='men_cat_div w-1/2 ps-2 relative'>
          <Link to={'/men'}>
            <img loading="lazy" src='images/men.png' alt='men-image' className='w-full rounded-xl h-40 object-top object-cover'/>
          </Link>
        </div>
        <div className='women_cat_div w-1/2 pe-2 relative'>
          <Link to={'/women'}>
          <img src='images/women.png' loading="lazy" alt='women-image' className='w-full rounded-xl h-40 object-top object-cover'/>
          </Link>
        </div>
      </div> */}
      {/* <div className='ms-2 remove_nav'>
        <SingleSlider slug_name="get_slug_data/plain-tees" price_filter="599" title="Plain Tees Under 599" />
      </div> */}
      {/* <div className='flex flex-col justify-center items-center gap-10 my-14'>
        <img
          src={`${process.env.PUBLIC_URL}/images/coupon1.png`}
          className="h-28 lg:h-36 xl:h-48 2xl:h-56"
          alt="coupon1" loading="lazy"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/coupon2.png`}
          className="h-28 lg:h-36 xl:h-48 2xl:h-56"
          alt="coupon2" loading="lazy"
        />
      </div> */}
      {/* <div className='ms-2 remove_nav'>
        <SingleSlider slug_name="get_active_products" discountPercentage="45" title="a must-have wardrobe deals minimum 45% off" />
      </div>
      <div className='ms-2 remove_nav'>
        <SingleSlider slug_name="get_active_products" discountPercentage="25" title="Steal Now: 60% and Above" />
      </div>
      <div className='ms-2 remove_nav'>
        <SingleSlider slug_name="get_slug_data/supercombed-tees" price_filter="999" title="supercombed tees under rs 999" />
      </div>
      <TargetAudience />
      <div className='ms-2 remove_nav'>
        <SingleSlider cat_slug_name="mens-oversized-tees" slug_name="get_slug_data/mens-oversized-tees" price_filter="699" title="Oversized Tees Under Rs 699" />
      </div>
      <div className='ms-2 remove_nav'>
        <SingleSlider cat_slug_name="signature-t-shirts" title="Men signature tees under 999" price_filter="999" slug_name="get_slug_data/signature-t-shirts" />
      </div> */}

      <div className='ms-2 remove_nav'><AllCatMobile slug="planters" /></div>
      <div className='ms-2 remove_nav'><AllCatMobile slug="container" /></div>
      <div>
        <BottomFixedNav />
      </div>

    </div>
  )
}

export default MobileHomeBody
