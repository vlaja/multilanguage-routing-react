import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import { wrapper, Color } from 'theme';
import { Navigation } from 'modules/navigation';
import { LanguageSwitcher } from 'modules/i18n';
import { padding } from 'theme/padding';

export const AppLayout: React.FC = ({ children }) => (
  <div className={css(styles.container)}>
    <header className={css(styles.header)}>
      <nav className={css(styles.nav, wrapper[95])}>
        <Navigation />
        <LanguageSwitcher />
      </nav>
    </header>
    <main className={css(styles.main, wrapper[90], padding.medium)}>
      {children}
    </main>
  </div>
);

const styles = StyleSheet.create({
  container: {
    flex: '1 1 auto',
    flexDirection: 'column',
    fontFamily: "'Open Sans', sans-serif"
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: Color.Primary,
    borderBottom: '1px solid #f6f6f6',
    padding: '1em 0'
  },
  nav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  main: {
    margin: '0 auto'
  }
});
