import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../view/Home';
import Add from '../view/Add';
import List from '../view/List';


const AppStack = createStackNavigator();

export default function AppRouter(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <AppStack.Screen name="Add"  component={Add} 
                options={{ headerShown: false }}
            />
            <AppStack.Screen 
                name="List" 
                component={List} 
                options={{ 
                    headerStyle:{
                        backgroundColor: "#fff",
                        borderBottomWidth: 1,
                        borderBottomColor: "#fff"
                    },
                    headerTitle: "Voltar"
                 }} 
            />
        </AppStack.Navigator>
    )
}
