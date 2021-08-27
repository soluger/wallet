import React, { useContext } from 'react';
import { AppContext } from '../context';
import AuthRouter from './authRouter';
import AppRouter from './appRouter';
import Loading from '../components/Loading';

export default function Routes() {
    const { signed, loading, } = useContext(AppContext);
        
    if(loading){
        return <Loading />;
    }

    if(signed){ 
            return <AppRouter />            
        }else{ 
            return <AuthRouter /> 
    }
}
