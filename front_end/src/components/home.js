import {Link} from 'react-router-dom';

export default function Home(){
    return <section className="bg-white min-h-screen grid place-items-center">
        <div className="grid gap-10">
        <h1 className="font-heroFont text-5xl font-semibold text-black">Thina's Store</h1>
        <Link
  to="/products"
  className="rounded-full no-underline hover:no-underline text-center decoration-wavy p-3 border-2 border-black text-2xl hover:text-white cursor-pointer hover:bg-primaryBlue hover:border-none text-black"
>
  Shop now
</Link>
    </div>
    </section>
}