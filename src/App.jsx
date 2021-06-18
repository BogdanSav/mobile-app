import {SigninComponent,VideosListContainer,Player} from "./components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {

  return (
    <Router>
      <Route exact path="/">
        <Redirect to={"/signin"}/>
      </Route>
      <Route path="/signin">
        <SigninComponent />
      </Route>
      <Route path="/list">
        <VideosListContainer/>
      </Route>
      <Route path="/player/:id">
          <Player/>
      </Route>
    </Router>

  );
}

export default App;
