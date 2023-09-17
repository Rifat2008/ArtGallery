<template>
  <home-header />
  <app-menu />
  <app-galery :images="images"/>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue';
import AppGalery from '../components/AppGalery.vue';
import AppMenu from '../components/AppMenu.vue';

export default {
components: {AppMenu, AppGalery, HomeHeader},
mounted() {
  this.$store.dispatch('fetchRandomImages');
},
computed: {
  images() {
    return this.$store.getters.images;
  },
}

}
</script>