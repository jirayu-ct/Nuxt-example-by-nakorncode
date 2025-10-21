<script setup lang="ts">
definePageMeta({
    layout: false,
    middleware: 'only-admin'
})
</script>


<template>
    <nav style="color: red;">
        <h1>Admin Panel V2</h1>
    </nav>

    <main>
        <NuxtPage />
    </main>
</template>