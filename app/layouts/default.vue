<script setup lang="ts">
const currentYear = new Date().getFullYear()

const { user, logout } = useUser()

interface NavItem {
    title: string
    to: string
    isExternal?: boolean
}

const navItems: NavItem[] = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Products', to: '/products' },

    { title: 'Nuxt Homepage', to: 'https://nuxt.com', isExternal: true }
]
</script>

<template>
    <nav>
        <ul>
            <!-- defualt nav list -->
            <li v-for="item in navItems" :key="item.title">
                <NuxtLink v-if="!item.isExternal" :to="item.to">{{ item.title }}</NuxtLink>
                <a v-else :href="item.to" target="_blank" rel="noopener">{{ item.title }}</a>
            </li>

            <!-- authenticated nav list -->
            <template v-if="!user">
                <li>
                    <NuxtLink to="/login">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sign-up">Sign up</NuxtLink>
                </li>
            </template>

            <li v-else>
                <button @click="logout">Logout</button>
            </li>
        </ul>
    </nav>

    <main>
        <slot></slot>
    </main>

    <footer>
        <p>© 2024 My Nuxt App</p>
    </footer>
</template>