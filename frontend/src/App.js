import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/NavBar.component'
import ExerciseList from './components/ExerciseList.component'
import EditExercise from './components/EditExercise.component'
import CreateExercise from './components/CreateExercise.component'
import CreateUser from './components/CreateUser.component'

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
    <Route path="/" exact component={ExerciseList} />
    <Route path="/edit/:id" exact component={EditExercise} />
    <Route path="/create" exact component={CreateExercise} />
    <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
