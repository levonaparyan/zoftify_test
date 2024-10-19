import {StyleSheet} from 'react-native';
import {colors, fonts} from '../utils/ui';
import {moderateScale} from '../utils/device-scale';

export const TYPOGRAPHY_STYLES = StyleSheet.create({
  title: {
    color: colors.gray_100,
    fontFamily: fonts.semibold,
    fontSize: moderateScale(22),
    lineHeight: moderateScale(32),
  },
  subtitle: {
    color: colors.gray_100,
    fontFamily: fonts.semibold,
    fontSize: moderateScale(18),
    lineHeight: moderateScale(28),
  },
  bodyMSemibold: {
    color: colors.gray_100,
    fontFamily: fonts.semibold,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
  },
  bodyMMedium: {
    color: colors.gray_100,
    fontFamily: fonts.medium,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
  },
  bodyMRegular: {
    color: colors.gray_100,
    fontFamily: fonts.regular,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
  },
  bodySSemibold: {
    color: colors.gray_100,
    fontFamily: fonts.semibold,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
  },
  bodySMedium: {
    color: colors.gray_100,
    fontFamily: fonts.medium,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
  },
  bodySRegular: {
    color: colors.gray_100,
    fontFamily: fonts.regular,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
  },
  tabBar: {
    color: colors.gray_100,
    fontFamily: fonts.medium,
    fontSize: moderateScale(11),
    lineHeight: moderateScale(16),
  },
});

export type Typography = keyof typeof TYPOGRAPHY_STYLES;

export const TYPOGRAPHY = Object.keys(TYPOGRAPHY_STYLES).reduce<
  Record<Typography, Typography>
>(
  (acc, val) => ({
    ...acc,
    [val]: val,
  }),
  {} as Record<Typography, Typography>,
);
