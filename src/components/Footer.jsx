import React from "react"

import { View, Pressable, StyleSheet } from "react-native"

import { useState } from "react"

import { useNavigation, useRoute, useNavigationState } from "@react-navigation/native"

import { FontAwesome6, FontAwesome5, MaterialIcons } from "@expo/vector-icons"
import Colors from "../utils/Colors"

export default function Footer()
{
    const navigation = useNavigation();
    const routeName = useNavigationState(state => state.routes[state.index].name);

    const busSchedulePress = () => {
        navigation.navigate("BusSchedules")
    };

    const mapPress = () => {
        navigation.navigate("Map");
    }

    const noticePress = () => {
        navigation.navigate("Notices")
    }
    
    return (
        <View style={styles.container}>

            <Pressable 
            onPress={busSchedulePress}
            style={routeName == 'BusSchedules' ? styles.active : styles.normal}>
                <FontAwesome6 name="bus" size={36} color={routeName == 'BusSchedules' ? Colors.WHITE1 : Colors.BLACK1}/>
            </Pressable>

            <Pressable
            onPress={mapPress}
            style={routeName == 'Map' ? styles.active : styles.normal}>
                <FontAwesome5 name="map-marked-alt" size={36} color={routeName == 'Map' ? Colors.WHITE1 : Colors.BLACK1}/>
            </Pressable>

            <Pressable
            onPress={noticePress}
            style={routeName == 'Notices' ? styles.active : styles.normal}>
                <MaterialIcons name="email" size={36} color={routeName == 'Notices' ? Colors.WHITE1 : Colors.BLACK1}/>
            </Pressable>
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRYMARY0,
        height: 60,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        paddingLeft: 30,
        paddingRight: 30,
    },
    active: {
        backgroundColor: Colors.SECONDARY1,
        padding: 10,
    },
    normal: {

    },
})