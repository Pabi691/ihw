import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayOut from '../layout/MainLayOut';
import { FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import ProductSizeAndColor from '../components/ProductSizeGuide';
import { useCart } from '../components/CartContext';

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const createSlug = (name) => name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  const { addToWishlist, addToCart, token } = useGlobal();
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/get_active_products`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status) {
          const selectedProduct = data.products.find((prod) => createSlug(prod.prod_name) === slug);
          setProduct(selectedProduct);
          setSelectedImage(selectedProduct.primary_img); // Set the initial main image
        }
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [slug]);

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishlist([...wishlist, product]);
      addToWishlist(product); 
    } else {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    }
  };

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCart([...cart, product]);
      addToCart(product); // Update the cart
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  if (!product) {
    return <p className="text-center text-gray-500 my-10">Loading product details...</p>;
  }

  

  return (
    <MainLayOut>

        <Breadcrumb
          category="Products"
          productName={product.prod_name} 
        />
      <div className="single-product-page max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
        <div className="flex flex-col sm:flex-row items-start gap-12 animate-fadeIn">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-2 sm:w-1/12 w-full">
            {[product.primary_img, ...(product.product_images || [])].map((img, index) => (
              <img
                key={index}
                src={img} loading="lazy"
                alt={`${product.prod_name} thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform transform ${
                  selectedImage === img ? 'scale-105 border-2 border-blue-500' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image Display */}
          <div className="w-full sm:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={selectedImage}
              alt={product.prod_name} loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Information */}
          <div className="w-full sm:w-1/2 flex flex-col space-y-6">
            <h1 className=" text-black font-bold">{product.prod_name}</h1>
            <p className=" text-gray-600 text-sm leading-relaxed">
              {product.prod_desc || 'No description available'}
            </p>

            <div className="flex items-center space-x-4">
              <p className="font-bold text-sm text-gray-800">
                ₹ {product.sale_price || product.regular_price}
              </p>
              {product.sale_price && (
                <p className="text-sm text-gray-500 line-through">₹ {product.regular_price}</p>
              )}
            </div>



            <ProductSizeAndColor />

            {/* Add to Cart and Wishlist Button */}
            <div className="flex items-center space-x-4 flex-wrap">
              <button
              onClick={() => handleAddToCart(product)}
                className="text-white bg-red-500 px-8 py-3 rounded-lg text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
              <FaCartPlus />Add to Cart
              </button>
              <button onClick={() => handleAddToWishlist(product)} className="text-red-500 border border-red-500 text-xl px-8 m-0 py-3 rounded-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                {wishlist.some((item) => item.id === product.id) ? <FaHeart /> : <FaRegHeart />} Add to whishlist
              </button>
            </div>

            {/* Product Highlights */}
            <div className="mt-6">
              <h2 className="font-bold text-lg mb-2">Key Highlights</h2>
              <ul className="list-disc ml-4 space-y-1 text-gray-700">
                <li>Fit: {product.fit || 'Regular Fit'}</li>
                <li>Material: {product.material || 'Not specified'}</li>
                <li>Sleeve: {product.sleeve || 'Full Sleeve'}</li>
                <li>Neck: {product.neck || 'Round Neck'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayOut>
  );
}

export default ProductDetails;
