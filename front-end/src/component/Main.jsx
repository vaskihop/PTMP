import React, { Component } from 'react';
import ListProjectsComponent from './ListProjectsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectComponent from './ProjectComponent';
import ProjectItems from './ProjectItems';
import ProjectItemsUpdate from './ProjectItemsUpdate';
import TasksBoard from './TasksBoard';
import SerchProject from './SerchProject';
import MainPage from '../bodycomponents/MainPage';
import About from '../bodycomponents/About';
import Contributors from '../bodycomponents/Contributors';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        
                        <Route path="/" exact component={MainPage} />
                        <Route path="/about" component={About} />
                        <Route path="/contibuters" component={Contributors} />
                        <Route path="/projects" exact component={ListProjectsComponent} />
                        <Route path="/projects/:id" exact component={ProjectComponent} />
                        <Route path="/projects/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id1/tasks/:id2" exact  component={ProjectItemsUpdate} />
                        <Route path="/projects/:id/tasks/projects/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id/tasks/projects/task/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id/board/projects/:id/tasks/" exact component={ProjectItems} />
                        <Route path="/projects/:id/board/" exact component={TasksBoard} />
                        <Route path="/projects/serch/" exact component={SerchProject} />
                        
                        
                        
                    </Switch>
                </>
            </Router>
        )
    }
}
export default Main;