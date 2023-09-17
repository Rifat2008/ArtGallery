<template>
  <div class="gallery-card">
    <router-link v-slot="{navigate}" custom :to="{name: 'PhotoPage', params: {id: image.id}}">
      <img :src="image.urls.small" alt="image.alt_description" @click="navigate">
    </router-link>
  </div>
</template>

<script>

export default {
  props: ['image'],
}
</script>

<style scoped>
.gallery-card {
  width: 473px; 
  height: 440px; 
  border-radius: 10px;
  overflow: hidden; 
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 500px) { 
  .gallery-card {
    width: 335px; 
    height: 312px; 
  }
}

</style>