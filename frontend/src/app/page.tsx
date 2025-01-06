"use client"
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([])
  const URL = process.env.NEXT_PUBLIC_API_URL


  useEffect(() => {
    const fetchActiveProducts = async () => {
      try {
        const response = await fetch(URL + 'products/active');
        const data = await response.json();
        setProducts(data)
      } catch (error) {
        console.error('No se pudo obtener los datos', error)
      }
    }
    fetchActiveProducts()
  }, [])



  return (
    <div>
      <Navbar />
      <main className="flex flex-wrap max-w-[75rem] mx-auto gap-4 pt-20 pb-10">
        {
          products.map((item, i) => (
            <ItemCard key={i}  item={item} />
          ))
        }
      </main>

    </div>
  );
}
