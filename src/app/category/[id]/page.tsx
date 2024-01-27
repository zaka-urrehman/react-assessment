import ProductCard from '@/components/shared/productCard'
import Wrapper from '@/components/shared/wrapper'
import { getData } from '@/utils/fetchData'
import React from 'react'

const Category = async ({ params }: { params: { id: string } }) => {
  const data = await getData(`https://fakestoreapi.com/products/category/${params.id}`)
  if (data === "not found" || data.length === 0) {
    return <div className='flex justify-center items-center'>
      <p className='font-bold text-4xl'>Not Found</p>
    </div>
  } else {
    return (
      <Wrapper>
        <section className='grid lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
          {data.map((item: Product, index: number) => (
            <div key={index}>
              <ProductCard id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} rating={item.rating} />
            </div>
          ))}
        </section>
      </Wrapper>
    )
  }
}
export default Category