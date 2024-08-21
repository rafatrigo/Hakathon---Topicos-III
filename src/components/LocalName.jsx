import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/Colors";

export default function LocalName({title, x, y})
{

    return (

        <View style={[styles.container, {top: x, left: y}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 10,
        maxWidth: 40,
        backgroundColor: Colors.WHITE1,
        zIndex: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 8,
        fontWeight: 'bold',
        color: Colors.BLACK1,
        margin: 3,
    },
});