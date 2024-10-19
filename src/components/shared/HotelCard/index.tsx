import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './styles';
import {Button, Icon, Text} from '../../ui';
import {TYPOGRAPHY} from '../../../constants/typography';
import {Rate} from '..';
import logo from '../../../assets/images/booking_logo.png';

interface IHotelCardProps {
  image: string;
  mins: number;
  rate: string;
  title: string;
  price: string;
  onPressCard: () => void;
  onPressView: () => void;
}

const HotelCard: FC<IHotelCardProps> = ({
  image,
  mins,
  rate,
  title,
  price,
  onPressCard,
  onPressView,
}) => {
  return (
    <Pressable style={styles.card} onPress={onPressCard}>
      <Image source={{uri: image}} style={styles.hotelCardImage} />
      <View style={styles.content}>
        <View style={styles.head}>
          <View style={styles.hotelInfoContainer}>
            <View style={styles.routeContainer}>
              <Icon name="route" size={16} />
              <Text typography={TYPOGRAPHY.bodySMedium}>
                {mins} mins walking
              </Text>
            </View>
            <Rate rate={rate} />
          </View>
          <Text typography={TYPOGRAPHY.bodyMSemibold}>{title}</Text>
        </View>
        <View style={styles.priceInfoContainer}>
          <View>
            <View style={styles.price}>
              <Text typography={TYPOGRAPHY.bodySSemibold} color="secondary_100">
                {price}
              </Text>
              <Text typography={TYPOGRAPHY.bodySSemibold} color="secondary_20">
                $$
              </Text>
            </View>
            <Image style={styles.logo} source={logo} />
          </View>
          <Button title="View prices" onPress={onPressView} />
        </View>
      </View>
    </Pressable>
  );
};

export default HotelCard;
