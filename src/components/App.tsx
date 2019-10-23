import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import GlobalStyle from 'styles';

const Intro = lazy(() => import('modules/Intro'));
const Leaderboard = lazy(() => import('modules/Leaderboard'));

const App: React.FC<RouteComponentProps> = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={Intro} exact />
      </Switch>
      <Switch>
        <Route path="/leaderboard" component={Leaderboard} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
