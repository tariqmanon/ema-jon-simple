import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
   //const total = cart.reduce((total,prd) => total + prd.price,0);
   let total = 0;
   for(let i = 0; i<cart.length; i++){
       const product = cart[i];
       total = total + product.price;
   }

   let shipping = 0;
   if (total>40){
       shipping = 8.99;
   }else if(total>15){
       shipping = 4.99;
   }
   const tax = total/15;
   const grandTotal = (total+shipping+tax).toFixed(2);
   function formatNumber(num){
       const precision = num.toFixed(2);
       return Number(precision)
   }
   
    return (
        <div>
           <h3>Order Summary</h3>
            <h4>Items Ordered : {cart.length}</h4>
            <h4>Product Price : {total}</h4>
            <h4>Shipping Charge :{formatNumber(shipping)}</h4>
            <h4>Tax + vat : {formatNumber(tax)}</h4>
            <h4>Total Price: {grandTotal}</h4>
        </div>
    );
};

export default Cart;