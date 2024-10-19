import React, {FC} from 'react';
import {HotelCard, Layout} from '../../components/shared';

import {FlatList, Linking, ListRenderItem} from 'react-native';
import {hotelData} from '../../data';
import {HotelDataProps} from '../../types';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationType} from '../../navigation/StackNavigator';

const Explore: FC = () => {
  const {navigate} = useNavigation<StackNavigationType>();

  const renderItem: ListRenderItem<HotelDataProps> = ({item}) => {
    return (
      <HotelCard
        image={item.image}
        mins={item.walk}
        rate={item.rate}
        title={item.title}
        price={item.price}
        onPressCard={() => navigate('HotelDetails', {id: item.id})}
        onPressView={() => Linking.openURL('https://zoftify.com/')}
      />
    );
  };
  return (
    <Layout hasSafeArea>
      <FlatList
        keyExtractor={(k, index) => `${k.id}-${index}`}
        data={hotelData}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Layout>
  );
};

export default Explore;
