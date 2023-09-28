import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../screens/list';
import Add from '../screens/add';
import Detail from '../screens/detail';

const MyStack = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='List' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='List' component={List} />
                <Stack.Screen name='Add' component={Add} />
                <Stack.Screen name='Detail' component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack