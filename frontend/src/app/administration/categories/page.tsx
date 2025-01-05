"use client"
import AddCategoryModal from '@/components/AddCategoryModal';
import AddEditProductModal from '@/components/AddEditProductModal';
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
// import AddEditProductModal from '../modals/AddEditProductModal';
// import Swal from 'sweetalert2';
// import { sortData } from '../../utils/utils';


const page = () => {
    const [categories, setCategories] = useState([])
    const [modal, setModal] = useState(false);
    const [productEdit, setProductEdit] = useState(null)
    const [modalEdit, setModalEdit] = useState(false)
    const [search, setSearch] = useState('')
    const URL = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(URL + 'categories');
                const data = await response.json();
                setCategories(data)
            } catch (error) {
                console.error('No se pudo obtener los datos', error)
            }
        }
        fetchCategories()
    }, [modal])

    const claseUlt = 'border h-full flex items-center justify-center w-1/3'

    return (
        <section className='relative'>
            {modal && <AddCategoryModal setModal={setModal} />}
            <div className='flex justify-between'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-white py-2 px-4 my-2  rounded-md border-2 border-neutral-400 outline-none w-[25rem]' type="search" name="searchProd" placeholder='Buscar productos...' />
                <button onClick={() => setModal(true)} className='bg-white py-2 px-4 my-2  rounded-md border-2 border-neutral-400 hover:border-black duration-200'>Agregar categoría</button>
            </div>
            <div>


                <section className='flex flex-col gap-1'>
                    <article className='bg-neutral-800 text-white text-center flex rounded-sm'>

                        <div className='flex grow justify-evenly items-center'>
                            <div className='flex h-full w-3/4'>
                                <p className=' text-center  h-full flex items-center justify-center w-1/3 border py-1'>Nombre</p>
                                <p className=' text-center  h-full flex items-center justify-center w-2/3 border py-1'>Descripción</p>
                            </div>

                            <div className='w-20 flex text-2xl items-center justify-center gap-2'>
                                <FaEdit />
                                <RiDeleteBin6Line />
                            </div>
                        </div>
                    </article>
                    {
                        categories.length !== 0 ? categories.map((item: any, i) => (
                            <article key={i} className='bg-white flex rounded-sm'>
                                <div className='flex h-full w-3/4'>
                                    <p className=' text-center border h-full flex items-center justify-center w-1/3'>{item.name}</p>
                                    <p className=' text-center border h-full flex items-center justify-center w-2/3'>{item.description}</p>
                                </div>
                            </article>
                        ))
                            :
                            <p className='mt-6 text-lg'>Cargando...</p>
                    }
                </section>
            </div>


        </section>
    )
}

export default page;