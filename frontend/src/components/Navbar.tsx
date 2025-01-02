import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';


type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='bg-mercado border-b border-neutral-300'>
            <div className='flex flex-col justify-between max-w-[75rem] min-w-[60rem] h-[6.5rem] mx-auto pt-2 pb-3'>
                <div className='flex gap-20'>
                    <Link href="/">
                        <img src="/img/mercado_liebre_logo.png" alt="Logo" className='w-36' />
                    </Link>
                    <div className='flex w-2/4 items-center bg-white pe-2 rounded-md overflow-hidden shadow-md border'>
                        <input type="search" name="" id="" className='w-full h-full outline-none px-3' />
                        <div className='border-s ps-3'>
                            <IoIosSearch className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between' >
                    <div className='flex items-center text-sm justify-end gap-5'>
                        <Link href="" className='flex items-center gap-1'><span>Categorías</span> <div className='pt-1'><IoIosArrowDown className='text-xs text-neutral-500' /></div>  </Link>
                        <Link href="">Ofertas</Link>
                        <Link href="">Cupones</Link>
                    </div>
                    <div className='flex items-center text-sm justify-end gap-5'>
                        <Link href="/administration/products">Administración</Link>
                        <Link href="/user/register">Creá tu cuenta</Link>
                        <Link href="/user/login">Ingresá</Link>
                        <Link href="">Favoritos</Link>
                        <Link href="">Mis compras</Link>

                        {/* <button>
                        <GoBell className='text-xl' />
                        </button> */}
                        <button>
                            <BsCart2 className='text-xl' />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar