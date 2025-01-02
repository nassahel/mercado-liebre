import React from 'react'
import { Product } from '../content/products'
import { PiHeartStraightThin, PiHeartStraightFill } from "react-icons/pi";

type Props = Product

const ItemCard = ({ category, description, image, isFavorite, name, price }: Props) => {
    return (
        <div className=' border rounded-md w-[17rem] h-[30rem] group cursor-pointer bg-white shadow-sm hover:shadow-lg duration-200 '>
            <figure className='h-[60%] border-b relative  duration-400 p-2'>
                <div className=' hidden group-hover:inline  absolute top-2 right-2 rounded-full p-1 bg-white text-xl text-blue-800 '>
                    {
                        isFavorite ? <PiHeartStraightFill /> : <PiHeartStraightThin />
                    }
                </div>
                <img src={image} alt={name} className='h-full mx-auto' />
            </figure>
            <div className='h-[40%] p-4'>
                <p className='font-semibold'>{name}</p>
                <p className='text-sm mb-6'>{description}</p>
                <p className='text-xl font-semibold'>${price}</p>
            </div>

        </div>
    )
}

export default ItemCard