import * as React from 'react';
 /* library */
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 /* pages */
 import Home from '../scenes/Home';
 import Cart from '../scenes/Cart';
 import Profile from '../scenes/Profile';
 /* colors */
 import * as theme from '../constants/theme';
 /* icons */
 import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

function RootStackNavigatopr() {
    return (
      <Tab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 13,
            paddingLeft: 46,
            paddingRight: 46
         },
         headerShown: false,
         tabBarActiveTintColor: theme.colors.light.foreground,
         tabBarInactiveTintColor: theme.colors.silver
       }}
      >
        <Tab.Screen 
         name="Home" 
         component={Home} 
         options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({ color }) => (
             <Icon name="home" color={color} size={25} />
           ),
         }} />
 
         <Tab.Screen 
           name="Keranjang" 
           component={Cart}
           options={{
             tabBarLabel: 'Keranjang',
             tabBarIcon: ({ color }) => (
               <Icon name="shoppingcart" color={color} size={25} />
             ),
         }} />
 
        <Tab.Screen 
         name="Profile" 
         component={Profile} 
         options={{
           tabBarLabel: 'Profile',
           tabBarIcon: ({ color }) => (
             <Icon name="user" color={color} size={25} />
           ),
         }} />
      </Tab.Navigator>
    );
  }

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootStackNavigatopr />
        </NavigationContainer>
    )
}

export default Navigator;