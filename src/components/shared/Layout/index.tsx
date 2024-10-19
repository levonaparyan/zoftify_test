import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IProps {
  hasSafeArea?: boolean;
  children: ReactNode;
}

const Layout: FC<IProps> = ({children, hasSafeArea}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, hasSafeArea ? {paddingTop: insets.top} : {}]}>
      {children}
    </View>
  );
};

export default Layout;
