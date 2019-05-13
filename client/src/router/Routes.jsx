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
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route
        path="/cms"
        render={() => (
          <Suspense fallback={<Loader />}>
            <AdminPanelPage />
          </Suspense>
        )}
      />
      <Route path="/" component={AboutPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
