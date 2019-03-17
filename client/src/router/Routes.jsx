import React from 'react';
import { Route , Switch , BrowserRouter } from 'react-router-dom';
import AboutPage from 'page/AboutPage';
import ProjectsPage from 'page/ProjectsPage';
import ContactPage from 'page/ContactPage';
import AdminPanelPage from 'page/AdminPanelPage';
const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AboutPage}/>
        <Route path="/projects" exact component={ProjectsPage}/>
        <Route path="/contact" exact component={ContactPage}/>
        <Route path="/cms" exact component={AdminPanelPage}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;
