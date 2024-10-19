import React, {FC, memo} from 'react';
import {View, Image, StyleSheet, ImageStyle, ViewStyle} from 'react-native';

import {moderateScale} from '../../../utils/device-scale';
import icons from './icons';
import {colors} from '../../../utils/ui';

export type IconTypes = keyof typeof icons;

export interface IIconProps {
  style?: ImageStyle;
  name: IconTypes;
  containerStyle?: ViewStyle;
  size?: number;
  color?: keyof typeof colors;
}

const createSizeStyle = (size: number) =>
  size ? {height: moderateScale(size), width: moderateScale(size)} : null;

const createColorStyle = (color?: keyof typeof colors) =>
  color ? {tintColor: colors[color]} : null;

const Icon: FC<IIconProps> = ({
  style,
  name,
  containerStyle,
  size = 24,
  color,
}) => {
  return (
    <View style={containerStyle}>
      <Image
        style={[
          styles.root,
          style,
          createSizeStyle(size),
          createColorStyle(color),
        ]}
        source={icons[name]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    resizeMode: 'contain',
  },
});

export default memo(Icon);
