import { ImageItem } from '../../components/ImageItem';

const IMG_URL = 'https://cdn2.thecatapi.com/images/';

export const BreedsImgPatternItem = (props) => {
  return (
    <div className="img__pattern_item">
      <ImageItem
        src={`${IMG_URL}${props.breed.reference_image_id}.jpg`}
        alt={props.breed.name}
      />
      <div
        className="img__pattern_overlay"
        onClick={() => props.handlerSingleBreedRedirect(props.breed.id)}
      >
        <div className="breeds__breed_link">
          {props.breed.name}
        </div>
      </div>
    </div>
  );
};
