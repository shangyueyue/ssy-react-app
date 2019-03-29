import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const ContextPage = lazy(() => import('../pages/contextPage.js'));
const SubPage = lazy(() => import('../pages/hoc/SubPage'));

const router = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contextPage" component={ContextPage} />
        <Route path="/subPage" component={SubPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default router;
