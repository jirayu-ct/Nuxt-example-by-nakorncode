import { SignJWT } from "jose"
import { z } from "zod"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    const data = await z.object({
        email: z.string(),
        password: z.string().min(6)
    }).parseAsync(body)
    
    const user = users.find((u) => u.email === data.email && u.password === data.password)
    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password'
        })
    }
    const token = await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(new TextEncoder().encode(config.jwtSecret))

    setCookie(event, 'token', token, {
        httpOnly: true
    })

    return {
        data: {
            name: user.name,
            email: user.email
        }
    }
})