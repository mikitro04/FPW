<script setup>
    const props = defineProps({
    imageName: String,
    name: String,
    description: String
    });

    // Risolviamo l'URL in JavaScript
    const imageSrc = new URL(`../assets/img/${props.imageName}`, import.meta.url);
</script>

<template>
  <img :src="imageSrc" alt="immagine Admin" width="600"/>
  <p><b>{{ name }}</b>: {{ description }}</p>
  <p>\___________________________________________________/</p>
</template>
