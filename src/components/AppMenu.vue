<template>
  <div class="menu">
    <div class="menu__container container">
      <div class="menu__input-wrapper">
        <img src="../assets/search-icon.svg" alt="Изображение" class="menu__search-icon" @click="searchImages(searchValue)">
        <input 
          class="menu__input" 
          type="text" 
          placeholder="Поиск"
          v-model="searchValue" 
          @keydown.enter="searchImages(searchValue)"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    async searchImages() {
      try {
        const searchString = this.searchValue;
        await this.$store.dispatch('fetchSearchingImages', searchString);
      } catch (error) {
        console.error('Ошибка при выполнении поиска', error);
      }
      this.searchValue = '';
    },
  }
}
</script>

<style scoped>
.menu {
  min-height: 268px;
  background-image: url(../assets/menu-bcg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 16px solid #C4C4C4;
}
.menu__input-wrapper {
  position: relative;
}
.menu__input {
  min-width: 866px;
  padding: 21px 23px 21px 39px;
  font-size: 24px;
}
.menu__search-icon {
  position: absolute;
  top: 24px;
  right: 34px;
  cursor: pointer;
}
@media (max-width: 900px) { 
  .menu__input {
    min-width: 600px;
  }
}
@media (max-width: 630px) { 
  .menu__input {
    min-width: 350px;
  }
}

@media (max-width: 376px) { 
  .menu {
  min-height: 230px;
  border-bottom: 0;
  }
  .menu__input {
  min-width: 335px;
  padding: 20px 26px 22px 25px;
  }
  .menu__search-icon {
    position: absolute;
    top: 24px;
    right: 34px;
    cursor: pointer;
  }
}

</style>