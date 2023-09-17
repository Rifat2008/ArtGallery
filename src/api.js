const API_KEY = 'n3V1OqBIfArNxPBuSaPPm_Y1X1AKlLput3FjCh6hVpw';

const API_RANDOM_IMAGES = `https://api.unsplash.com/photos/random?&count=9&client_id=${API_KEY}`;

export async function fetchRandomImages() {
  try {
    const resp = await fetch(API_RANDOM_IMAGES);
    const images = await resp.json();
    return images;
  } catch (error) {
    console.error('Ошибка при загрузке фильмов', error);
    throw error; 
  }
}

export async function fetchSearchingImages(searchString) {
  try {
    const resp = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchString}&client_id=${API_KEY}`
    );
    const images = await resp.json();
    return images;
  } catch (error) {
    console.error('Ошибка при загрузке фильмов', error);
    throw error; 
  }
}