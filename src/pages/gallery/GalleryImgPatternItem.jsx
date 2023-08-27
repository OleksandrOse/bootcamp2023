import { ImageItem } from '../../components/ImageItem';

export const GalleryImgPatternItem = (props) => {
  return (
    <div className="img__pattern_item">
      <ImageItem
        src={props.galleryImg.url}
        alt={props.galleryImg.id}
      />
    </div>
  );
};
