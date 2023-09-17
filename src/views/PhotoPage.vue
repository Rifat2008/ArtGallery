<template>
  <pages-header />
  
  <div class="photo-page" v-if="isLoaded">
    <div class="photo-page__bcg" :style="{ backgroundImage: `url(${image.urls.regular})` }"></div>
    <div class="photo-page__container container">
      <div class="photo-page__header">
        <div class="photo-page__author">
          <div class="photo-page__author-photo">
            <img :src="image?.user?.profile_image?.small" alt="">
          </div>
            <div class="photo-page__author-info">
              <p class="photo-page__author-name">{{image?.user?.name}}</p>
              <a class="photo-page__author-instagram" :href="'https://www.instagram.com/' + image.user.social.instagram_username" target="_blank">
                @{{image?.user?.social?.instagram_username}}
              </a>
            </div>
        </div>
        <div class="photo-page__buttons">
          <button :class="['photo-page__button-like', {'selected': isSelected}]" @click="toggleFavorite(image)">
            <img src="../assets/like-icon.png" alt="like-icon">
          </button>
          <button class="photo-page__button-download">
            <img src="../assets/download-icon.png" alt="download-icon">
            <p class="photo-page__button-download-text">Download</p>
          </button>
        </div>
      </div>
      <div class="photo-page__image">
        <img :src="image.urls.regular" :alt="image.alt_description">
      </div>
    </div>
  </div>
</template>

<script>
import PagesHeader from '../components/PagesHeader.vue';

export default {
  components: {PagesHeader},
  data() {
    return {
      isLoaded: false,
      isSelected: false
    }
  },
  created() {
    this.setCurrentImage();
  },
  computed: {
    image() {
      return this.$store.getters.currentImage;
    },
  },
  methods: {
    async setCurrentImage() {
      try {
        await this.$store.dispatch('loadOne', this.$route.params.id);
        const image = this.$store.getters.currentImage;
        if (image && this.$store.state.favorite.some(item => item.id === image.id)) {
          this.isSelected = true;
        }
        this.isLoaded = true;
      } catch (error) {
        console.error('Ошибка!', error);
      }
    },
    toggleFavorite(image) {
      if (this.isSelected === false) {
        this.$store.commit('addToFavorite', image);
        this.isSelected = true;
      } else {
        this.$store.dispatch('deleteAndSyncFavorite', image);
        this.isSelected = false;
      }
    }
  }
  
}
</script>

<style scoped>
.photo-page {
  position: relative;
}

.photo-page__bcg {
  height: 100vh;
  background-size: cover; 
  background-position: center;
  filter: grayscale(100%);
}
.photo-page__container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.photo-page__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0 40px 0;
}
.photo-page__author {
  display: flex;
  align-items: center;
}
.photo-page__author-photo {
  width: 55px;
  height: 55px;
  overflow: hidden;
  border: 1px solid #fff; 
  border-radius: 10px;
  margin-right: 10px;
}

.photo-page__author-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-page__author-name {
  font-size: 30px;
}
.photo-page__author-instagram {
  font-size: 18px;
  color: #fff;
}

.photo-page__buttons {
  display: flex;
  align-items: center;
}
.photo-page__button-like {
  width: 49px;
  height: 49px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.selected {
  background-color: #6cd625;
}
.photo-page__button-download {
  width: 209px;
  height: 49px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-left: 23px;
  background-color: #FFF200;
  font-size: 20px;
}
.photo-page__button-download img {
  margin-right: 16px;
}
.photo-page__image {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
}
.photo-page__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 500px) {
  .photo-page__container {
    padding: 0 20px;
  }
  .photo-page__bcg {
    display: none;
  }
  .photo-page__header {
    padding: 40px 0 32px 0;
  }
  .photo-page__author-photo {
    width: 48px;
    height: 48px;
  }

  .photo-page__author-name {
    font-size: 24px;
    color: #000;
    max-width: 150px;
    overflow: hidden;
    white-space: nowrap;
  }
  .photo-page__author-instagram {
    font-size: 14px;
    color: gray;
  }
  .photo-page__button-like {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
  .photo-page__button-like img {
    width: 20px;
    height: 18px;
  }
  .photo-page__button-download {
    width: 40px;
    height: 40px;
    justify-content: center;
    padding-left: 0;
  }
  .photo-page__button-download img {
    width: 21px;
    height: 18px;
    margin-right: 0;
  }
  .photo-page__button-download-text {
    display: none;
  }
  .photo-page__image {
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
  }
  .photo-page__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

