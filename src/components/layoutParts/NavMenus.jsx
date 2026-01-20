import React from 'react';
import { Link } from 'react-router-dom';

function NavMenus() {

  return (
    <>
      <nav className="md:ml-10 ml-0 hidden md:flex items-center space-x-8">
        <div className='group'>
          <Link to="/men" className="text-gray-900 hover:text-black pb-[25px] uppercase">
            Men
          </Link>
        </div>
        <div className='group'>
          <Link to="/women" className="text-gray-900 hover:text-gray-700 pb-[25px] uppercase">
            Women
          </Link>
        </div>       
      </nav>
      <nav className='md:hidden block'>
      <div className='block md:hidden'>
          <div className=' group'>
              {/* <img src="images/mobile/planters.png" className="w-7 h-7" alt='planters' loading="lazy" /> */}
            <Link to="/categories?category=planters" className="text-gray-900 hover:text-black pb-[25px] text-sm capitalize">
              Men
            </Link>
          </div>

          <div className=' group'>
              {/* <img src="images/mobile/tasla.png" alt='tasla' loading="lazy" className="w-7 h-7" /> */}
            <Link to="/categories?category=tasla" className="text-gray-900 hover:text-black pb-[25px] text-sm capitalize">
              Women
            </Link>
          </div> 
        </div>
      </nav>
    </>
  )
}

export default NavMenus
