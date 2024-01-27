"use client"
import { useAppDispatch } from '@/utils/hooks'
import { add } from '@/redux/slices/cartSlice'

const BuyNowButton = ({ id, title, price, description, category, image, rating }: Product) => {
  const dispatch = useAppDispatch()

  const addToCart = (product: CartProduct) => {
    dispatch(add(product))
  }

  return (
    <button
      onClick={() => addToCart({
        image,
        title,
        price,
        category,
        description,
        rating,
        id,
        quantity: 1
      })}
      className='w-full py-4 bg-black text-white rounded-lg'>
      Buy Now
    </button>
  )
}

export default BuyNowButton