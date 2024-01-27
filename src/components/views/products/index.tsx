import ProductCard from '@/components/shared/productCard'
import Wrapper from '@/components/shared/wrapper'
import { getData } from '@/utils/fetchData'



const Products = async () => {
  const data = await getData('https://fakestoreapi.com/products')

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

export default Products