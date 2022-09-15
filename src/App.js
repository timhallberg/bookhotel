import "./App.css";
import Header from "./comp/Header";
import Router from "./comp/Router";
import Hero from "./comp/Hero"
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header>
    
      </Header>



      <Hero></Hero>
      <section>
        <div className="Main">
          <Router />
        </div>
      </section>
    </div>
  );
}

export default App;
