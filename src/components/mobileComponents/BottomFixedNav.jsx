import React from 'react';
import { BiSolidCategoryAlt, BiSolidHomeSmile } from 'react-icons/bi';
import { FaJira, FaUser } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { themeTextColor } from '../../styles/typography';

const BottomFixedNav = () => {
  const location = useLocation();
  
  // Define active route styles
  const activeStyle = themeTextColor;
  const defaultStyle = 'text-gray-400';

  return (
    <div className='block md:hidden'>
      <div className='fixed bottom-0 z-50 w-full p-2 bg-white shadow-lg'>
        <div className='flex justify-between items-baseline'>
          <Link className='flex items-center flex-col gap-1 text-gray-500' to={'/'}>
            <BiSolidHomeSmile className={`text-xl ${location.pathname === '/' ? activeStyle : defaultStyle}`} />    
            <span className={`text-[10px] font-semibold ${location.pathname === '/' ? themeTextColor : 'text-gray-500'}`}>
              Home
            </span>
          </Link>

          <Link className='flex items-center flex-col gap-1 text-gray-500' to={'/categories'}>
            <BiSolidCategoryAlt className={`text-xl ${location.pathname === '/categories' ? activeStyle : defaultStyle}`} />
            <span className={`text-[10px] font-semibold ${location.pathname === '/categories' ? themeTextColor : 'text-gray-500'}`}>
              Categories
            </span>
          </Link>

          <Link className='flex items-center flex-col gap-1 text-gray-500' to={'/campaign/explore'}>
            <FaJira className={`text-xl ${location.pathname === '/campaign/explore' ? activeStyle : defaultStyle}`} />
            <span className={`text-[10px] font-semibold ${location.pathname === '/explore' ? themeTextColor : 'text-gray-500'}`}>
              Explore
            </span>
          </Link>

          <Link className='flex items-center flex-col gap-1 text-gray-500' to={'/myaccount'}>
            <FaUser className={`rounded-full text-xl ${location.pathname === '/myaccount' ? activeStyle : defaultStyle}`} />
            <span className={`text-[10px] font-semibold ${location.pathname === '/myaccount' ? themeTextColor : 'text-gray-500'}`}>
              Profile
            </span>    
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomFixedNav;
