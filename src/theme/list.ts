import { StyleSheet } from 'aphrodite/no-important';

import { Spacing } from './spacing';

export const list = StyleSheet.create({
  container: {
    display: 'flex',
    listStyle: 'none',
    padding: 0
  },
  item: {
    margin: `0 ${Spacing.Small}`
  }
});
