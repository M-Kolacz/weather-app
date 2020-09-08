import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { DAYS10, TODAY, TOMORROW, START } from './shared/SSOT/paths';

import Navigation from './shared/components/Navigation/Navigation';
import StartPage from './pages/StartPage';
import TodayPage from './pages/TodayPage';

function App() {
    return (
        <Router>
            <Navigation />
            <main className='main'>
                <Switch>
                    <Route path={START} exact component={StartPage} />
                    <Route path={TODAY} component={TodayPage} />
                    <Route path={TOMORROW} component={TodayPage} />
                    <Route path={DAYS10} component={StartPage} />
                    <Redirect to={START} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
