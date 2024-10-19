import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/device-scale';
import {colors} from '../../utils/ui';

export default StyleSheet.create({
  background: {
    height: verticalScale(400),
    paddingLeft: horizontalScale(8),
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  back: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: colors.gray_0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(16),
  },
  title: {
    paddingBottom: verticalScale(32),
  },
  overview: {
    gap: verticalScale(16),
  },
  footer: {
    padding: moderateScale(16),
    paddingBottom: verticalScale(34),
    backgroundColor: colors.gray_0,
    shadowColor: colors.shadow_color,
    shadowOffset: {width: 0, height: -8},
    shadowOpacity: 0.08,
    shadowRadius: 16,
  },
});
