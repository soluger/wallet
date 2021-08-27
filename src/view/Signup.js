import React, { useState, useContext }from 'react'
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/'

export default function Signin() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AppContext);

    const cadastro = async () => {
        signUp(email,password,name);
    }

    return (
        <Background>         
            <Texto>Cadastre-se grátis</Texto>

            <Input 
                onChangeText={(text)=>setName(text)}
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
            />

            <Input 
                onChangeText={(text)=>setEmail(text)}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
            />

            <Input 
                onChangeText={(text)=>setPassword(text)}
                placeholder="Senha"
            />

            <Button onPress={()=>cadastro()}>
                <Ionicons name="arrow-forward" size={65} color="#000" />
            </Button>
                       
        </Background>
    )
}

const Background = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #f1f2f6;
    align-items: center;
    justify-content: center;
`;

const Texto = styled.Text`
    font-size: 20px;
    margin-bottom: 25px;
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

const Button = styled.TouchableOpacity`
    margin-top:30px;
`;