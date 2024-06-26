import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export const Container = styled.View`
    width: ${RFValue(295)}px;
    height: ${RFValue(60)}px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.input};
    border-radius: 10px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.input};
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
    margin-bottom: 12px;
`;

export const InputText = styled(TextInput)`
    flex: 1;
    color: ${({ theme }) => theme.colors.shape};
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Icon = styled(Ionicons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.iconInput};
    margin-right: 16px;
`;

export const Error = styled.Text`
    
    margin-left: 16px;
    margin-bottom: 8px;
    
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.attention};
`;

export const ErrorContainer = styled.View`
    width: 100%;
`