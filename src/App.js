import React from 'react'
import './Style.css'
import Profile from './components/Profile'
import Info from './components/Info'
import Projects from './components/Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route path='/' exact component={Profile}></Route>
        <Route path='/Info' component={Info}></Route>
        <Route path='/Projects' component={Projects}></Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
