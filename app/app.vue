<script setup lang="ts">

const { getCurrentUser } = useUser()

await callOnce(async () => {
  await getCurrentUser()
})

// const config = useRuntimeConfig()
// const appConfig = useAppConfig()

// useSeoMeta({
//   title: 'Home Page',
//   description: 'Welcome to the home page of our Nuxt application.'
// })

// if(import.meta.server) {
//   console.log('server side.', config.apiToken)
// } else {
//   console.log('client side.', config.apiToken)
// }

</script>



<template>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- <div>
    <client-only>
      <h1>Hello, World!</h1>
      <MyButton />
    </client-only>

    <client-only>
      <h1>{{ config.apiToken }}</h1>
      <h1>{{ config.public.webTitle }}</h1>
      <h1>{{ config.public.webDescription }}</h1>
    </client-only>

    <p>{{ appConfig.theme.primaryColor }}</p>
    <p>{{ appConfig.title }}</p>
    <p>{{ appConfig.description }}</p>
  </div> -->
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>