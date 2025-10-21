import { parseAsync, z } from 'zod'
import { Product } from '~/utils/dataType'

const products: Product[] = [
    { id: 1, title: 'Product A', price: 100 },
    { id: 2, title: 'Product B', price: 200 },
    { id: 3, title: 'Product C', price: 300 }
]

export default defineEventHandler(async (event) => {
    const data = await readBody(event)

    try {
        const parsed = await z.object({
            title: z.string(),
            price: z.number().min(0)
        }).parseAsync(data)

        return {
            data: parsed
        }
    }
    catch (error) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request data',
            data: error
        })
    }
})