import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BusSchedule from '../pages/BusSchedules'
import Notices from '../pages/Notices'

const Stack = createNativeStackNavigator();

export default function Routes() 
{
    <NavigationContainer>

        <Stack.Navigator initialRouteName="BusSchedule">

            <Stack.Screen

                name="BusSchedule"
                component={BusSchedule}
                options={{ headerShown: false }}
            
            />

            <Stack.Screen

                name="Notices"
                component={Notices}
                options={{ headerShown: false }}

            />
            
        </Stack.Navigator>

    </NavigationContainer>
}