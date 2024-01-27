'use client'
import { getCartTotal } from '@/redux/slices/cartSlice'
import { useAppDispatch, useAppSelector } from '@/utils/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const CartButton = () => {

  const dispatch = useAppDispatch()
  const { totalQuantity } = useAppSelector((state: any) => state.allCart)
  dispatch(getCartTotal())


  return (
    <Link href={'/cart'}>
      <div className='w-32 h-14 rounded-xl bg-black flex justify-center items-center gap-x-3'>
        <p className='text-white'>{totalQuantity}</p>
        <Image src={'/cartIcon.svg'} alt='cart icon' height={20} width={20} className='' />
      </div>
    </Link>
  )
}

export default CartButton