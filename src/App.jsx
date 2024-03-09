// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from './LandingPage';
// import MovieDetailsPage from './MovieDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/movie/:movieId" component={MovieDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
