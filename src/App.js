import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Navbar, Job, Footer } from "./components";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Header} />

      <Route path="/job">
        <Job />
      </Route>

      <Route path="/job2">
        <Footer />
      </Route>
    </Router>
  );
};

export default App;
