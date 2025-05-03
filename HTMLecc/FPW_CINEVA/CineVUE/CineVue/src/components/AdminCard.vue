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
  <div class="col-6">
    <img :src="imageSrc" alt="immagine Admin" width="600"/>
  </div>
  <div class="col-6">
    <p><b>{{ name }}</b>: {{ description }}</p>
  </div>
  <div class="col-12">
    <hr>
  </div>
</template>
