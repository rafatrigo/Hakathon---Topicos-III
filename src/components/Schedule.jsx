import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Colors from "../utils/Colors";

export default function Schedule({ display })
{

    return (

        <View style={[styles.container, display == true ? {} : {display: 'none'}]}>

            <View style={styles.header}>
                <Text style={styles.textHeader}>Saída da Rodoviária</Text>
                <Text style={styles.textHeader}>Saída do Campus</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>06:30</Text>
                <Text style={styles.textRow}>07:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>07:30</Text>
                <Text style={styles.textRow}>08:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>08:30</Text>
                <Text style={styles.textRow}>09:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>09:30</Text>
                <Text style={styles.textRow}>10:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>10:30</Text>
                <Text style={styles.textRow}>11:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>11:30</Text>
                <Text style={styles.textRow}>12:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>12:30</Text>
                <Text style={styles.textRow}>13:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>13:30</Text>
                <Text style={styles.textRow}>14:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>14:30</Text>
                <Text style={styles.textRow}>15:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>15:30</Text>
                <Text style={styles.textRow}>16:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>17:30</Text>
                <Text style={styles.textRow}>18:00</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>18:00</Text>
                <Text style={styles.textRow}>18:30</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>20:00</Text>
                <Text style={styles.textRow}>20:30</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.textRow}>22:00</Text>
                <Text style={styles.textRow}>22:30</Text>
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