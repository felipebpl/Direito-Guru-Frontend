
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import FeedPage from './components/pages/Feed';
import Cadastro from './components/pages/Cadastro';
import { BrowserRouter as Router, Switch,   Route } from "react-router-dom";

 

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/feed' exact component={FeedPage}/>
        <Route path='/login' exact component={Cadastro}/>
      </Switch>
    </Router>
      </> 
    
  );
}

export default App;