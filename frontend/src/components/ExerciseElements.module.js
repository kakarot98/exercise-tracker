import React from "react";
import { Link } from "react-router-dom";

const Exercise = ({ exercise, deleteExercise, key }) => {
  return (
    <div>
      <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0, 10)}</td>
        <td>
          <Link to={} />
        </td>
      </tr>
    </div>
  );
};

export default Exercise;
