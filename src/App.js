import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';

const HatPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop/hats' exact component={HatPage}/>
            </Switch>
        </div>
    );
}

export default App;
