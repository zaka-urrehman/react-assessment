'use client'
import { useAppDispatch } from '@/utils/hooks'
import Image from 'next/image'
import { add } from '@/redux/slices/cartSlice'

const AddToCartButton = ({ id, title, price, description, category, image, rating }: Product) => {
  const dispatch = useAppDispatch()

  const addToCart = (product: CartProduct) => {
    dispatch(add(product))
  }


  return (
    <button onClick={() => addToCart({
      image,
      title,
      price,
      category,
      description,
      rating,
      id,
      quantity: 1
    })}
      className='bg-black flex justify-center py-4 rounded-lg gap-x-3 w-full'>
      <p className='text-white text-sm'>Add to cart</p>
      <Image src={'/cartIcon.svg'} alt="Add to cart" height={20} width={20} />
    </button>
  )
}

export default AddToCartButton