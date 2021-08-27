import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns'
import { db, auth } from '../connect/firebase';

export const AppContext = createContext({});

export default function AppProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(null);
    const [erro, setErro] = useState(null);
    const [user, setUser] = useState(null);
    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        getData();        
    },[signed])
    
    useEffect(()=>{
        if(signed){        
        const query = db.collection('users').doc(signed)
        const unsuscribe = query.onSnapshot(snap=>{
            let data = snap.data();
            setUser(data);
        })   
        return () => {
            unsuscribe();
         }
        }
    },[signed])   

        
    async function getMovie(){
        await db.collection('movie').where('uid', '==', user.uid).get()        
        .then((snapshot) => {
            const itens = [];
            snapshot.forEach((doc) => {
              itens.push(Object.assign({}, { id: doc.id }, doc.data()));
            });
            setMovie(itens);            
        })
    }

    const getData = async () => {            
        const jsonValue = await AsyncStorage.getItem('@uid');
        if(jsonValue){
            setSigned(JSON.parse(jsonValue))
            setLoading(false);
        }else{
            setLoading(false);
        }            
    }
        
    async function signUp(email,password,name){
        if(!email || !password || !name){
            return;
        }else{
            await auth.createUserWithEmailAndPassword(email,password)
            .then(async (value)=>{
                let uid = value.user.uid;
                await db.collection('users').doc(uid).set({
                    uid: uid,               
                    name: name,
                    receita: 0,
                    despesa: 0          
                })
                const jsonValue = JSON.stringify(uid)         
                await AsyncStorage.setItem('@uid', jsonValue)
                getData();
            })
        }
        
    }

    async function signIn(email,password){ 
        if(!email || !password ){
            return;
        }else{       
            await auth.signInWithEmailAndPassword(email, password)
            .then(async(value)=>{  
                const jsonValue = JSON.stringify(value.user.uid)         
                await AsyncStorage.setItem('@uid', jsonValue)
                getData();
            })
        }        
    }
    
    async function logout(){        
        await auth.signOut().then(async()=>{            
            await AsyncStorage.clear();
            setSigned(null);
            setUser(null);
            setMovie([])
        })
    }
    async function adicionar(user,checked,valor,descricao){
        await db.collection('movie').doc().set({                    
            uid: user.uid,
            tipo: checked,
            valor: parseFloat(valor),
            descricao: descricao,
            data: format(new Date(), 'dd/MM/yyyy')     
        
        }).then(async()=>{
            if(checked == 'despesa'){
                await db.collection('users').doc(user.uid).set({                    
                    despesa: user.despesa + parseFloat(valor),                       
                }, { merge:true })
            }else{
                await db.collection('users').doc(user.uid).set({                    
                    receita: user.receita + parseFloat(valor),                       
                }, { merge:true })
            }
        })
    }
    
    return (
        <AppContext.Provider value={{ signed, user, loading, signUp, signIn, logout, adicionar,movie,getMovie }}>
            {children}
        </AppContext.Provider>
    )
}