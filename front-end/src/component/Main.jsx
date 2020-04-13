import React, { Component } from 'react';
import ListProjectsComponent from './ListProjectsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectComponent from './ProjectComponent';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={ListProjectsComponent} />
                        <Route path="/projects" exact component={ListProjectsComponent} />
                        <Route path="/projects/:id" component={ProjectComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default Main;