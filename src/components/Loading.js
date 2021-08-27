import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export default function Loading() {
    return (
        <Background>
            <ActivityIndicator size="large" color="#FFF" />
            <Paragraph>Carregando informações...</Paragraph>
        </Background>
    )
}

const Background = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #5352ed;
`;

const Paragraph = styled.Text`
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
`;
