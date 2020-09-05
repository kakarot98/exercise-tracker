import React, { useState } from "react";
import { useEffect } from "react";

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsername("test user");
    setUsers(["test user"]);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercises = {
      username: username,
      description: description,
      duration: duration,
      date: date,
      users: users,
    };
    console.log(exercises);
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
      </form>
    </div>
  );
};

export default CreateExercise;
