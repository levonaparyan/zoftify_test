import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/ui';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/device-scale';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.primary_100,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(32),
    alignItems: 'center',
  },
});
