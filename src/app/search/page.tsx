import Wrapper from '@/components/shared/wrapper'
import React, { Suspense } from 'react'
import SearchedProducts from './searchedProducts'

const Search = () => {
  return (
    <Wrapper>
        <section>
            {/* wrapping in suspense to avoid pre-rendering error */}
            <Suspense fallback={"Loading..."}>                
               <SearchedProducts/>
            </Suspense>
        </section>
    </Wrapper>
  )
}

export default Search