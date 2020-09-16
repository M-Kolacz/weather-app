import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { DAYS10, TODAY, TOMORROW, START } from './shared/SSOT/paths';

import Navigation from './shared/components/Navigation/Navigation';
import DailyForecast from './pages/DailyForecast';
import DayForecast from './pages/DayForecast';
import StartPage from './pages/StartPage';

function App() {
    return (
        <Router>
            <Navigation />
            <main className='main'>
                <Switch>
                    <Route path={START} exact component={StartPage} />
                    <Route path={TODAY} component={DayForecast} />
                    <Route path={TOMORROW} component={DayForecast} />
                    <Route path={DAYS10} component={DailyForecast} />
                    <Redirect to={START} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
