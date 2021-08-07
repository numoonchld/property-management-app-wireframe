import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SuperAdminDashboard from "./components/SuperAdminDashboard";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route
        exact
        path="/super-admin-dashboard"
        component={SuperAdminDashboard}
      />
    </Switch>
  );
}
