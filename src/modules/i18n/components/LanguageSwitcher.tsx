import React from 'react';
import { AppLanguage } from 'const';
import { NavLink, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { list, link } from 'theme';
import { css } from 'aphrodite/no-important';

import { appStrings } from '..';

export const LanguageSwitcher: React.FC = () => {
  const { pathname } = useLocation();
  const { locale, messages } = useIntl();

  return (
    <ul className={css(list.container)}>
      {Object.keys(AppLanguage).map(lang => (
        <li key={lang} className={css(list.item)}>
          <NavLink
            className={css(link.primary)}
            activeClassName={css(link.active)}
            to={getMatchingRoute(AppLanguage[lang])}
          >
            {AppLanguage[lang]}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  function getMatchingRoute(language: string) {
    /**
     * Get the key of the route the user is currently on
     */
    const [, route] = pathname.split(locale);
    const routeKey = Object.keys(messages).find(key => messages[key] === route);

    /**
     * Find the matching route for the new language
     */
    const matchingRoute = appStrings[language][routeKey];

    /**
     * Return localized route
     */
    return `/${language}` + matchingRoute;
  }
};
