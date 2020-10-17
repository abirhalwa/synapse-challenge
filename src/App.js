import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Tree } from './components/Tree';
import { AddLesson } from './components/AddLesson';
import { EditLesson } from './components/EditLesson';
import { AddTopic } from './components/AddTopic';
import { EditTopic } from './components/EditTopic';
import { Message } from './components/Message';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

//to change the hamburger icon 
const changeIcon = (event) => {
  const menu = document.getElementsByClassName('treeComponent')[0];
  if (menu.style.left == "0px") {
    menu.style.left = "-100%";
  }
  else if (menu.style.left == "-100%") {
    menu.style.left = "0px";
  }

  if (event.target.tagName === "LABEL") {
    event.target.classList.toggle("change");
  }
  else {
    event.target.parentElement.classList.toggle("change");
  }
}

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Router>
          {/* <!-- hamburger menu icon --> */}
          <span className="srOnly">main menu</span>
          <input type="checkbox" id="toggle" autoComplete="off" />
          <label htmlFor="toggle" id="menuLabel" aria-hidden="true" className="toggle" onClick={changeIcon}>
            <div className="bar1" ></div>
            <div className="bar2" ></div>
            <div className="bar3"></div>
          </label>
          <div className="treeComponent"><Tree></Tree></div>
          {/* <!-- end of hamburger menu icon --> */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/home/first" />
            </Route>
            <Route path="/home/:message?" exact component={Message} />
            <Route path="/addLesson" component={AddLesson} exact />
            <Route path="/editLesson/:id" component={EditLesson} exact />
            <Route path="/addTopic/:id" component={AddTopic} exact />
            <Route path="/editTopic/:id" component={EditTopic} exact />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}
export default App;
