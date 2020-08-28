import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './shared/components/Navigation/Navigation';

function App() {
    return (
        <Router>
            <Navigation />
            <main className='main'>
                {/* <Switch>
                    <Route path='/' exact component={StartPage} />
                    <Route path='/current-weather' component={WeatherPage} />
                    <Redirect to='/' />
                </Switch> */}
            </main>
        </Router>
    );
}

export default App;
