import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function Productdetails({cartitems,Setcartitems}){
const [product,setProduct]=useState(null);
const [qty,setQty]=useState(1)
const {id}=useParams();
     useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        .then(res=>res.json())
        .then(res=>setProduct(res.product))
      },[])
    

  function addtocart(){
   const itemExist= cartitems.find((item)=>item.product._id==product._id)
  if(!itemExist){
    const newItem={
        product,qty 
    }
    Setcartitems((prev)=>[...prev,newItem])
    toast.info("Item Cart Added Successfully !!!")

  }
  }  

//   increase qty
function increaseqty(){
    if(product.stock==qty){
        return;
    }
    setQty((prev)=>prev+1)
}
//decrease qty
function decreaseqty(){
    if(qty>1){
        setQty((prev)=>prev-1)

    }
}
    return product && <>
    <section className="md:flex w-[100%] p-4  md:p-16 grid gap-3">
        <img className="w-[80%] md:w-[50%] md:h-1/2" src={product.images[0].image}/>
        <div className="w-[90%] md:w-[50%] grid gap-1">
            <h1 className="text-5xl font-semibold">{product.name}</h1>
            <p className="text-gray-400">Id:{product._id}</p>
            <hr/>
<p className="text-xl">Ratings:</p>
<div class="rating-outer">
    
    <div class="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}
    ></div>
</div>


<hr/>

<p className="text-2xl" id="product_price">${product.price}</p>
<div class="stockCounter  flex gap-2">
    <span onClick={decreaseqty} class="btn btn-danger minus">-</span>

    <input type="number" class="form-control count w-16" value={qty} readOnly />

    <span onClick={increaseqty} class="btn btn-primary plus">+</span>
</div>
 <button onClick={addtocart} disabled={product.stock==0} type="button" id="cart_btn" className="bg-primaryBlue p-2 text-white rounded mt-2 w-[100%] ">Add to Cart</button>

<hr/>

<p className="font-semibold">Status: <span id="stock_status">{product.stock>0?'In Stock':'Out Of Stock'}</span></p>

<hr/>

<h4 class="mt-2 font-semibold text-2xl">Description:</h4>
<p>{product.description}</p>
<hr/>
<p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

<div class="rating w-50"></div>
        
        </div>
    </section>
    </>
}