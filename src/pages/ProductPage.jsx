import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductPageBody from '../components/ProductPageBody';
import MainLayOut from '../layout/MainLayOut';
import MobileMainLayout from '../layout/MobileMainLayout';
import axios from 'axios';
import { useGlobal } from '../global/GlobalContext';
import NotFound from './NotFound';
import TryAgainButton from './TryAgainButton';
import { ProductService } from '../content/product-service';

function ProductPage({ showAll }) {
  const { categorySlug } = useParams();
  const [productLength, setProductLength] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catagoryProducts, setCatagoryProducts] = useState([]);
  const { token } = useGlobal();
  const navigate = useNavigate();

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    if (categorySlug && categorySlug !== 'categories') {
      // console.log('categorySlug', categorySlug);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/get_slug_data/${categorySlug}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data.status) {
        const dataProducts = response.data;
        setProductLength(dataProducts.total_products);
        setCatagoryProducts(dataProducts);
      } else {
        navigate('/404');
      }

    } else {
      const response = await ProductService.getAll();
      setProductLength(response.data.products.length);
      setProducts(response.data);
    }
    setLoading(false);
  }, [categorySlug, token, setCatagoryProducts, setProducts, navigate]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Show a loading indicator before the data is available
  if (loading) {
    return (
      <TryAgainButton />
    );
  }

  if (!products) {
    return (
      <NotFound />
    )
  }
  return (
    <>
      <div className='hidden md:block'>
        <MainLayOut>
          {(catagoryProducts || products) && (
            <ProductPageBody products={products} catagoryProducts={catagoryProducts} categorySlug={showAll ? null : categorySlug} />
          )}

        </MainLayOut>
      </div>
      <div className='md:hidden'>
        <MobileMainLayout ProductsCount={`${productLength} products`} title={showAll ? 'All Products' : categorySlug}>
          {(catagoryProducts || products) && (
            <ProductPageBody products={products} catagoryProducts={catagoryProducts} categorySlug={showAll ? null : categorySlug} />
          )}
        </MobileMainLayout>
      </div>

    </>
  )
}

export default ProductPage;
