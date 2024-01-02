import { useDispatch } from "react-redux";

import { setFilters } from "@redux";
import { useFiltersState } from "@hooks";

import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const Rating = () => {
  const dispatch = useDispatch();
  const { filters } = useFiltersState();

  const ratingArray = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleStarClick = (rating) => () => {
    const newRating = filters.rating === rating ? "0" : rating;
    dispatch(setFilters({ rating: newRating }));
  };

  return (
    <div className="flex gap-1">
      {ratingArray?.map((rating) => (
        <span
          key={rating}
          onClick={handleStarClick(rating)}
          className="cursor-pointer text-xl"
        >
          {filters.rating >= rating ? (
            <FaStar color="#ffc107" />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
