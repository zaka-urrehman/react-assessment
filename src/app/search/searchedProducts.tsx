"use client"
import ProductCard from '@/components/shared/productCard'
import Wrapper from '@/components/shared/wrapper'
import { getData } from '@/utils/fetchData'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'


const SearchedProducts = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('name')
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData(`https://fakestoreapi.com/products/`);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])

    // Filter the products based on the search parameter
    const filteredData = data.filter((item: any) => item.title.toLowerCase().includes(search?.toLowerCase()));
    if (filteredData.length == 0) {
        return <div className='font-bold text-center text-3xl'>
            <p>No product found</p>
        </div>
    } else {


        return (
            <section className='grid lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
                {filteredData.map((item: Product, index: number) => (
                    <div key={index}>
                        <ProductCard id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} rating={item.rating} />
                    </div>
                ))}
            </section>
        )
    }
}

export default SearchedProducts