import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../types/type";
import style from './productPage.module.css'

export default function ProductPage() {
  const { id } = useParams();
  
//   const obj = useParams()
//   console.log(obj);
  

    const [product,setProduct] = useState<IProduct>({
        id: 0,
        title: 'string',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
          rate: 0,
          count: 0,
        }
      })

  const getProducts = async (id: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data)
  };

  useEffect(() => {
    getProducts(id as string);
  }, [id]);

  return <div className="lesson-container">
    <div className={style.productCard}>
        <img src={product.image} alt="" />
        <div className={style.descriptCont}>
            <h2>{product.title}</h2>
        <p className={style.description}>{product.description}</p>
        <p className={style.price}>{product.price} Евро</p>
        <button className={style.btnCont }> <Link to={'../products'}> back </Link></button>
        </div>
        
        
    </div>
    </div>;
}
