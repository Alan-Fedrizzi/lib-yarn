import type React from 'react';
import {
  ButtonContainer,
  ButtonText,
  type ButtonStyleProps,
} from './Button.styles';
import { Pressable } from 'react-native';

export default function TpButton(
  props: ButtonStyleProps & {
    children: React.ReactNode;
  }
) {
  const { children, fill, ...otherProps } = props;

  return (
    <Pressable
      {...otherProps}
      style={({ pressed }) => ({
        // Pass the pressed state down to your styled-components
        transform: pressed ? [{ scale: 0.95 }] : [],
      })}
    >
      {({ pressed }) => (
        <ButtonContainer fill={fill} pressed={pressed}>
          <ButtonText fill={fill} pressed={pressed}>
            {children}
          </ButtonText>
        </ButtonContainer>
      )}
    </Pressable>
  );
}
