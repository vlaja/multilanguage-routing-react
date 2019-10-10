import React from 'react';
import { IntlProvider } from 'react-intl';
import { Route, Redirect } from 'react-router-dom';
import { AppLanguage } from 'const';

import { LanguageStrings } from '../localizations';

interface Props {
  RouterComponent: React.ComponentClass<any>;
  languages: { [k: number]: string };
  appStrings: { [prop: string]: LanguageStrings };
  defaultLanguage?: AppLanguage;
}

export const LocalizedRouter: React.FC<Props> = ({
  children,
  RouterComponent,
  appStrings,
  defaultLanguage
}) => (
  <RouterComponent>
    <Route path="/:lang([a-z]{2})">
      {({ match, location }) => {
        /**
         * Get current language
         * Set default locale to en if base path is used without a language
         */
        const params = match ? match.params : {};
        const { lang = defaultLanguage || AppLanguage.English } = params;

        /**
         * If language is not in route path, redirect to language root
         */
        const { pathname } = location;
        if (!pathname.includes(`/${lang}/`)) {
          return <Redirect to={`/${lang}/`} />;
        }

        /**
         * Return Intl provider with default language set
         */
        return (
          <IntlProvider locale={lang} messages={appStrings[lang]}>
            {children}
          </IntlProvider>
        );
      }}
    </Route>
  </RouterComponent>
);
