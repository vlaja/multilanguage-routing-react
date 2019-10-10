import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute, AppRouteTitles } from 'const';
import { useIntl } from 'react-intl';
import { css } from 'aphrodite/no-important';
import { list, link } from 'theme';

export const Navigation: React.FC = () => {
  const { formatMessage, locale } = useIntl();

  return (
    <ul className={css(list.container)}>
      {Object.keys(AppRoute).map(elem => (
        <li key={elem} className={css(list.item)}>
          <NavLink
            exact
            className={css(link.primary)}
            activeClassName={css(link.active)}
            to={localizeRouteKey(AppRoute[elem])}
          >
            {formatMessage({ id: AppRouteTitles.get(AppRoute[elem]) || '' })}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  function localizeRouteKey(path: string) {
    return `/${locale}` + formatMessage({ id: path });
  }
};
