import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from 'page/AboutPage';
import ProjectsPage from 'page/ProjectsPage';
import ContactPage from 'page/ContactPage';
import Loader from 'components/layout/component/loader/Loader';

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
          <Suspense fallback={<Loader />}>
            <AdminPanelPage />
          </Suspense>
        )}
      />
    </Switch>
  </BrowserRouter>
);
export default Routes;
