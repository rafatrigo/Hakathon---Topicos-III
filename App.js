import 'react-native-gesture-handler'

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BusSchedules from "./src/pages/BusSchedules";
import Notices from "./src/pages/Notices"
// import Map from "./src/pages/Map";

const Stack = createNativeStackNavigator()

export default function App() 
{

    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName="BusSchedule">

                <Stack.Screen

                    name="BusSchedules"
                    component={BusSchedules}
                    options={{ headerShown: false }}
                    navigationKey="0"

                />

                {/* <Stack.Screen

                    name="Map"
                    component={Map}
                    options={{ headerShown: false }}
                    navigationKey="1"

                /> */}


                <Stack.Screen

                    name="Notices"
                    component={Notices}
                    options={{ headerShown: false }}
                    navigationKey="2"

                />
                
            </Stack.Navigator>
            
        </NavigationContainer>
            
        
    )
    
}