'use client'
import Wrapper from '@/components/shared/wrapper'
import { decreaseProductQuantity, increaseProductQuantity } from '@/redux/slices/cartSlice'
import { useAppSelector,useAppDispatch } from '@/utils/hooks'
import { Divide, Trash2 } from 'lucide-react'
import Image from 'next/image'


const CartPage = () => {
  const dispatch = useAppDispatch()
  const { cart, totalQuantity, totalAmount } = useAppSelector((state: any) => state.allCart)

  const increaseQuantity = (id:number)=>{
    dispatch(increaseProductQuantity(id))
  }
  const decreaseQuantity = (id:number)=>{
  dispatch(decreaseProductQuantity(id))
  }

  return (
    <Wrapper>
      <section>
        <div className='max-w-7xl mx-auto'>
          <h1 className='font-bold text-2xl ml-4'>Your Cart</h1>
          <div className='lg:grid grid-cols-[65%,35%] py-8 gap-x-4'>

            <div>
              {/* cards */}
              {cart.map((item: CartProduct) => (
                <div key={item.id} className='m-4 p-4 bg-zinc-50 shadow-lg md:grid md:grid-cols-4 justify-items-center items-center'>
                  <Image src={item.image} alt='img' height={100} width={150} className=' md:mx-2 rounded-lg justify-self-start h-40 ' />

                  <div className=''>
                    <p className='my-1 text-lg '>{item.title}</p>
                  </div>

                  <div>
                    <p className=' font-bold'>${item.price} </p>
                  </div>

                  <div className='flex gap-x-2 items-center justify-end'>
                    <button
                    onClick={()=>increaseQuantity(item.id)}
                     className='bg-black text-white px-2 py-0.5 rounded-md'>+</button>
                    <p>{item.quantity}</p>
                    <button
                    onClick={()=>decreaseQuantity(item.id)}
                     className='bg-black text-white px-2 py-0.5 rounded-md'>-</button>
                  </div>

                </div>
              ))}
            </div>





            <div className=' shadow-lg rounded-md p-4 grid grid-cols-2 justify-items-center gap-y-4 max-w-3xl max-h-96 '>
              <h3 className='col-span-2 font-bold text-xl  mb-6'> Your Total</h3>
              <h3 className='text-lg'>Quantity</h3>
              <h3 className=''>{totalQuantity} items</h3>
              <h3 className='text-lg mt-32'>Sub Total</h3>
              <h3 className='mt-32'>${totalAmount}</h3>

              <div className='col-span-2 w-full px-10'>
                       <button disabled className={`disabled:cursor-not-allowed bg-black text-white w-full py-3 rounded-lg`}>
                        Checkout
                       </button>
              </div>

            </div>

          </div>

        </div>
      </section>
    </Wrapper>
  )
}

export default CartPage