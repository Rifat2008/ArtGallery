<template>
  
  <pages-header />
  
  <div class="favorite">
    <div class="favorite__line"></div>
    <div class="favorite__container container">
      <h1 class="favorite__titile">Избранное</h1>
      <app-galery :images="favorite"/>
    </div>
  </div>
  
</template>

<script>
import PagesHeader from '../components/PagesHeader.vue';
import AppGalery from '../components/AppGalery.vue';

export default {
components: {AppGalery, PagesHeader},
data() {
  return {
    favorite: [],
  }
},
mounted() {
  this.favorite = this.$store.getters.favorite;
}
}
</script>

<style scoped>
.favorite {
  padding-top: 94px;
  position: relative;
}
.favorite__line {
  height: 16px;
  width: 100%;
  background-color: #C4C4C4;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.favorite__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.favorite__titile {
  color: #000;
  font-size: 72px;
  font-weight: bold;
}
@media (max-width: 376px) {
  .favorite__titile {
    font-size: 36px;
  }
  .favorite {
    padding-top: 40px;
  }
  .favorite__line {
    display: none;
  }
}
</style>