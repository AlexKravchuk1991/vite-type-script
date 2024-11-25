import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IStoreProduct } from "../../types/type";
import style from './StorePage.module.css'

export default function StorePage() {
  const { id } = useParams();

  const initialState: IStoreProduct = {
      id: 0,
      title: "",
      description: "",
      category: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      tags: [],
      brand: "",
      sku: "",
      weight: 0,
      dimensions: {
          width: 0,
          height: 0,
          depth: 0,
      },
      warrantyInformation: "",
      shippingInformation: "",
      availabilityStatus: "",
      reviews: [],
      returnPolicy: "",
      minimumOrderQuantity: 0,
      meta: {
          createdAt: "",
          updatedAt: "",
          barcode: "",
          qrCode: "",
      },
      images: [],
      thumbnail: "",
      map: function (arg0: (el: any) => any): import("react").ReactNode {
          throw new Error("Function not implemented.");
      }
  };

  const [product, setProduct] = useState<IStoreProduct>(initialState);
  const [randProd1, setRandProd1] = useState<IStoreProduct>(initialState);
  const [randProd2, setRandProd2] = useState<IStoreProduct>(initialState);

  const getProduct = async (id: string) => {
    
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

   
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;

    const res1 = await fetch(`https://dummyjson.com/products/${randomNumber1}`);
    const data1 = await res1.json();
    const res2 = await fetch(`https://dummyjson.com/products/${randomNumber2}`);
    const data2 = await res2.json();

    setRandProd1(data1);
    setRandProd2(data2);
    setProduct(data);
  };

  useEffect(() => {
    getProduct(id as string);
  }, [id]);

  
  const renderImage = (images: string[]) => {
    return images.length > 0 ? images[0] : ""; 
  };

  return (
    <div className={style.storeContainer}>
      <div className={style.cardContainer}>
        <h2>{randProd1.title}</h2>
        <img className={style.imgCont} src={renderImage(randProd1.images)} alt={randProd1.title} />
        <p>{randProd1.description}</p>
        <p>Price: {randProd1.price}</p>
        <Link to={`../Lesson16/${randProd1.id}`}>Подробнне</Link>
        
      </div>

      <div className={style.cardContainerMain}>
        <h2>{product.title}</h2>
        <img className={style.imgCont} src={renderImage(product.images)} alt={product.title} />
        <p>{product.description}</p>
        <p>Warranty - {product.warrantyInformation}</p>
        <p>Price: {product.price}</p>
        <Link to={'../Lesson16'}>Back</Link>
      </div>

      <div className={style.cardContainer}>
        <h2>{randProd2.title}</h2>
        <img className={style.imgCont} src={renderImage(randProd2.images)} alt={randProd2.title} />
        <p>{randProd2.description}</p>
        
        <p>Price: {randProd2.price}</p>
        <Link to={`../Lesson16/${randProd2.id}`}>Подробнне</Link>
      </div>
    </div>
  );
}
