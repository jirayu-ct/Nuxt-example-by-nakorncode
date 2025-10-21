<script setup lang="ts">
const error = useError()

</script>

<template>
    <h1>Error</h1>
    <p>Status: {{ error?.statusCode }}</p>
    <pre>{{ error }}</pre>
    <p>Message: {{ error?.statusMessage }}</p>
</template>