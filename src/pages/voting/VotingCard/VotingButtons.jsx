import { ReactComponent as LikeImg } from '../../../assets/img/like.svg';
import { ReactComponent as FavouriteImg } from '../../../assets/img/favourite.svg';
import { ReactComponent as DislikeImg } from '../../../assets/img/dislike.svg';

export const VotingButtons = (props) => {
  return (
    <div className="voting__btns">
      <button
        onClick={() => {
          props.dispatch(props.createVoteThunk(props.singleImage.id, 1));
          props.dispatch(props.toggleSingleImageLoading(400));
        }}
        className="voting__like_btn voting__btn"
        title="Like"
      >
        <LikeImg />
      </button>

      <button
        onClick={() => {
          props.dispatch(props.addToFavoritesThunk(props.singleImage.id));
        }}
        className="voting__favourites_btn voting__btn"
        title="Add to favourites"
      >
        <FavouriteImg />
      </button>

      <button
        onClick={() => {
          props.dispatch(props.createVoteThunk(props.singleImage.id, 0));
          props.dispatch(props.toggleSingleImageLoading(400));
        }}
        className="voting__dislike_btn voting__btn"
        title="Dislike"
      >
        <DislikeImg />
      </button>
    </div>
  );
};
