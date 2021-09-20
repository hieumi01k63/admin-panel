import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <SideBar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={UserList} />
            <Route>404 not found!</Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
