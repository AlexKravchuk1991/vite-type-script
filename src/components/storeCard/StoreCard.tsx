import { Link } from "react-router-dom"
import  style  from "./storeCard.module.css"

interface IStoreCardProps{
    id:number
    title:string
    images:string[]
    description:string
    price:number

}

export default function StoreCard({id,title,images,description,price}:IStoreCardProps) {
  return (<div className={style.productContainer}>
    <div key={id} className={style.itemContainer}>
    <h2>{title}</h2>
    <img className={style.imgCont} src={images[0]} alt="image" />
    <p>{description}</p>
    <p>{price} Euro</p>
    <Link to={String(id)}>подробнее</Link></div>
    </div>
  )
}
