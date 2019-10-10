import { StyleSheet } from 'aphrodite/no-important';

import { Spacing } from './spacing';

const paddingFactory = (
  prop:
    | 'padding'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
) =>
  StyleSheet.create({
    tiny: { [prop]: Spacing.Tiny },
    small: { [prop]: Spacing.Small },
    medium: { [prop]: Spacing.Medium },
    large: { [prop]: Spacing.Large },
    xlrg: { [prop]: Spacing.XLarge },
    xxlrg: { [prop]: Spacing.XXLarge }
  });

export const padding = paddingFactory('padding');
export const paddingTop = paddingFactory('paddingTop');
export const paddingRight = paddingFactory('paddingRight');
export const paddingBottom = paddingFactory('paddingBottom');
export const paddingLeft = paddingFactory('paddingLeft');
