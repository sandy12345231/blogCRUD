import logo from './logo.svg';
import './App.css';
import React from 'react';
// import RoutePage from './component/RoutePage';
import Header from './component/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListUser from './component/ListUser';
import CreateUser from './component/CreateUser';
import UpdateUser from './component/UpdateUser';

function App() {
  return (
    <React.Fragment>
        
        
        <Router>
        <Header/>
            
          <Switch>
            <Route path="/" exact component={ListUser}/>
            <Route path="/createblog" exact  component={CreateUser}/>
            <Route path="/updateblog/:id" exact component={UpdateUser}/>
          </Switch>
                    
            </Router>

        
    </React.Fragment>
    
  );
}

export default App;
