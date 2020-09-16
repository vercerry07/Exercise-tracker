import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import Exerciselist from './components/exerciselist';
import Createexercise from './components/createexercise';
import Createuser from './components/createuser';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <br />
            <div className="container">
            <Route path="/" exact component={Exerciselist} />
            <Route path="/create" exact component={Createexercise} />
            <Route path="/user" exact component={Createuser} />
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App
