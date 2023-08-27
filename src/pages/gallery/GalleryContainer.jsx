import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryImages, setGalleryImages } from '../../store/gallery-reducer';
import { GalleryPage } from './GalleryPage';

// eslint-disable-next-line react/display-name
export const GalleryContainer = React.memo(({ setModalActive }) => {
  const dispatch = useDispatch();
  const galleryImages = useSelector(state => state.galleryPage.galleryImages);

  useEffect(() => {
    dispatch(getGalleryImages());
    return () => dispatch(setGalleryImages([]));
  }, []);

  return (
    <GalleryPage galleryImages={galleryImages} setModalActive={setModalActive}/>
  );
});
