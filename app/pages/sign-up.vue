<script setup lang="ts">
const router = useRouter()

const input = ref({
    name: '',
    email: '',
    password: ''
})

const onSignUp = async () => {
    try {
        console.log('Signing up with', input.value)
        await $fetch('/api/sign-up', {
            method: 'POST',
            body: input.value
        })
        alert('Sign up successful!')
        router.push('/login')
    }
    catch (error) {
        console.error('Sign up failed', error)
        alert('Sign up failed. Please try again.')
        return
    }
}
</script>

<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="onSignUp">
            <div>
                <label for="name">Username:</label>
                <input type="text" id="name" v-model="input.name" name="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="input.email" name="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="input.password" name="password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>