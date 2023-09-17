<template>
  <div class="galery">
    <div class="galery__container container">
      <div class="galery__images">
        <galery-card 
          v-for="image in images" 
          :key="image.id"
          :image="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GaleryCard from './GaleryCard.vue';

export default {
  components: {GaleryCard},
  props: ['images'],
}

</script>

<style scoped>
.galery {
  padding: 114px 0px 200px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.galery__images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
@media (max-width: 1500px) { 
  .galery__images {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1000px) { 
  .galery__images {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 376px) { 
  .galery {
    padding: 50px 0px 140px 0px;
  }
  .galery__images {
    gap: 20px;
  }
}
</style>