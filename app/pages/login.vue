<script setup lang="ts">
const { user, login } = useUser()

const input = ref({
    email: '',
    password: ''
})

if (user.value) {
    await navigateTo('/')
}

const router = useRouter()

const onLogin = async () => {
    await login(input.value)
    router.push('/')
    
}

</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="onLogin">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="input.email" id="email" name="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password"  v-model="input.password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>