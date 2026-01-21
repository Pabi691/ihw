import React from 'react';
import './App.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-medium-image-zoom/dist/styles.css";
import 'react-loading-skeleton/dist/skeleton.css';
import "react-lazy-load-image-component/src/effects/blur.css";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';
import "swiper/css/pagination";

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import Payment from './pages/Payment';
import About from './pages/About';

import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/user/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import { LoadingProvider } from './global/LoadingContext';
import LoadingWrapper from './global/LoadingWrapper';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import SearchPage from './pages/SearchPage';
// mobile
// import Categories from './pages/mobile/Categories';
import TermsCondition from './pages/TermsCondition';
import Privacy from './pages/Privacy';
import ReturnPolicy from './pages/ReturnPolicy';
import Return from './pages/Return';
import OrderDetails from './components/user/OrderDetails';
import ResetPassword from './components/user/ResetPassword';
import SearchableTabs from './pages/SearchableTabs';
import AnswerPage from './pages/AnswerPage';
import VarifyEmail from './components/user/VarifyEmail';
import Services from './pages/Services';
import Branches from './pages/Branches';


function App() {
    return (
      <LoadingProvider>
        <AuthProvider>
        <Loader />
        <LoadingWrapper>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* inner pages */}
            <Route path="/about" element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/:branch' element={<Branches />} />
            <Route path="/terms-and-conditions" element={<TermsCondition />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact-us" element={<SearchableTabs />} />
            <Route path="/contact-us/page" element={<AnswerPage />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/search" element={<SearchPage />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/email-verification" element={<VarifyEmail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/u/profile" element={<Profile />} />
            <Route path="/myaccount" element={<ProtectedRoute><Profile section="Overview" /></ProtectedRoute>} />
            <Route path="/myaccount/orders" element={<ProtectedRoute><Profile section="My Orders" /></ProtectedRoute>} />
            <Route path="/myaccount/order/:orderId" element={<OrderDetails />} />
            <Route path="/myaccount/return/:orderId" element={<Return />} />
            <Route path="/myaccount/payments" element={<ProtectedRoute><Profile section="My Payments" /></ProtectedRoute>} />
            <Route path="/myaccount/addresses" element={<ProtectedRoute><Profile section="My Addresses" /></ProtectedRoute>} />
            <Route path="/myaccount/profile" element={<ProtectedRoute><Profile section="My Profile" /></ProtectedRoute>} />
            <Route path="/logout" element={<Profile section="Logout"/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<ProductPage showAll={true} />} />
            <Route path="/:categorySlug" element={<ProductPage />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/thank-you" element={<ThankYou/>} /> 
            {/* mobile */}
            {/* <Route path='/categories' element={<Categories />} /> */}
            <Route path="/myaccount/*" element={<Navigate to="/404" replace />} />            
            {/* Catch-all route for undefined pages */}
            <Route path="/404" element={<NotFound />} />
          </Routes>
          </LoadingWrapper>
        </AuthProvider>
        </LoadingProvider>
  );
  
}

export default App;
