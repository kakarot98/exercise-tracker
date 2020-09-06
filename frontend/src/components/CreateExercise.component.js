import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users/')
    .then(res => {
        if(res.data.length > 0){
            setUsername(res.data[0].username);
            setUsers(res.data.map(user => user.username));
        }
    })
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercises = {
      username: username,
      description: description,
      duration: duration,
      date: date
    };

    console.log(exercises);
    axios
      .post("http://localhost:5000/exercises/add", exercises)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("The Error is : " + err));

    window.location = "/";
  };

  return (
    <div>
      <h3>Create Exercise Logs here</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(selectedDate) => setDate(selectedDate)}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create the exercise"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
