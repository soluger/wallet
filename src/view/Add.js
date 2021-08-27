import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context';
import styled from 'styled-components/native';
import { RadioButton } from 'react-native-paper';

export default function Add({ navigation}) {
    const { adicionar, user } = useContext(AppContext);
    const [checked, setChecked] = useState('despesa');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const add = () => {
        if(user !== ''|| checked !== '' || valor !== '', descricao !== ''){
            adicionar(user,checked,valor,descricao);
            navigation.navigate('Home');
        }else{
            alert('campos inválidos!')
        }
       
    }

    return (
        <Background>
            <AreaButtonTop>
                <Button onPress={()=>navigation.navigate('Home')}>
                    <Ionicons name="close" size={55} color="#000" />
                </Button>
            </AreaButtonTop>
            <TextoBlack>Selececione o tipo:</TextoBlack>
            <Row>
                <RadioButton
                    value="despesa"
                    label="Carto Base MAp"
                    status={checked === 'despesa' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('despesa')}                    
                />
                <TextoBlack>Despesa</TextoBlack>                
                <RadioButton
                    value="receita"
                    status={checked === 'receita' ? 'checked' : 'unchecked'}
                    onPress={() =>  setChecked('receita')}
                />
                 <TextoBlack>Receita</TextoBlack>
            </Row>

            <Input 
                onChangeText={(text)=>setValor(text)}
                value={valor}
                placeholder="Informe valor"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
            />

            <Input 
                onChangeText={(text)=>setDescricao(text)}
                value={descricao}
                placeholder="Descrição"
                autoCorrect={false}
                autoCapitalize="none"
                keyBoardType="numeric"
            />

            <AreaButton>
                <Button onPress={()=>add()}>
                    <Ionicons name="arrow-forward" size={75} color="#000" />
                </Button>
            </AreaButton>

            
        </Background>
    )
}

const Background = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f1f2f6;
`;

const Row = styled.View`
    flex-direction: row;
`;

const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #fff;
    justify-content: center;
    padding: 15px;
    font-size: 18px;
    margin-top: 15px;
`;

const AreaButton = styled.View`
    margin-top:20px;
    margin-left: 250px;
`;

const AreaButtonTop = styled.View`   
    margin-left: 250px;
    margin-bottom: 90px;
`;

const Button = styled.TouchableOpacity``;

const Texto = styled.Text`
    color: #fff;
    font-size: 18px;
`;

const TextoBlack = styled.Text`
    color: #777;
    font-size: 18px;
    margin-top: 5px;
    margin-right: 20px;
    margin-bottom:20px;
`;