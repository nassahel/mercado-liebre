import Link from 'next/link';
import React from 'react'

type Props = {}

const page = (props: Props) => {

  const inputStyle: string = 'border rounded-lg py-2 px-4 outline-blue-600 mb-4';
  const labelStyle: string = ''

  return (
    <div>
      <form action="" className='flex flex-col bg-white px-6 py-6 w-[25rem] border rounded-lg'>
        <h2 className='text-center text-4xl font-semibold mb-4'>Iniciar sesión</h2>
        <label className={labelStyle} htmlFor="email">Email</label>
        <input className={inputStyle} type="text" name="email" id="email" />
        <label className={labelStyle} htmlFor="password">Contraseña</label>
        <input className={inputStyle} type="text" name="password" id="password" />
        <button type='submit' className='bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg'>Ingresar</button>
      </form>
      <div className='text-center'>
      <p>No tenés cuenta? <Link href="/user/register" className='text-blue-600'>Registrarse</Link></p>
        <Link className='text-sm text-blue-600' href=''>Olvide mi contraseña</Link>
      </div>
    </div>
  )
}

export default page