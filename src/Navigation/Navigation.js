import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProducts from '../Screens/MyProducts'
import MyCart from '../Screens/MyCart'


const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='MyProducts'
                    component={MyProducts}
                    options={{ headerShown: false }} />

                <Stack.Screen name='MyCart'
                    component={MyCart}
                    options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation

