import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from 'react'
import GlobalContextProvider from "./context/GlobalContext";



function App() {
  return (
    <Router>
      <Switch>
    <>
      <GlobalContextProvider>
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
      </GlobalContextProvider>
    </>
    </Switch>
    </Router>

  );
}

export default App;
