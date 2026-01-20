// Breadcrumb.js
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Breadcrumb({ category, productName }) {
  return (
    <nav className="breadcrumb text-gray-400 max-w-7xl mx-auto px-6 sm:px-8 lg:px-0 pb-6 pt-4 text-xs hidden md:block">
      <ul className="flex space-x-2 items-center">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <BiChevronRight className='text-lg' />
        <li>
          <Link to="/shop" className="hover:underline">
            {category || "Category"}
          </Link>
        </li>
        <BiChevronRight className='text-lg' />
        <li className="text-gray-800 font-semibold">
          {productName || "Product Name"}
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumb;
