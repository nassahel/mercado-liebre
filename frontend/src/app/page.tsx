import Image from "next/image";
import { products } from '../content/products'
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-wrap max-w-[75rem] mx-auto gap-4 pt-20 pb-10">
        {
          products.map((item, i) => (
            <ItemCard  key={i}  {...item} />
          ))
        }
      </main>

    </div>
  );
}
