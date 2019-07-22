import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Person from './components/Person';

function App() {

  let [isLoggedIn, onChangeLoggedIn] = useState(false);

  const onChangeButton = () => {
    onChangeLoggedIn(!isLoggedIn)
  }

  return (
    <Router>
      <div>
        <NavLink exact activeStyle={{ color: 'brown' }} to="/">Home</NavLink>
        <NavLink exact activeStyle={{ color: 'red' }} to="/about">About</NavLink>
        <NavLink exact activeStyle={{ color: 'red' }} to="/person/nived">Nived</NavLink>

        <button onClick={onChangeButton}>{isLoggedIn ? "logout" : "login"}</button>
      </div>

      <Route path="/" exact strict render={() => {
        return (
          <div>this is home page</div>
        )
      }} />
      <Route path="/about" exact strict component={AboutPage} />
      <Route path="/person/:personName" exact strict component={({ match }) => (
         isLoggedIn ? <Person match={match}/> : <Redirect to="/" />
      )} />
    </Router>

  );
}

export default App;
