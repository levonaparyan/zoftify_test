import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/device-scale';

export default StyleSheet.create({
  list: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    gap: verticalScale(12),
  },
});
