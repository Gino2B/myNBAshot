import { Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import PlayerDetails from "../screens/PlayerDetails/PlayerDetails";
import PlayerEdit from "../screens/PlayerEdit/PlayerEdit";
import PlayerAdd from "../screens/PlayerAdd/PlayerAdd";
import Players from "../screens/Players/Players";
import SignUp from "../screens/SignUp/SignUp";
import SignOut from "../screens/SignOut/SignOut";
import SignIn from "../screens/SignIn/SignIn";
import UserProfile from "../screens/UserProfile/UserProfile";
import UserEdit from "../screens/UserEdit/UserEdit";
import UserSearch from "../screens/UserSearch/UserSearch";

const Main = (props) => {
  return (
    <>
      <Route exact path="/">
        <Home user={props.user} />
      </Route>
      <Route exact path="/players">
        <Players user={props.user} />
      </Route>
      <Route exact path="/players/:id">
        <PlayerDetails user={props.user} />
      </Route>
      <Route exact path="/players/:id/edit">
        <PlayerEdit user={props.user} />
      </Route>
      <Route exact path="/add">
        <PlayerAdd user={props.user} />
      </Route>
      <Route exact path="/login">
        <SignIn setUser={props.setUser} user={props.user} />
      </Route>
      <Route exact path="/sign-up">
        <SignUp setUser={props.setUser} user={props.user} />
      </Route>
      <Route path="/sign-out">
        <SignOut setUser={props.setUser} />
      </Route>
      <Route exact path="/users/:id">
        <UserProfile user={props.user} />
      </Route>
      <Route exact path="/users/:id/edit">
        <UserEdit user={props.user} />
      </Route>
      <Route exact path="/users">
        <UserSearch user={props.user} />
      </Route>
    </>
  );
};

export default Main;
