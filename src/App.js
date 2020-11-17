
import './App.css';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path='/'>
                <PersonalDetails></PersonalDetails>
            </Route>
            <Route path='/payment'>
                <Payment></Payment>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
