import { Product } from '~/utils/dataType'

const products: Product[] = [
    { id: 1, title: 'Product A', price: 100 },
    { id: 2, title: 'Product B', price: 200 },
    { id: 3, title: 'Product C', price: 300 }
]

export default defineEventHandler(async (event) => {
    return {
        products
    }
})