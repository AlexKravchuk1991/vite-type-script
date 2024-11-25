import React from 'react'
import { useCart } from '../../context/cartContext'
import MyButton from '../myButton/MyButton';

export default function Cart() {
    const{cart, removeFromCart,clearCart}= useCart();
    console.log(cart);

    const calculateCartPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity,0)
      }
    
  return (
    <div className='lesson-container'>
        <h2>Shopping cart</h2>
        <button onClick={()=>clearCart()}>Очистить Корзину</button>
        <p>сумма товаров в корзине : {calculateCartPrice()}</p>
        <ul>
        {cart.map(el => (
            <li key={el.id}>{el.title} - quantity: {el.quantity}
            <button onClick={() => removeFromCart(el.id)}>Удалить из корзины</button>
            </li>
    
            
        ))}
        
        </ul>
       
    </div>
  )
}
