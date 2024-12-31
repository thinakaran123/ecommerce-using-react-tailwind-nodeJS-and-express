import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cartpage({cartitems,Setcartitems}){
const [msg,setMsg]=useState(false);
    //   increase qty
function increaseqty(item){
    if(item.product.stock==item.qty){
        return;
    }
const updatedItems=cartitems.map((i)=>{
    if(i.product._id==item.product._id){
        i.qty++
    }
    return i;
})
Setcartitems(updatedItems)
}
//decrease qty
function decreaseqty(item){
    if(item.qty>1){
        const updatedItems=cartitems.map((i)=>{
            if(i.product._id==item.product._id){
                i.qty--
                }
        
        return i;
})
Setcartitems(updatedItems)}}
//remove function
function removeItem(item){
    const updatedItems=cartitems.filter((i)=>{
        if(i.product._id!==item.product._id){
            return true;
        }
    })
    Setcartitems(updatedItems)
}
//place order btn
function placeorder(){
    fetch(process.env.REACT_APP_API_URL+'/order/',{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(cartitems)
    })
    .then(()=>{Setcartitems([])
        setMsg(true);
        toast.success("Order placed !!!")
    })
}

    return cartitems.length>0? <Fragment> <div className="p-2">
    <h2 className="mt-5 md:text-xl">Your Cart: <b>{cartitems.length} items</b></h2>
    
    <div className="md:flex md:justify-between p-3 ">
        <div className="md:w-[50%]">
            {cartitems.map((item)=>(         
                  <Fragment>
            <hr />
            <div className="cart-item">
                <div className="md:justify-center md:p-5 md:flex w-[100%] grid grid-cols-2">
                    <div className="md:w-[50%]  ">
                        <img src={item.product.images[0].image} alt={item.product.name} />
                    </div>
                   <div className="md:w-[50%]  grid gap-2 md:flex md:flex-col md:gap-3"> 
                    <div className="">
                    <Link className="hover:no-underline md:text-4xl md:font-semibold text-xl" to={"/product/" + item.product._id}>{item.product.name}</Link>
                    </div>


                    <div className="text-xl bg-green-200 p-1 ">
                        <p id="card_item_price">${item.product.price}</p>
                    </div>

                    <div className="">
                        <div className="flex gap-1">
                            <span className="btn btn-danger minus" onClick={()=>decreaseqty(item)}>-</span>
                            <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                            <span className="btn btn-primary plus" onClick={()=>increaseqty(item)}>+</span>
                        </div>
                    </div>

                    <div className="" onClick={()=>{removeItem(item)}}>
                        <i id="delete_cart_item"   className="w-[100%] mt-1 fa fa-trash btn btn-danger"></i>
                    </div>

                </div>
                </div>
            </div>
            </Fragment>))}
            
            <hr />
        </div>

        <div className="md:w-[30%] p-4">
            <div className="order_summary grid gap-2">
                <h4 className="text-3xl font-semibold">Order Summary</h4>
                <hr />
                <p className="text-xl">Subtotal:  <span className="order-summary-values">{cartitems.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
                <p className="text-xl">Est. total: <span className="order-summary-values">${cartitems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)}</span></p>

                <hr />
                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeorder}>Place Order</button>
            </div>
        </div>
    </div>
</div></Fragment>:(!msg ? <h1 className="mt-3 text-2xl font-semibold p-3 text-center">Your cart is Empty !!!</h1>:<Fragment><h1 className="text-center text-2xl font-bold">Order Placed!!!</h1></Fragment>)
}