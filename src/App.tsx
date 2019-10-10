import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoute, AppLanguage } from 'const';
import * as views from 'views';
import 'normalize.css';
import 'typeface-open-sans';
import { AppLayout } from 'modules/layout';
import { LocalizedRouter, LocalizedSwitch, appStrings } from 'modules/i18n';

export const App: React.FC = () => (
  <LocalizedRouter
    RouterComponent={BrowserRouter}
    languages={AppLanguage}
    appStrings={appStrings}
  >
    <AppLayout>
      <LocalizedSwitch>
        <Route exact path={AppRoute.Home}>
          <views.Home />
        </Route>
        <Route exact path={AppRoute.Summary}>
          <views.Summary />
        </Route>
        <Route path="*">
          <views.GeneralError />
        </Route>
      </LocalizedSwitch>
    </AppLayout>
  </LocalizedRouter>
);
