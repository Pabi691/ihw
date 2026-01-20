import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useGlobal } from '../../global/GlobalContext';
import Skeleton from 'react-loading-skeleton';



function NavMenus() {
  const [isMouseMoved, setIsMouseMoved] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { token } = useGlobal();


  // Track mouse movement and enable hover effect after mouse move
  useEffect(() => {
    // Only reset isMouseMoved when location changes (page navigation)
    setIsMouseMoved(false);
    setIsInitialLoad(true);

    const handleMouseMove = () => {
      setIsMouseMoved(true); // Enable hover when mouse moves
      setIsInitialLoad(false); // After first mouse move, stop considering it initial load
      window.removeEventListener('mousemove', handleMouseMove); // Clean up the event listener
    };

    // Add mousemove listener to detect when the user moves the mouse
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Cleanup on component unmount
    };
  }, [location]);

  return (
    <>
      <nav className="md:ml-10 ml-0 hidden md:flex items-center space-x-8">
        <div className='group'>
          <Link to="/planters" className="text-gray-900 hover:text-black pb-[25px] uppercase">
            Planters
          </Link>
          <span
            className={`absolute hidden ${isMouseMoved && !isInitialLoad ? 'group-hover:flex' : ''} group-hover:top-[50px] group-hover:opacity-100 transition 
                            duration-1000 ease-in-out gap-5 bg-white p-12 text-nowrap left-[7%] right-[7%] top-[95px] opacity-0`}
          >
            <ul>
              <li>
                <h4 className='my-3 font-medium'>Planters</h4>

                <ul className='text-sm flex flex-col gap-2 text-gray-600'>
                  {loading ? (
                    <>
                      <Skeleton width={100} height={15} />
                      <Skeleton width={100} height={15} />
                    </>
                  ) : 
                  // planters?.length > 0 ? (
                  //   planters?.map((item) => (
                  //     <li key={item.id}>
                  //       <Link to={`/${item.slug}`}>{item.category_name}</Link>
                  //     </li>
                  //   ))
                  // ) : 
                  (
                    <li>No items found</li>
                  )}
                </ul>

              </li>
            </ul>

          </span>
        </div>
        <div className='group'>
          <Link to="/bucket" className="text-gray-900 hover:text-gray-700 pb-[25px] uppercase">
            Bucket
          </Link>
          <span
            className={`absolute hidden ${isMouseMoved && !isInitialLoad ? 'group-hover:flex' : ''} group-hover:top-[50px] group-hover:opacity-100 transition 
                            duration-1000 ease-in-out gap-5 bg-white p-12 text-nowrap left-[7%] right-[7%] top-[95px] opacity-0`}
          >
            <ul>
              <li>
                <h4 className='my-3 font-medium'>Bucket</h4>
                <ul className='text-sm flex flex-col gap-2 text-gray-600'>
                    <li>No items found</li>
                </ul>
              </li>
            </ul>
          </span>
        </div>       
      </nav>
      <nav className='md:hidden block'>
      <div className='block md:hidden'>
          <div className=' group'>
              <img src="images/mobile/planters.png" className="w-7 h-7" alt='planters' loading="lazy" />
            <Link to="/categories?category=planters" className="text-gray-900 hover:text-black pb-[25px] text-sm capitalize">
              Planters
            </Link>
          </div>

          <div className=' group'>
              <img src="images/mobile/tasla.png" alt='tasla' loading="lazy" className="w-7 h-7" />
            <Link to="/categories?category=tasla" className="text-gray-900 hover:text-black pb-[25px] text-sm capitalize">
              Tasla
            </Link>
          </div>

          <div className=' group'>
          <img src="images/mobile/bucket.png" alt='bucket' loading="lazy" className="w-7 h-7" /> 
          <Link to="/categories?category=bucket" className="text-gray-900 hover:text-gray-700 pb-[25px] text-sm md:text-base capitalize md:uppercase">
              Bucket
            </Link>
          </div>
            
        </div>
      </nav>
    </>
  )
}

export default NavMenus
