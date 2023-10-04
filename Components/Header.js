import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='h-16 px-5 text-white py-11 bg-black flex justify-between items-center'>
      <div className='flex gap-7 text-3xl'>
      <Link href='/About'>About</Link>
      <Link href='/Product'>Product</Link>
      <Link href='/Contact'>Contact</Link>
      <Link href='/Signin'>Signin</Link>
      </div>
      
    </div>
  )
}

export default page
