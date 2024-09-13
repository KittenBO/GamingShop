import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-center">
      {[...Array(fullStars)].map((_, i) => (
        <img key={i} src="GameList/star-icon.svg" alt="Star" className="w-4 h-4 mr-1" />
      ))}
      {hasHalfStar && <img src="GameList/half-star-icon.svg" alt="Half Star" className="w-4 h-4 mr-1" />}
    </div>
  );
};

const ReviewList = ({ gameAuthor, reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleShowMoreReviews = () => {
    setVisibleReviews(visibleReviews + 3);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row my-2 lg:my-8">
        <div className="md:w-1/3 md:mr-4 md:mb-6">
          <div className="mx-auto rounded-full mb-2 flex justify-center items-center">
            <img src={gameAuthor.avatar} alt={gameAuthor.name} className="w-1/3 md:w-1/2 xl:w-1/3 rounded-full" />
          </div>
          <div className="font-bold text-center text-xl">{gameAuthor.name}</div>
          <div className="flex justify-center">
            <StarRating rating={gameAuthor.rating} />
          </div>
        </div>
        <div className="mt-5 md:mt-0 xl:w-2/3">
          <TransitionGroup>
            {reviews.slice(0, visibleReviews).map((review, index) => (
              <CSSTransition key={index} timeout={300} classNames="review">
                <div className="mb-8 bg-grayBack shadow-md rounded-md p-4">
                  <div className="container w-full flex items-center">
                    <div className="w-4/5 flex flex-wrap">
                      <StarRating rating={review.rating} />
                      <p className="text-xs xs:text-sm sm:text-base 2xl:text-xl w-full">{review.text}</p>
                    </div>
                    <div className="w-1/5 flex flex-col items-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full sm:w-1/2 object-cover rounded-full mb-2"
                      />
                      <div className="text-sm sm:text-base font-bold text-center">{review.name}</div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {reviews.length > visibleReviews && (
            <div className="text-center">
              <button
                className="bg-primary text-white px-4 py-2 rounded"
                onClick={handleShowMoreReviews}
              >
                Показать еще
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
