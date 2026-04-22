import React from 'react';

interface ProductProps {
    title : string;
    price : number;
    category : string;
    isStockEmpty : boolean;
    discount : number;
    className?: string;
    label?: string;
    pricebaru?: number;
    image: string;
}

const ProductCard : React.FC<ProductProps> = ({title, price, category, isStockEmpty, discount, className, label, pricebaru, image}) => {
    if (isStockEmpty) {
        className += " bg-red-500 ";
        label = "Stock Habis";
    }
    if (discount > 0) {
        pricebaru = price - (price * discount / 100);
    }
    return  (
        <div className={className + " " + category + " card"}>
            <p>{label}</p>
            <div className='flex-container flex flex-row'>
            <img className="w-20" src={image} alt="" />
            <h1>{title}</h1>
            </div>
            <p>Kategori : {category}</p>
            {discount > 0 ? (
                <>
                    Diskon : {discount}%
                    <p>Rp. <span className={"line-through"}>{price}</span> {pricebaru}</p>
                </>
            ) : (
                <p>Rp. {price}</p>
            )}
        </div>        
    );
};

export default ProductCard;
