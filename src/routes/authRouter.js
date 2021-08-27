import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../view/Signin';
import Signup from '../view/Signup';

const AuthStack = createStackNavigator();

export default function AuthRouter(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <AuthStack.Screen 
                name="Signup" 
                component={Signup}
                options={{ 
                    headerStyle:{
                        backgroundColor: "#fff",
                        borderBottomWidth: 1,
                        borderBottomColor: "#fff"
                    },
                    headerTitle: "Voltar"
                 }}                
            />
        </AuthStack.Navigator>
    )
}
