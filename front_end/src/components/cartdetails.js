import { ShoppingCartIcon } from "@heroicons/react/24/solid"
export default function Cartdetails({cartitems}){
    return<>
    <div className="ml-2  mt-3 bg-primaryBlue w-24 p-2 rounded  text-white">
        <p className="">
            Cart <ShoppingCartIcon className="w-7 inline-block"/>{cartitems.length}
        </p></div>
    </>
}