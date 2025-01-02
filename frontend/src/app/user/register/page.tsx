import Link from 'next/link';
import React from 'react'

type Props = {}

const page = (props: Props) => {

  const inputStyle: string = 'border rounded-lg py-2 px-4 outline-blue-600 mb-4';
  const labelStyle: string = ''

  return (
    <div>
      <form action="" className='flex flex-col bg-white px-6 py-6 w-[25rem] border rounded-lg'>
        <h2 className='text-center text-4xl font-semibold mb-4'>Registrarse</h2>
        <label className={labelStyle} htmlFor="name">Nombre</label>
        <input className={inputStyle} type="text" name="name" id="name" />
        <label className={labelStyle} htmlFor="address">Dirección</label>
        <input className={inputStyle} type="text" name="address" id="address" />
        <label className={labelStyle} htmlFor="phone">Teléfono</label>
        <input className={inputStyle} type="text" name="phone" id="phone" />
        <label className={labelStyle} htmlFor="password">Contraseña</label>
        <input className={inputStyle} type="text" name="password" id="password" />
        <button type='submit' className='bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg'>Aceptar</button>
      </form>
      <div className='text-center'>
      <p>Ya tenés cuenta? <Link href="/user/login" className='text-blue-600'>Iniciar sesión</Link></p>
      </div>
    </div>
  )
}

export default page