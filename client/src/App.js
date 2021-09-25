import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { useState } from 'react';
import UserContext from './context/UserContext';
import Manager from './components/fruit/Manager'
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/main">
            <Manager></Manager>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
