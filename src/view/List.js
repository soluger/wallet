import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/native';
import { AppContext } from '../context';
import { FlatList } from 'react-native';

export default function List() {
    const { movie, getMovie } = useContext(AppContext);

    useEffect(()=>{
        getMovie();
        console.log(movie && movie)
    },[])

    const Movies = ({data}) => {
        return(
            <Container>
                <Row>
                    <RowInt>
                        {data.tipo == "despesa"?
                        <Avatar cor="#ff7f50">
                            <TextoWhite>D</TextoWhite>
                        </Avatar>:
                        <Avatar cor="#2ed573">
                            <TextoWhite>R</TextoWhite>
                        </Avatar>
                        }
                        <AreaD>                            
                            <Texto>{data && data.descricao}</Texto>
                            <Texto>{data && data.data}</Texto>
                        </AreaD>
                    </RowInt>
                    <Valor>R$ {data && data.valor.toFixed(2).replace(".",",")}</Valor>
                </Row>
            </Container>       
        )
    }
    
    return (
        <Background>           
            <FlatList 
                data={movie}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=> <Movies data={item}/>}                
             />
        </Background>
    )
}

const Background = styled.View`
    flex: 1;
    background-color: #f1f2f6;
`;

const Container = styled.View`
    margin: 15px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const RowInt = styled.View`
    flex-direction: row;    
`;

const AreaD = styled.View``;

const Texto = styled.Text`
    color: #3c4560;
    font-size: 18px;
    margin-left: 10px;
`;

const Valor = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #555;
`;

const Avatar = styled.View`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: ${(props)=>props.cor};
    align-items: center;
    justify-content: center;
`;

const TextoWhite = styled.Text`
    font-size: 25px;
    color: #fff;
`;
