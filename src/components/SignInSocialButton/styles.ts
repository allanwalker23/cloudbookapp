import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled(RectButton)`
    height: ${RFValue(56)}px;

    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;

    align-items: center;
    flex-direction: row;

    margin-bottom: 16px;
`;

export const Text = styled.Text`
    flex: 1;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;
