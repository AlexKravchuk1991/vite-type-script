import { log } from "console";
import { useEffect, useState } from "react";
import { IStoreProduct } from "../../types/type";
import style from "./store.module.css";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import StoreCard from "../storeCard/StoreCard";

interface IProductQuantity {
  quantity: string;
}

const schema = Yup.object().shape({
  quantity: Yup.number()
    .min(1, "число не может быть меньше 1")
    .max(1000, "максимальное число должго быть меньше 30")
    .integer("число должно быть целым")
    .required("укажите число товаров"),
});

export default function Store() {
  const [productData, setProductData] = useState<IStoreProduct[]>([]);

  const getFetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=1000");
    const data = await res.json();
    setProductData(data.products);
    console.log(productData);
  };

  const getLimitProducts = async (quantity: string) => {
    if (quantity) {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${quantity}`
      );
      const data = await res.json();
      setProductData(data.products);
      console.log(data);
    }
  };

  const formik = useFormik({
    initialValues: { quantity: "" } as IProductQuantity,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (value: IProductQuantity, { resetForm }) => {
      getLimitProducts(value.quantity);
      resetForm();
    },
  });

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="lesson-container">
      <form onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.quantity}
          onChange={formik.handleChange}
          type="string"
          name="quantity"
          placeholder="введите число товаров"
        />
        <span>{formik.errors.quantity}</span>
        <MyButton text="Sort" type="submit" />
      </form>
      <div className={style.productContainer}>
        {productData.map((product) => (
          <StoreCard id={product.id} title={product.title} images={product.images} description={product.description} price={product.price} />
         
        ))}
         </div>
      </div>
  );
}
