import React, { useState, useEffect } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
    };
    console.log(user);

    setUsername("");
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            required
            type="text"
            value={username}
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Create User"/>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
