import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    console.log(product.images[0].image);

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src={product.images[0].image} // Assuming the product has an image field
          alt={product.name}
          className="card-img-top w-80 mx-auto"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link className="hover:no-underline text-xl" to={"/product/" + product._id}>{product.name}</Link>
            <p>{product.description}</p>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="card-text">${product.price}</p>
         <p className="btn bg-primaryBlue hover:text-primaryBlue text-white hover:bg-white hover:border-2  hover:border-primaryBlue"> <Link className="hover:no-underline" to={"/product/" + product._id} id="view_btn" >
            View Details
          </Link></p>
        </div>
      </div>
    </div>
  );
}
