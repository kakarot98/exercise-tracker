import React, { useState, useEffect } from "react";
import axios from "axios";


const ExerciseList = () => {
  const [exercisesList, setExercisesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => setExercisesList(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deletExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((response) => {
        console.log(response.data);
        setExercisesList(exercisesList.filter((exer) => exer.id !== id));
        console.log("exercise has been deleted from the list as well!");
      })
      .catch((err) => console.log(err));
  };

  return <div>Exercise list here</div>;
};

export default ExerciseList;
