import React, {FC} from 'react';
import {Pressable, PressableProps} from 'react-native';
import styles from './styles';
import Text from '../Text';
import {TYPOGRAPHY} from '../../../constants/typography';

interface IButtonProps extends PressableProps {
  title: string;
}

const Button: FC<IButtonProps> = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text typography={TYPOGRAPHY.bodySSemibold} color="gray_0">
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
