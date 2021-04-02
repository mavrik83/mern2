import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Header = () => {
  return <h2>Header</h2>;
};
const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};
const Landing = () => {
  return <h2>Landing</h2>;
};

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/surveynew" exact component={SurveyNew} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
