import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import { useGlobal } from '../global/GlobalContext';
import axios from 'axios';
import WishlistButton from './WishlistButton';
import Skeleton from 'react-loading-skeleton';
import compressImage from "../utils/compressImage";

const ProductSliderHome = () => {
  const { token, wishlist, setWishlist } = useGlobal();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);

  // Function to fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const cachedProducts = sessionStorage.getItem('offerProducts');
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
        setLoading(false);
        return;
      }
      setLoading(true);
      console.log('token', token);

      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/get_active_products`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!Array.isArray(data.products)) {
        console.error('Error: Products data is not an array', data);
        return;
      }

    //  console.log('offer', data.products.is_sale === 1 );

      const offerProducts = data.products.filter((product) => product.is_sale === 1 );
      // console.log('offerProducts', offerProducts);

      // const discountProducts = data.products.filter((product) => {
      //   const regularPrice = Number(product.regular_price) || 0;
      //   const salePrice = Number(product.sale_price) || 0;
      //   return regularPrice > 0 && salePrice > 0 && ((regularPrice - salePrice) / regularPrice) * 100 >= 45;
      // });

      sessionStorage.setItem('offerProducts', JSON.stringify(offerProducts));
      setProducts(offerProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };


  // Fetch data on mount
  useEffect(() => {
    fetchProducts();
  }, [token]);

  // Calculate time left for the deal
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const today5PM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0);
      const targetTime = now > today5PM ? new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 17, 0, 0) : today5PM;
      return Math.max((targetTime - now) / 1000, 0);
    };

    setTimeLeft(calculateTimeLeft());

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secondsLeft = String(Math.floor(seconds % 60)).padStart(2, '0');

    return (
      <div className="flex gap-2">
        <div className="font-medium p-2 text-sm text-gray-500"><span className='text-black font-bold'>{hours}</span> <br /> hours</div> :
        <div className="font-medium p-2 text-sm text-gray-500"><span className='text-black font-bold'>{minutes}</span> <br /> mins</div> :
        <div className="font-medium p-2 text-sm text-gray-500"><span className='text-black font-bold'>{secondsLeft}</span> <br /> secs</div>
      </div>
    );
  };

  return (
    <div className="pt-3 pb-12 relative">
      {/* <div className="bg-[#8100ff] pt-3 pb-12 rounded-lg relative"> */}
      {/* <FaTag className="text-[#4b50542e] absolute top-0 left-0 w-[250px] h-[250px]" /> */}

      <h4 className="text-center my-8 text-2xl">
        <div className="text-lg md:text-2xl uppercase font-medium">Hey Deals: Grab Amazing Offers!</div>
        <p className="text-sm">Discover amazing offers tailored just for you!</p>
        <div className='mt-2 w-fit m-auto relative'>
          {/* <img src="images/shiningStar.png" className="absolute -left-7 -top-8 w-10"></img> */}
          {loading ? (
            <Skeleton width={150} height={35} />
          ) : (
            <div className="mt-2">{formatTime(timeLeft)}</div>
          )}

          {/* <img src="images/shiningStar.png" className="absolute -right-7 -bottom-8 w-10"></img> */}
        </div>

      </h4>


      <Swiper
        navigation
        loop={products.length > 1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          360: { slidesPerView: 2.1 },
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            {loading ? (
              <div className="bg-white overflow-hidden relative h-[225px] md:h-[450px] border border-gray-400 border-opacity-60">
                <Skeleton height={450} width={300} />
              </div>
            ) : (
              <div className="bg-white overflow-hidden relative h-[225px] md:h-[450px] border border-gray-400 border-opacity-60">
                {product.product_tag && product.product_tag !== 'null' && (
                  <span className="absolute bg-[#203466] text-white top-0 left-0 text-[10px] p-1">
                    {product.product_tag}
                  </span>
                )}
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={compressImage(product.primary_img, 400, 70, 'webp')}
                    alt={product.prod_name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-1 md:p-4 absolute bottom-0 w-full bg-white">
                  <div className='flex items-center justify-between'>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-600">
                      {product.brand_details?.brand_name}
                    </h4>
                    <WishlistButton 
                    product={product} 
                    wishlist={wishlist} 
                    setWishlist={setWishlist} 
                    token={token}  />
                  </div>

                  <Link to={`/product/${product.slug}`} className="text-gray-900 truncate max-w-fit text-nowrap text-xs block my-1" title={product.prod_name}>
                    {product.prod_name}
                  </Link>
                  <div className="flex gap-[1px] sm:gap-2 items-end my-1">
                    <p className="text-black text-[10px] sm:text-sm font-semibold md:font-bold flex gap-[2px]">
                      <span>₹</span><span>{product.sale_price}</span>
                    </p>
                    <p className="text-gray-500 text-[11px] line-through sm:text-sm flex gap-[2px]">
                      <span>₹</span><span>{product.regular_price}</span>
                    </p>
                    <p className="text_hightlight font-medium md:text-xs text-[10px]">
                      <span>{(((product.regular_price - product.sale_price) / product.regular_price) * 100).toFixed(2)}%</span> OFF
                    </p>
                  </div>

                  {product.product_quality && product.product_quality !== "null" && (
                    <p className="border truncate max-w-fit text-[10px] sm:text-xs p-1">
                      {product.product_quality}
                    </p>
                  )}
                </div>
              </div>
            )}

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ProductSliderHome;
