/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect} from 'react';
 import {SafeAreaView} from 'react-native';
 import Navigator from './navigations';
 import SplashScreen from 'react-native-splash-screen';
 import { QueryClient, QueryClientProvider } from "react-query";

 const queryClient = new QueryClient()
 
 export default function App() {
    React.useEffect(() => {
      SplashScreen.hide();
    });
    
   return (
     <SafeAreaView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Navigator/>
        </QueryClientProvider>
      </SafeAreaView>
   );
 }
 
