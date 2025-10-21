export interface User {
    id: number
    name: string
    email: string
}


export const useUser = () => {

    const user = useState<User | null>('user', () => null)

    const login = async (data: { email: string, password: string}) => {
        try {
            await $fetch('/api/login', {
                method: 'POST',
                body: data
            })
            await getCurrentUser()
            alert('Login sucessful!')
        }
        catch (error) {
            alert('Login failed!')
        }
    }
    
    const logout = async () => {
        try {
            await $fetch('/api/logout', {
                method: 'POST',
            })
            user.value = null
            alert('Logout sucessful!')
        }
        catch (error) {
            alert('Logout failed!')
        }
    }

    const getCurrentUser = async() => {
        try {
            const fetch = useRequestFetch()
            const { data } = await fetch('/api/me')
            user.value = data
        }
        catch (error) {
            user.value = null
        }
    }

    return {
        user,
        login,
        logout,
        getCurrentUser
    }
}