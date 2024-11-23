import React from "react";
import styles from "../StyleContainer/Review.module.css";
import Male from "../Assessts/male.png"
import Female from "../Assessts/female.png"

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Neha T",
      avatar: Female, // Placeholder for avatar
      rating: 4,
      text: "I am so glad I chose Property Hub for my loan process. Their expert advice saved me a lot of time and effort.",
    },
    {
      id: 2,
      name: "Arjun K",
      avatar: Male, // Placeholder for avatar
      rating: 4,
      text: "The staff at Property Hub is very polite and supportive. They guided me perfectly for my Khatha update.",
    },
    {
      id: 3,
      name: "Priya M",
      avatar: Female, // Placeholder for avatar
      rating: 4.5,
      text: "From start to finish, Property Hub made sure I understood every step of the building licence process. Highly recommended!",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={index < rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={styles.reviewSection}>
      <h4 className={styles.sectionSubtitle}>What Our Customers Say</h4>
      <h2 className={styles.sectionTitle}>
        Hear From Those Who Trusted Us <br/> With Their Property Journeys
      </h2>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className={styles.avatar}
              />
              <div>
                <h5 className={styles.name}>{review.name}</h5>
                <div className={styles.rating}>{renderStars(review.rating)}</div>
              </div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
