import Link from 'next/link'
import AddToCartButton from './addToCartButton'
import Image from 'next/image'

const ProductCard = ({ id, title, price, description, category, image, rating }: Product) => {
  return (
    <div className='max-w-[330px] w-full  flex flex-col rounded-lg p-2 shadow-lg'>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center h-60 w-full rounded-lg overflow-hidden'>
          <Image src={image} alt='Product Image' height={1000} width={1000} className='h-60 w-44 ' />
        </div>

        <div className='mt-5  mx-3'>
          <h3 className='font-bold h-[61px] text-xl overflow-hidden line-clamp-2'>{title}</h3>
          <p className='text-sm'>{category}</p>
          <p className='mt-5 text-base h-[75px] overflow-hidden line-clamp-3 '>{description}</p>
          <div className='flex mt-5 gap-x-3'>
            <h3>Price</h3>
            <h3 className='font-bold'>${price}</h3>
          </div>

        </div>
      </Link>
      <div className='mt-5'>
        <AddToCartButton id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
      </div>
    </div>
  )
}

export default ProductCard