"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import Link from 'next/link';
import Wrapper from '@/components/shared/wrapper';
import CartButton from '@/components/shared/cartButton';
import { usePathname,useRouter } from 'next/navigation';

export default function Header() {
  const [search, setSearch] = useState("")  
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e:any) =>{
    e.preventDefault()
    router.push(`/search?name=${search}`)
    setSearch("")
  }

  return (
    <Wrapper>
      <section className=' flex justify-between items-center my-[30px]  h-[70px]'>
        <div>
          <Link href={'/'}>
            <h1 className='font-bold text-xl'>Ecommerence</h1>
          </Link>
        </div>
        <div>
          <ul className='list-none flex gap-x-9 items-baseline'>
            <Link href={'/category/electronics'}>  <li className={` ${pathname === "/category/electronics" && "font-semibold"} text-base`}>Electronics</li></Link>
            <Link href={"/category/men's%20clothing"}><li className={`${pathname === "/category/men's%20clothing" && "font-semibold"} text-base`}>Mens Fashion</li></Link>
            <Link href={"/category/women's%20clothing"}><li className={` ${pathname === "/category/women's%20clothing" && "font-semibold"} text-base`}>Womens Fashion</li></Link>
            <Link href={'/category/jewelery'}><li className={`${pathname === "/category/jewelery" && "font-semibold"} text-base`}>Jewelry</li></Link>
          </ul >
        </div >
        <div className='flex justify-between h-12 items-center border-2 border-gray-200 rounded-xl lg:w-[270px] xl:w-[320px] px-2'>
          <input
           value={search}
           type="search"
           className='focus:outline-none px-2 text-xs h-full w-full'
           placeholder='Search'
           onChange={(e)=>setSearch(e.target.value)} 
           onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e)
            }
          }}           />
          <div
          onClick={handleSearch} className=''>
            <Search height={15} width={15} />
          </div>
        </div>

        <div>
          <CartButton />
        </div>
      </section>
    </Wrapper>
  )
}
