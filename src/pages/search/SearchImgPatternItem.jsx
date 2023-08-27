import { NavLink } from 'react-router-dom';
import { ImageItem } from '../../components/ImageItem';

const IMG_URL = 'https://cdn2.thecatapi.com/images/';

export const SearchImgPatternItem = (props) => {
  return (
    <div className="img__pattern_item">
      <ImageItem
        src={`${IMG_URL}${props.breed.reference_image_id}.jpg`}
        alt={props.breed.name}
      />
      <div className="img__pattern_overlay">
        {<NavLink
          onClick={() => props.handlerCurrentBreed(props.breed)}
          className="breeds__breed_link" to="/breed"
        >
          {props.breed.name}
        </NavLink>}
      </div>
    </div>
  );
};
