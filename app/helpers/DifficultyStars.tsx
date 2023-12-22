import React from "react";
import Stars from "../assets/Stars";

interface DifficultyRatingProps {
  rating: number;
}

const DifficultyStars: React.FC<DifficultyRatingProps> = ({ rating }) => {
  const filledStars = rating;

  const emptyStars = 5 - filledStars;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<Stars key={i} filled={true} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<Stars key={i + filledStars} filled={false} />);
  }

  return <div className="flex">{starIcons}</div>;
};

export default DifficultyStars;
