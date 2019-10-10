import { StyleSheet } from 'aphrodite/no-important';

import { Spacing } from './spacing';

const marginFactory = (
  prop: 'margin' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
) =>
  StyleSheet.create({
    tiny: { [prop]: Spacing.Tiny },
    small: { [prop]: Spacing.Small },
    medium: { [prop]: Spacing.Medium },
    large: { [prop]: Spacing.Large },
    xlrg: { [prop]: Spacing.XLarge },
    xxlrg: { [prop]: Spacing.XXLarge }
  });

export const margin = marginFactory('margin');
export const marginTop = marginFactory('marginTop');
export const marginRight = marginFactory('marginRight');
export const marginBottom = marginFactory('marginBottom');
export const marginLeft = marginFactory('marginLeft');
