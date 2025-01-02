"use client"
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
// import AddEditProductModal from '../modals/AddEditProductModal';
// import Swal from 'sweetalert2';
// import { sortData } from '../../utils/utils';
import { products } from '../../../content/products'


const page = () => {
    const [menus, setMenus] = useState([])
    const [modal, setModal] = useState(false);
    const [productEdit, setProductEdit] = useState(null)
    const [modalEdit, setModalEdit] = useState(false)
    const [search, setSearch] = useState('')





    const claseUlt = 'border h-full flex items-center justify-center w-1/3'
    return (
        <section className='relative'>
            {/* {modal && <AddEditProductModal setModal={setModal} modalEdit={modalEdit} setModalEdit={setModalEdit} productEdit={productEdit} />} */}
            <div className='flex justify-between'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-white py-2 px-4 my-2  rounded-md border-2 border-neutral-400 outline-none w-[25rem]' type="search" name="searchProd" placeholder='Buscar productos...' />
                <button onClick={() => setModal(true)} className='bg-white py-2 px-4 my-2  rounded-md border-2 border-neutral-400 hover:border-black duration-200'>Agregar Producto</button>
            </div>
            <div>
                {
                    menus ?
                        <section className='flex flex-col gap-1'>
                            <article className='bg-neutral-800 text-white text-center flex rounded-sm'>
                                <div className=' w-28 overflow-hidden border py-1'>
                                    <p>Imagen</p>
                                </div>
                                <div className='flex grow justify-evenly items-center'>
                                    <div className='flex h-full w-3/4'>
                                        <p className=' text-center  h-full flex items-center justify-center w-1/3 border py-1'>Nombre</p>
                                        <p className=' text-center  h-full flex items-center justify-center w-2/3 border py-1'>Descripción</p>
                                    </div>
                                    <div className='flex h-full w-1/4'>
                                        <p className={claseUlt}>Categoría</p>
                                        {/* <p className={claseUlt}>Oferta</p> */}
                                        <p className={claseUlt}>Precio</p>
                                    </div>
                                    <div className='w-20 flex text-2xl items-center justify-center gap-2'>
                                        <FaEdit />
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>
                            </article>
                            {
                                products.map((menu, i) => (
                                    // resultMenus.map((menu, i) => (
                                    <article key={i} className='bg-white flex rounded-sm'>
                                        <div className='h-28 w-28 overflow-hidden p-2'>
                                            <img src={menu.image} alt={menu.name} className='h-full object-cover' />
                                        </div>
                                        <div className='flex grow justify-evenly items-center'>
                                            <div className='flex h-full w-3/4'>
                                                <p className=' text-center border h-full flex items-center justify-center w-1/3'>{menu.name}</p>
                                                <p className=' text-center border h-full flex items-center justify-center w-2/3'>{menu.description}</p>
                                            </div>
                                            <div className='flex h-full w-1/4'>
                                                <p className={claseUlt}>{menu.category}</p>
                                                {/* <p className={`${claseUlt} ${menu.isOffer === true ? 'bg-green-300' : ''} `}>{menu.isOffer === true ? 'Si' : 'No'}</p> */}
                                                <p className={claseUlt}>${menu.price}</p>
                                            </div>
                                            <div className='w-20 flex flex-col text-2xl items-center justify-around gap-4'>
                                                <button><FaEdit className='' /></button>
                                                <button><RiDeleteBin6Line color='red' className='' /></button>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </section>
                        :
                        <p>Loading...</p>
                }
            </div>


        </section>
    )
}

export default page;