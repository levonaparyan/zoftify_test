import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/device-scale';
import {colors} from '../../../utils/ui';

export default StyleSheet.create({
  rate: {
    paddingVertical: verticalScale(2),
    paddingHorizontal: horizontalScale(4),
    borderRadius: moderateScale(6),
    backgroundColor: colors.primary_05,
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
});
