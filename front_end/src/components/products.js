
import { useEffect, useState } from "react"
import ProductCard from "./productcard"
import Searchbar from './searchbar';
import { useSearchParams } from "react-router-dom";
import Cartdetails from "./cartdetails";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();


  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
    .then(res=>res.json())
    .then(res=>setProducts(res.products))
  },[searchParams])


  return (
    <section id="products_page" className="grid min-h-screen">
      <Searchbar/>
     <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </section>
  );
}
