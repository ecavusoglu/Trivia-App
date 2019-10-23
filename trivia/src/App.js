import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HomeView } from './views/HomeView'
import { QuestionDetailView } from './views/QuestionDetailView'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Trivia',
            routes: [
                { component: HomeView , path: '/', exact: true },
                { component: QuestionDetailView , path: '/category/:category/id/:id', exact: true },
            ]
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}
