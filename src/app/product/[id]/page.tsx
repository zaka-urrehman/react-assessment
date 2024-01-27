import BuyNowButton from '@/components/shared/buyNowButton'
import Wrapper from '@/components/shared/wrapper'
import { getData } from '@/utils/fetchData'
import Image from 'next/image'
import Link from 'next/link'

const ProductDetails = async ({ params }: { params: { id: string } }) => {
    const data: Product  = await getData(`https://fakestoreapi.com/products/${params.id}`)
    
    // @ts-ignore
    if (data === "not found"){
       return <div className='flex justify-center items-center'>
        <p className='font-bold text-4xl'>Not Found</p>
       </div>
    }else{        
    
    const { id, title, description, price, category, image, rating } = data

    return (
        <Wrapper>
            <section className='px-20 pt-12'>
                <Link href={'/'} className='ml-2 font-medium text-lg'>Back</Link>
                <div className='mt-10 grid grid-cols-2 gap-x-16'>

                    <div className='bg-gray-50 rounded-lg shadow-lg p-2'>
                        <Image className='rounded-lg w-full h-full' src={image} alt='product image' height={1000} width={1000} />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>{title}</h1>

                        <div className='mt-8 font-semibold text-base'>
                            <h3 className='text-gray-400 '>Category</h3>
                            <p className=' mt-2'>{category}</p>
                        </div>

                        <div className='mt-8 font-semibold text-base'>
                            <h3 className='text-gray-400 '>Description</h3>
                            <p className=' mt-2 font-normal'>{description}</p>
                        </div>

                        <div className='mt-8 font-semibold text-base'>
                            <h3 className='text-gray-400 '>Price</h3>
                            <p className=' mt-2 font-bold text-2xl'>${price}</p>
                        </div>

                        <div className='mt-8'>

                            <BuyNowButton id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                        </div>
                    </div>

                </div>

            </section>
        </Wrapper>
    )
    }
}

export default ProductDetails