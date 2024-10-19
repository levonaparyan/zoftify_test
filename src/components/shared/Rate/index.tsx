import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Icon, Text} from '../../ui';
import {TYPOGRAPHY} from '../../../constants/typography';

interface IRateProps {
  rate: string;
}

const Rate: FC<IRateProps> = ({rate}) => {
  return (
    <View style={styles.rate}>
      <Icon name="star" size={16} color="primary_120" />
      <Text typography={TYPOGRAPHY.bodySMedium} color="primary_120">
        {rate}
      </Text>
    </View>
  );
};

export default Rate;
