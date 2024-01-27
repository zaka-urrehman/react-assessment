// product fetched from API
interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: { rate: number, count: number }
  }

//product added to cart
interface CartProduct{  
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
  quantity: number
}

// state of cart
interface CartState{
  cart:CartProduct[]
  totalQuantity:number
  totalAmount:number
}