import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors.js";
import { nanoid } from "@reduxjs/toolkit";
import css from "./CamperReviews.module.css";
import MyForm from "../Form/Form.jsx";

export default function CamperReviews() {
  const reviewsData = useSelector(selectCamper);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        setReviews(reviewsData.reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [reviewsData]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#FFD700" : "#CCCCCC" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={css.container}>
      <div className={css.reviews}>
        {loading && <b>Loading reviews...</b>}
        {error && <b>Error loading reviews!</b>}
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={nanoid()}>
              <div className={css.nameAndLater}>
                <p className={css.firstLater}>{review.reviewer_name[0]}</p>
                <div className={css.nameAndRating}>
                  <p className={name}>{review.reviewer_name}</p>
                  <p>{renderStars(review.reviewer_rating)}</p>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <MyForm />
    </div>
  );
}
