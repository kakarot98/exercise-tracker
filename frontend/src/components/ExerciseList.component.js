import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Exercise = (props) => {
    return (      
        <tr>
          <td>{props.exercise.username}</td>
          <td>{props.exercise.description}</td>
          <td>{props.exercise.duration}</td>
          <td>{props.exercise.date.substring(0, 10)}</td>
          <td>
            <Link to={"/edit"+props.exercise._id}>Edit</Link> | <button onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</button>
          </td>
        </tr>      
    );
  };
  

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
        setExercisesList(exercisesList.filter((exer) => exer._id !== id));
        console.log("exercise has been deleted from the list as well!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Exercise entries</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            exercisesList.map((currentExercise) => {
              return (
                <Exercise
                  exercise={currentExercise}
                  deleteExercise={deletExercise}
                  key={currentExercise._id}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
