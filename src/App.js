import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectDetail from "./ProjectDetail";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Portfolio} />
                    <Route path="/project/:projectId" component={ProjectDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;