import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/device-scale';
import {colors} from '../../../utils/ui';

export default StyleSheet.create({
  card: {
    flex: 1,
  },
  hotelCardImage: {
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    height: verticalScale(245),
    width: 'auto',
  },
  content: {
    padding: moderateScale(16),
    borderBottomStartRadius: moderateScale(24),
    borderBottomEndRadius: moderateScale(24),
    borderColor: colors.gray_10,
    borderWidth: 1,
    borderTopWidth: 0,
    gap: verticalScale(16),
  },
  head: {
    gap: verticalScale(8),
  },
  hotelInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  priceInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceInfo: {
    flexDirection: 'column',
  },
  price: {
    backgroundColor: colors.secondary_10,
    paddingHorizontal: horizontalScale(8),
    borderRadius: moderateScale(6),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  logo: {
    width: horizontalScale(75),
    height: verticalScale(12),
    resizeMode: 'contain',
    marginTop: verticalScale(8),
  },
});
