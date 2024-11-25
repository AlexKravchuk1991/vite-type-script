import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/type";
import style from "./products.module.css";
import { Link } from "react-router-dom";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useCart } from "../../context/cartContext";


interface IQuantity{
    quantity: number|undefined
}

const schema = Yup.object().shape({
    quantity: Yup.number().min(1,'число не может быть меньше 1').max(20,'максимальное число должго быть меньше 20').integer('число должно быть целым').required('укажите число товаров')
})

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [quantityInt, setQuantityInt] = useState<IQuantity>({quantity:undefined})

  const {addToCart}=useCart();

  const addToCartFromProduct=(id:number,price:number,title:string)=>{
    addToCart({id,price,title,quantity:1})
    
  }

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setProducts(data);
  };

  

  const formik = useFormik({initialValues:{ quantity: undefined }  as IQuantity, validationSchema:schema, validateOnChange:false,
    onSubmit:(value:IQuantity,{resetForm})=>{
    setQuantityInt(value)
    getLimitProducts(value.quantity); 
    resetForm()
   
    

  }})

    const getLimitProducts = async (quantity:number|undefined)=>{
        if (quantity) {
            const res = await fetch(`https://fakestoreapi.com/products?limit=${quantity}`);
            const data = await res.json();
            setProducts(data);
          }}


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="lesson-container">
        <p>Укажите число товаров</p>
        <form onSubmit={formik.handleSubmit} className={style.form} action="">
            <input value={formik.values.quantity || ''}
          onChange={formik.handleChange}
          type="number"
          name="quantity"
          min="1"
          max="20"/>
            {formik.errors.quantity &&(<p className={style.errorMassage}>{formik.errors.quantity}</p>)}
            <MyButton type="submit" func={formik.handleSubmit}/>
        </form>
      <div className={style.productCont}>
        {products.map((product) => (
         
            <div className={style.cardCont} key={product.id}>
              
              <h3>{product.title}</h3>
             <div>
              <img
                className={style.imgCont}
                src={product.image}
                alt="prod photo"
              />
            </div>
            <div>
              {/* <MyButton text="to Cart" func={()=>addToCartFromProduct(product.id,product.price,product.title)}/> */}
              <button onClick={() => addToCartFromProduct(product.id, product.price, product.title)}>Add to Cart</button>
            <Link to={String(product.id)}>to Product</Link>
            
            </div>
            
            
            </div>
           
         
        ))}
      </div>
    </div>
  );
}
