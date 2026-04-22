import React from 'react';
import ProductCard from '../components/productCard';

const ProductPage: React.FC = () => {
  return (
    <div className='flex flex-wrap'>
      <ProductCard className="product-card" title="ASUS" price={100} category="Tech" isStockEmpty={false} discount={0} image="image/logo192.png" />
      <ProductCard className="product-card" title="Gucci" price={200} category="Fashion" isStockEmpty={true} discount={20} image="image/logo192.png" />
      <ProductCard className="product-card" title="Mekdi" price={300} category="Food" isStockEmpty={false} discount={30} image="image/logo192.png" />
      <ProductCard className="product-card" title="Balenciaga" price={400} category="Fashion" isStockEmpty={true} discount={40} image="image/logo192.png" />
      <ProductCard className="product-card" title="KFC" price={500} category="Food" isStockEmpty={false} discount={50} image="image/logo192.png" />
    </div>
  );
};

export default ProductPage;
