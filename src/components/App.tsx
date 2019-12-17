import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import GlobalStyle from 'styles';

import Menu from 'common/Menu';

const Intro = lazy(() => import('modules/Intro'));
const Leaderboard = lazy(() => import('modules/Leaderboard'));
const Bracket = lazy(() => import('modules/Bracket'));

const App: React.FC<RouteComponentProps> = () => (
  <main>
    <GlobalStyle />
    <Menu />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={Intro} exact />
        <Route path="/leaderboard" component={Leaderboard} exact />
        <Route path="/bracket" component={Bracket} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
