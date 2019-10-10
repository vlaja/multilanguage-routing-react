import { StyleSheet } from 'aphrodite/no-important';

const borderBottom = '2px solid white';
export const link = StyleSheet.create({
  primary: {
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    ':hover': { borderBottom },
    ':active': { borderBottom }
  },
  active: { borderBottom }
});
