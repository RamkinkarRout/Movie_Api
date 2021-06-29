import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

function App() {
  return (
    <Router>
      <div className="text-white bg-gradient-to-r from-black to-gray-900  font-nunito ">
        <ArrowCircleUpIcon
          className="w-10 h-10 z-50 text-yellow-600 animate-bounce fixed right-2 bottom-2 cursor-pointer transition-all duration-700"
          onClick={() => {
            window.scrollTo({
              top: (0, 0),
              behavior: "smooth",
            });
          }}
        />

        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
