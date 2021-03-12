import React, { useEffect, useState } from "react";

const MealDetail = () => {
  const [meal, setMeal] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  return (
    <div>
      <h2>Meal quantity: {meal.strMeal}</h2>
    </div>
  );
};

export default MealDetail;
