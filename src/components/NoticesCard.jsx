import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Colors from "../utils/Colors";

export default function NoticesCard()
{

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textHeader}>Novo aviso</Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.descriptionText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, blanditiis. Excepturi harum, expedita voluptatum quidem culpa odit saepe, velit facere exercitationem incidunt numquam iste repellendus dolorum fugit maxime nam similique!</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerName}>Fernando Souza</Text>
                
                <View style={styles.footerTime}>

                    <Text style={styles.time}>13/10/2024</Text>
                    <Text style={styles.time}>20:30</Text>

                </View>

            </View>
            
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.WHITE1,
        borderRadius: 20,
        marginTop: 5,
    },
    header: {
        marginTop: 5,
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.BLACK1,
    },
    description: {
        marginStart: 10,
        marginEnd: 10,
    },
    descriptionText: {
        textAlign: 'justify',
        color: Colors.BLACK1,
    },
    footer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerName: {
        color: Colors.BLACK0,
        fontWeight: 'bold'
    },
    footerTime: {
        display: 'flex',
        flexDirection: 'row',
    },
    time: {
        color: Colors.BLACK0,
        marginStart: 10,
    },
});