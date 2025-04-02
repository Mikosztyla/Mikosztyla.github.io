import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectDetail from "./ProjectDetail";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" component={Portfolio} />
                    <Route path="/project/:projectId" component={ProjectDetail} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;