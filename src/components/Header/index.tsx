import React from 'react';
import {
    Container,
    IconBack,
    BackButton,
    Title,
    ImageButton,
    ImageHeader
} from './styles';
import { Image } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';
interface Props {
    title: string;
    image?: string;
    type: 'addContent' | 'listThings';
}
export function Header({ title, image, type }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <BackButton onPress={handleGoBack}>
                <IconBack name="arrow-back" />
            </BackButton>
            <Title>{title}</Title>

            {type === 'addContent' ? (
                <BackButton>
                    <IconBack name="" />
                </BackButton>
            ) : (
                <ImageButton>
                    <ImageHeader source={{ uri: image }} />
                </ImageButton>
            )}
        </Container>
    );
}
