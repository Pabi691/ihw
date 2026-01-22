import React, { useState } from 'react';
import axios from 'axios';
// import MainLayOut from '../layout/MainLayOut';
import { useGlobal } from '../global/GlobalContext';
import { FaTrashCan } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import SimpleLayout from '../layout/SimpleLayout';

const Wishlist = () => {
  const { wishlist, addToCart, token, setWishlist } = useGlobal();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const removeFromWishlist = async (productId) => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/delete_wishlist_item/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishlist((prevItems) => prevItems.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  const openSizePopup = (item) => {
    console.log('item', item);
    setPopupItem(item);
    setShowPopup(true);
  };

  const closeSizePopup = () => {
    setShowPopup(false);
    setSelectedSize(null);
  };

  return (
    <SimpleLayout ProductsCount={`(${wishlist.length} ${wishlist.length > 1 ? 'items' : 'item'})`} title='My Wishlist'>
      <div className="wishlist-page p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold hidden md:block">
          My Wishlist
          {/* ({wishlist.length} Item{wishlist.length !== 1 ? 's' : ''}) */}
          ({wishlist.length} Item{wishlist.length !== 1 ? 's' : ''})
        </h2>
        {wishlist.length > 0 ? (
          <div className="wishlist-items my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              item.product ?
                <div key={item.id} className="wishlist-item border p-4 rounded-lg">
                  <Link to={`../product/${item.product.slug}`}>
                    <img
                      src={item.product.primary_img}
                      alt={item.product.prod_name} loading="lazy"
                      className="w-full h-96 object-cover rounded-lg object-top"
                    />
                  </Link>
                  <h3 className="text-sm font-semibold mt-2 text-nowrap overflow-hidden mr-2">{item.product.prod_name}</h3>
                  {!selectedSize ? (
                    <div className='flex items-center gap-3 my-2'>
                      <p className="text-black text-sm font-bold">₹{item.product.sale_price}</p>
                      <p className="text-gray-500 line-through text-sm">₹{item.product.regular_price}</p>
                    </div>
                  ) : (
                    <>
                      {Array.isArray(popupItem?.product_variation) &&
                        popupItem.product_variation.length > 0 &&
                        popupItem.product_variation
                          .filter(v => v.id === selectedSize)
                          .map(v => (
                            <div key={v.id} className="flex items-center gap-3 my-2">
                              <p className="font-bold">₹{v.sale_price}</p>
                              <p className="line-through text-gray-400">₹{v.regular_price}</p>
                            </div>
                          ))
                      }

                    </>
                  )}

                  <div className='flex justify-between border-t-2 pt-2'>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="mt-2 text-black text-sm underline"
                    >
                      <FaTrashCan />
                    </button>
                    <button
                      onClick={() => openSizePopup(item)}
                      className="text-white bg-[#203466] text-xs px-4 py-2 rounded-lg font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                :
                <div key={item.id} className="wishlist-item border p-4 rounded-lg">
                  <Link to={`../product/${item.slug}`}>
                    <img
                      src={item.primary_img}
                      alt={item.prod_name}
                      className="w-full h-96 object-cover rounded-lg object-top"
                    />
                  </Link>
                  <h3 className="text-sm font-semibold mt-2 text-nowrap overflow-hidden mr-2">{item.prod_name}</h3>
                  {!selectedSize ? (
                    <div className='flex items-center gap-3 my-2'>
                      <p className="text-black text-sm font-bold">₹{item.sale_price}</p>
                      <p className="text-gray-500 line-through text-sm">₹{item.regular_price}</p>
                    </div>
                  ) : (
                    <>
                      {Array.isArray(popupItem?.product_variations || popupItem?.product_variation) &&
                        (popupItem?.product_variations || popupItem?.product_variation).length > 0 &&
                        (popupItem?.product_variations || popupItem?.product_variation)
                          .filter(v => v.id === selectedSize)
                          .map(v => (
                            <div key={v.id} className="flex items-center gap-3 my-2">
                              <p className="font-bold">₹{v.sale_price}</p>
                              <p className="line-through text-gray-400">₹{v.regular_price}</p>
                            </div>
                          ))
                      }

                    </>
                  )}

                  <div className='flex justify-between border-t-2 pt-2'>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="mt-2 text-black text-sm underline"
                    >
                      <FaTrashCan />
                    </button>
                    <button
                      onClick={() => openSizePopup(item)}
                      className="text-white bg-[#203466] text-xs px-4 py-2 rounded-lg font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center my-8">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.29L12 20.77L11.38 20.29C6.21 16.28 2.5 13.06 2.5 9.14C2.5 6.34 4.68 4.25 7.25 4.25C8.89 4.25 10.46 5.14 11.25 6.42C12.04 5.14 13.61 4.25 15.25 4.25C17.82 4.25 20 6.34 20 9.14C20 13.06 16.29 16.28 11.12 20.29Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-center text-gray-700 font-semibold text-sm my-2">
              Your wishlist is feeling a little lonely 💔
            </p>
            <p className="text-center text-gray-400 mt-2 text-xs max-w-xs leading-5">
              But that's okay! Tap that ❤️ on your favorite items and build your dream list.
              Start discovering styles made just for you!
            </p>
            <button
              onClick={() => navigate('/')} // or use useNavigate if in React Router
              className="my-6 px-6 py-2 bg-[#203466] text-white text-sm rounded-md hover:bg-gray-800 transition-all"
            >
              Start Exploring
            </button>
          </div>


        )}
      </div>

      {showPopup && popupItem && (
        <div className="fixed inset-0 bg-[#203466] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <h3 className="text-lg font-semibold mb-4">Select Size</h3>
            <div className='mb-4 flex gap-2'>
              {(popupItem.product_variations || popupItem.product_variation)?.filter((size) => size.size && size.size.trim() !== '')
                .map((size) => (
                  <label
                    key={size.size_id}
                    className={`cursor-pointer relative border 
                    rounded-sm flex items-center justify-center p-1 text-xs 
                    font-medium transition-all duration-200 ease-in-out ${selectedSize === size.id
                        ? 'border-black ring-1 ring-black bg-[#203466] text-white'
                        : 'border-gray-300'
                      }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size.size}
                      checked={selectedSize === size.id}
                      onChange={() => setSelectedSize(size.id)}
                      className="absolute opacity-0 cursor-pointer"
                    />
                    {size.size}
                  </label>
                ))}
            </div>
            <button
              className="bg-[#203466] text-white px-4 py-1 rounded-sm w-full text-xs disabled:opacity-50"
              onClick={async () => {
                if (!selectedSize) return;

                setIsLoading(true);
                try {
                  await addToCart(popupItem.product, selectedSize);
                  setSuccess(true);
                  navigate('/cart');
                } catch (error) {
                  console.error('Error adding to cart:', error);
                } finally {
                  setIsLoading(false);
                }
              }}
              disabled={!selectedSize || isLoading}
            >
              {isLoading ? "Adding..." : success ? "Added!" : "Add to Cart"}
            </button>
            <button
              className="text-gray-500 absolute top-3 right-3"
              onClick={closeSizePopup}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </SimpleLayout>
  );
};

export default Wishlist;
