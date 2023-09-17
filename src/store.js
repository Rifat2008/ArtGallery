import { createStore } from 'vuex';

const API_KEY = 'n3V1OqBIfArNxPBuSaPPm_Y1X1AKlLput3FjCh6hVpw';

const savedFavorite = localStorage.getItem('favoriteImages');
let initialFavorite = [];

try {
  initialFavorite = savedFavorite ? JSON.parse(savedFavorite) : [];
} catch (error) {
  console.error(error);
  initialFavorite = [];
}

export default createStore({
  state() {
    return {
      images: [],
      currentImage: {},
      favorite: initialFavorite
    }
  },
  
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
    setCurrentImage(state, image) {
      state.currentImage = image;
    },
    addToFavorite(state, image) {
      if (!state.favorite.includes(image)) {
        state.favorite.push(image);
        localStorage.setItem('favoriteImages', JSON.stringify(state.favorite));
      }
    },
    deleteFromFavorite(state, image) {
      state.favorite = state.favorite.filter((item) => item.id !== image.id);
    },
  },

  actions: {
    async fetchRandomImages({ commit }) {
      try {
        const resp = await fetch(`https://api.unsplash.com/photos/random?&count=9&client_id=${API_KEY}`);
        const images = await resp.json();
        commit('setImages', images);
      } catch (error) {
        console.error('Ошибка при загрузке фотографий', error);
      }
    },

    async fetchSearchingImages({ commit }, searchString) {
      try {
        const resp = await fetch(
          `https://api.unsplash.com/search/photos?query=${searchString}&client_id=${API_KEY}&per_page=9`
        );
        const images = await resp.json();
        commit('setImages', images.results);
      } catch (error) {
        console.error('Ошибка при загрузке фотографий', error);
        throw error;
      }
    },

    async loadOne({commit}, id) {
      try {
        const resp = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`);
        const image = await resp.json();
        commit('setCurrentImage', image);
      } catch (error) {
        console.error('Ошибка при загрузке фотографии', error);
      }
    },

    async deleteAndSyncFavorite({ commit, state }, image) {
      commit('deleteFromFavorite', image);
      localStorage.setItem('favoriteImages', JSON.stringify(state.favorite));
    },
  },

  getters: {
    images: (state) => {
      return state.images;
    },
    currentImage: (state) => {
      return state.currentImage;
    },
    favorite: (state) => {
      return state.favorite;
    },
  },
}
)