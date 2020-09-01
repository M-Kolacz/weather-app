import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './shared/components/Navigation/Navigation';
import StartPage from './pages/StartPage';
import TodayPage from './pages/TodayPage';

function App() {
    return (
        <Router>
            <Navigation />
            <main className='main'>
                <Switch>
                    <Route path='/' exact component={StartPage} />
                    <Route path='/today' component={TodayPage} />
                    <Redirect to='/' />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
