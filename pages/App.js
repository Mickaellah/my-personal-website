import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../Components/HomePage';
import About from '../components/AboutPage';
import Portfolio from '../components/PortfolioPage';
import Contact from '../components/Contact';

import {
	BrowserRouter as Router,
    Switch,
	Route,
    BrowserRouter
} from 'react-router-dom';

export default function App() {
    return (
        <>
        <Router>
            <NavBar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    )
}