import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_WkABPuLYdiUTXogvmCet1YJUx3E1sCFIaMl5oyaMZaflHz6s5zR3vHhrHQ6r1VkO';

export const breedsAPI = {
  async getBreeds() {
    try {
      const response = await axios.get(`${API_URL}/breeds`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export const votingAPI = {
  async getVotes() {
    try {
      const response = await axios.get(`${API_URL}/votes`, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getFavorites() {
    try {
      const response = await axios.get(`${API_URL}/favourites`, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async createVote(imageId, value) {
    try {
      const response = await axios.post(`${API_URL}/votes`, {
        'image_id': imageId,
        'value': value
      }, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        }
      });
      return response.status;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteVote(imageId) {
    try {
      const response = await axios.delete(`${API_URL}/votes/${imageId}`, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        }
      });
      return response.status;
    } catch (error) {
      console.log(error);
    }
  },
  async addToFavorites(imageId) {
    try {
      const response = await axios.post(`${API_URL}/favourites`, {
        'image_id': imageId,
        'sub_id': 'null'
      }, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        }
      });
      return response.status;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFromFavorites(favoriteId) {
    try {
      const response = await axios.delete(`${API_URL}/favourites/${favoriteId}`, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }
};

export const imagesAPI = {
  async getSingleImage() {
    try {
      const response = await axios.get(`${API_URL}/images/search?size=med`, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getSliderImages(breedId) {
    try {
      const response = await axios.get(`${API_URL}/images/search?breed_id=${breedId}&limit=5`, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getGalleryImages(galleryOrder, galleryType, galleryBreed, galleryLimit) {
    try {
      const response = await axios.get(`${API_URL}/images/search?order=${galleryOrder}&mime_types=${galleryType}&breed_id=${galleryBreed}&limit=${galleryLimit}`, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
