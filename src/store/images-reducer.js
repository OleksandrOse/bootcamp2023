import { imagesAPI } from '../api/api';

const SET_SINGLE_IMAGE = 'SET_SINGLE_IMAGE';
const TOGGLE_IMAGE_LOADING = 'TOGGLE_IMAGE_LOADING';
const SET_SLIDER_IMAGES = 'SET_SLIDER_IMAGES';

const initialState = {
  singleImage: {},
  isVotingImageLoad: { status: false },
  sliderImages: [],
  galleryImages: []
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SINGLE_IMAGE:
    return {
      ...state,
      singleImage: action.singleImage
    };
  case TOGGLE_IMAGE_LOADING:
    return {
      ...state,
      isVotingImageLoad: { status: action.status === 200 ? true : false }
    };
  case SET_SLIDER_IMAGES:
    return {
      ...state,
      sliderImages: action.images.slice(0, 5)
    };
  default:
    return state;
  }
};

export const setSingleImage = (image) => ({
  type: SET_SINGLE_IMAGE,
  singleImage: image
});

export const toggleSingleImageLoading = (status) => ({
  type: TOGGLE_IMAGE_LOADING,
  status: status
});

export const getSingleImage = () => {
  return (dispatch) => {
    dispatch(toggleSingleImageLoading(true));
    imagesAPI.getSingleImage()
      .then(data => {
        dispatch(setSingleImage(data[0]));
        dispatch(toggleSingleImageLoading(false));
      });
  };
};

export const setSliderImages = (images) => ({
  type: SET_SLIDER_IMAGES,
  images: images
});

export const getSliderImages = (breedId) => {
  return (dispatch) => {
    imagesAPI.getSliderImages(breedId)
      .then(data => {
        dispatch(setSliderImages(data));
      });
  };
};
