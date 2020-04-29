import React, { Component } from 'react';
import ListProjectsComponent from './ListProjectsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectComponent from './ProjectComponent';
import ProjectItems from './ProjectItems';
import ProjectItemsUpdate from './ProjectItemsUpdate';
import TasksBoard from './TasksBoard';
import Kanban from './Kanban';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={ListProjectsComponent} />
                        <Route path="/projects" exact component={ListProjectsComponent} />
                        <Route path="/projects/:id" exact component={ProjectComponent} />
                        <Route path="/projects/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id1/tasks/:id2" exact  component={ProjectItemsUpdate} />
                        <Route path="/projects/:id/tasks/projects/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id/tasks/projects/task/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id/board/" exact component={TasksBoard} />
                        <Route path="/projects/:id/kanban/" exact component={Kanban} />
                        
                    </Switch>
                </>
            </Router>
        )
    }
}
export default Main;