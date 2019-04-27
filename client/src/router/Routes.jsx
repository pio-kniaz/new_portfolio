import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from 'page/AboutPage';
import ProjectsPage from 'page/ProjectsPage';
import ContactPage from 'page/ContactPage';

const AdminPanelPage = React.lazy(() => import('page/AdminPanelPage'));

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AboutPage} />
      <Route path="/projects" exact component={ProjectsPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route
        path="/cms"
        exact
        render={() => (
          <Suspense fallback={<div>Loading....</div>}>
            <AdminPanelPage />
          </Suspense>
        )}
      />
    </Switch>
  </BrowserRouter>
);
export default Routes;
