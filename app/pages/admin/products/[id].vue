<script setup lang="ts">

const route = useRoute()
const router = useRouter()

definePageMeta({
    layout: 'admin'
})

if (Number(route.params.id) < 1){
    await navigateTo('/admin/products')
    // router.push('/admin/products') ไม่แนะนำ
}

</script>

<template>
    <h1>Products ID: {{ route.params.id }}</h1>
</template>