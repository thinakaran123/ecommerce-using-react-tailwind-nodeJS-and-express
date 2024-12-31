const orderModel=require('../models/ordermodel');
const productModel=require('../models/productmodel');

exports.createOrder=async(req,res,next)=>{
    //console.log(req.body,'DATA');
 const cartItems=req.body;
 const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
 const status="pending";
 const order = await orderModel.create({cartItems, amount, status})


//updating stock value in db
 cartItems.forEach(async(item) => {
    const product= await productModel.findById(item.product._id);
    product.stock=product.stock-item.qty;
    await product.save();
    
 });

  
    res.json({
        success:true,
order    })
}
