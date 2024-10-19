import React, {FC, ReactNode, memo} from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {colors, fonts} from '../../../utils/ui';
import {Typography, TYPOGRAPHY_STYLES} from '../../../constants/typography';
import {moderateScale} from '../../../utils/device-scale';

interface IProps extends TextProps {
  children?: ReactNode;
  style?: TextStyle;
  typography?: Typography;
  size?: number;
  lineHeight?: number;
  font?: keyof typeof fonts;
  color?: keyof typeof colors;
}

const Text: FC<IProps> = ({
  children,
  style,
  typography,
  size,
  lineHeight,
  font,
  color,
  ...rest
}) => {
  return (
    <RNText
      style={[
        typography ? TYPOGRAPHY_STYLES[typography] : {},
        size ? {fontSize: moderateScale(size)} : {},
        lineHeight ? {lineHeight: moderateScale(lineHeight)} : {},
        font ? {fontFamily: fonts[font]} : {},
        color ? {color: colors[color]} : {color: colors.gray_100},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default memo(Text);
