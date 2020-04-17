import React, { Component } from 'react';
import ListProjectsComponent from './ListProjectsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectComponent from './ProjectComponent';
import ProjectItems from './ProjectItems';
import ProjectItemsUpdate from './ProjectItemsUpdate';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={ListProjectsComponent} />
                        <Route path="/projects" exact component={ListProjectsComponent} />
                        <Route path="/projects/:id" component={ProjectComponent} />
                        <Route path="/tasks" exact component={ProjectItems} />
                        <Route path="/tasks/:id/tasks" exact component={ProjectItems} />
                        <Route path="/tasks/new-list"  component={ProjectItemsUpdate} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default Main;