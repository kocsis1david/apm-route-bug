import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Link, useLocation } from "react-router-dom";
import "./apm"
import { ApmRoute } from '@elastic/apm-rum-react'

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/other">Other</Link></li>
            </ul>

            <Switch>
                {/* replace Route to ApmRoute */}
                <Route path="/other" component={Test} />
                <Route path="/" component={Test} />
            </Switch>
        </BrowserRouter>
    );
}

function Test() {
    const location = useLocation();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(counter + 1);
    }, [location.pathname])

    return <h2>{counter}</h2>;
}

ReactDOM.render(<App />, document.body);