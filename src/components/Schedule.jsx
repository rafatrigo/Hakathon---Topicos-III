import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Colors from "../utils/Colors";

export default function Schedule()
{

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textHeader}>Saída da Rodoviária</Text>
                <Text style={styles.textHeader}>Saída do Campus</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

        </View>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: -15,
        backgroundColor: Colors.WHITE1,
        zIndex: -100,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },
    textHeader: {
        color: Colors.BLACK2,
        fontSize: 16,
        fontWeight: "bold",
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
    },
    textRow: {
        color: Colors.BLACK1,
        fontSize: 14,
    }
});