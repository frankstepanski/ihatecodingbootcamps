import React from 'react';
import Main from "./components/Main";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-191715856-1');
ReactGA.pageview(window.location.pathname + window.location.search);

import "./App.css";

function App() {
 
  return (
    <>
      <Main />
    </>
  );
}

export default App;