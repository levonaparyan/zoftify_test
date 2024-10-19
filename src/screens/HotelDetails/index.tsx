import React, {FC, useMemo} from 'react';
import {Layout} from '../../components/shared';
import {Button, Icon, Text} from '../../components/ui';
import {
  ImageBackground,
  Linking,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {hotelData} from '../../data';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {verticalScale} from '../../utils/device-scale';
import {TYPOGRAPHY} from '../../constants/typography';

export type ParamList = {
  HotelDetails: {
    id: string;
  };
};

const HotelDetails: FC = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<ParamList>>();
  const {goBack} = useNavigation();
  const insets = useSafeAreaInsets();

  const selectedHotel = useMemo(
    () => hotelData.find(hotel => hotel.id === id),
    [id],
  );

  return (
    <Layout>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <ImageBackground
          style={[
            styles.background,
            {paddingTop: insets.top + verticalScale(12)},
          ]}
          imageStyle={styles.backgroundImage}
          source={{uri: selectedHotel?.image}}>
          <Pressable style={styles.back} onPress={goBack}>
            <Icon name="arrow_left" />
          </Pressable>
        </ImageBackground>
        <View style={styles.content}>
          <Text typography={TYPOGRAPHY.title} style={styles.title}>
            {selectedHotel?.title}
          </Text>
          <View style={styles.overview}>
            <Text typography={TYPOGRAPHY.subtitle}>Overview</Text>
            <Text typography={TYPOGRAPHY.bodyMRegular}>
              {selectedHotel?.overview}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Check availability"
          onPress={() => Linking.openURL('https://zoftify.com/')}
        />
      </View>
    </Layout>
  );
};

export default HotelDetails;
