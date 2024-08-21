import React from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../utils/Colors";

import { Entypo } from "@expo/vector-icons"

import { useState } from "react";

export default function LocalName({title, x, y})
{
    const [showName, setShowName] = useState(false);

    return (

        <Pressable onPress={() => {setShowName(!showName)}} style={[styles.container, {top: x, left: y}]}>
            <View style={[styles.containerTitle, showName == false ? {display: 'none'} : {} ]}>
                <Text style={styles.title}>{title}</Text>
            </View>

            <Entypo name="location-pin" color={Colors.ERROR} size={12}/>

        </Pressable>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 150,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: 'auto',
    },
    containerTitle: {
        backgroundColor: Colors.WHITE1,
        borderRadius: 5,
        height: 'auto',
        width: 'auto',
    },
    title: {
        fontSize: 6,
        fontWeight: 'bold',
        color: Colors.BLACK1,
        paddingTop: 2,
        marginEnd: 2,
        marginStart: 2,
    },
});