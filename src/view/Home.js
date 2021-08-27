import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/native';
import { AppContext } from '../context';
import { Ionicons } from '@expo/vector-icons';



export default function Home({ navigation}) {
    const { user, logout } = useContext(AppContext);
    const saldo = user && (user.receita - user.despesa).toFixed(2).replace(".",",")


    return (
        <Background>
            <Header>
                <Texto>Olá {user && user.name}</Texto>
                <Logout onPress={()=>logout()}>
                    <Ionicons name="log-out" size={35} color="#FFF" />
                </Logout>  
            </Header> 

            <Display>
                <Texto>Saldo</Texto>
                <Saldo>R$ {saldo}</Saldo>
            </Display> 

            <Content>
                <Card 
                    onPress={()=>navigation.navigate('List')}
                    style={{shadowColor: "#000", elevation: 3}}
                >
                    <Row>
                        <List>
                            <TextoCard>Despesa</TextoCard>
                            <ValorDespesa>R$ {user && user.despesa.toFixed(2).replace(".",",")}</ValorDespesa>
                        </List>
                        <LinhaVertical>|</LinhaVertical>
                        <List>
                            <TextoCard>Receita</TextoCard>
                            <ValorReceta>R$ {user && user.receita.toFixed(2).replace(".",",")}</ValorReceta>
                        </List>
                    </Row>
                </Card>

            </Content> 

            <Button onPress={()=> navigation.navigate("Add")}>
                <Ionicons name="add" size={35} color="#FFF" />
            </Button>         
            
        </Background>
    )
}

const Background = styled.View`
    flex: 1;
    background-color: #5352ed;
`;

const Header = styled.View`
    flex:0.7;
    flex-direction: row;    
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`;

const Texto = styled.Text`
    color: #fff;
    font-size: 18px;
`;

const Display = styled.View`
    flex: .8;
    margin-left: 99px;
`;

const Saldo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
`;

const Content = styled.View`
    flex:2;
    background-color: #fff;
    border-top-left-radius: 71px;
    align-items: center;
`;

const Card = styled.TouchableOpacity`
    height: 102px;
    background-color: #fff;
    margin-top: -60px;
    width: 246px;
    border-radius: 8px;    
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    padding: 20px;
    margin-left: 90px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

const List = styled.View``;

const TextoCard = styled.Text`
    color: #777;
    font-size: 18px;
`;

const ValorDespesa = styled.Text`
    font-size: 18px;
    color: #ff6348 ;
    font-weight: bold;
    text-align: center;
    margin-top:15px;
`;

const ValorReceta = styled.Text`
    font-size: 18px;
    color: #2ed573 ;
    font-weight: bold;
    text-align: center;
    margin-top:15px;
`;

const LinhaVertical = styled.Text`
    font-size: 30px;
    color: #ccc;
    margin-top: 25px;
`;

const Button = styled.TouchableOpacity`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background-color: #5352ed;
    position: absolute;
    bottom: 25px;
    right: 25px;
    align-items: center;
    justify-content: center;
`;

const Logout = styled.TouchableOpacity``;
