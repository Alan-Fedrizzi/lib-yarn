import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonStyleProps = {
  // color?: keyof typeof DARK_THEME.colors | keyof typeof LIGHT_THEME.colors;
  fill?: 'clear';
  pressed?: boolean;
};

export const ButtonContainer = styled(View)<ButtonStyleProps>`
  ${({ fill, pressed }) => css`
    background-color: ${fill === 'clear' ? 'transparent' : 'red'};
    padding: ${fill === 'clear' ? '16px 0' : '16px 32px'};
    border-radius: 999px;
    border: 1px solid;
    border-color: ${fill === 'clear' ? 'transparent' : 'red'};
    opacity: ${pressed ? 0.8 : 1};
    transition: all 0.25s;
  `}
`;

export const ButtonText = styled(Text)<ButtonStyleProps>`
  ${({ fill = undefined }) => css`
    color: ${fill === 'clear' ? 'red' : 'white'};
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  `}
`;
