<script setup lang="ts">
useSeoMeta({
    title: 'Admin Panel',
    description: 'Welcome to the admin panel of our Nuxt application.'
})
</script>

<template>
    <nav>
        <h1>Admin Panel</h1>
    </nav>

    <main>
        <slot></slot>
    </main>

</template>