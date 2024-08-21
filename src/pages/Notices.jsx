import React from "react";

import { Text, View, StyleSheet, ScrollView } from "react-native";

import baseStyles from "../utils/Styles";

import NoticesCard from "../components/NoticesCard";

import Footer from "../components/Footer";

export default function BusSchedules()
{

    return (

        <View style={baseStyles.container}>
            
            <ScrollView >

                <View style={baseStyles.header}>

                    <Text style={baseStyles.text}>Avisos</Text>

                    <View style={styles.notices}>

                        <NoticesCard />
                        
                    </View>

                </View>
                
            </ScrollView>

            <Footer/>            

        </View>
        
    )
    
}

const styles = StyleSheet.create({
    notices: {
        marginStart: 20,
        marginEnd: 20,
        paddingTop: 20,
        zIndex: 100,
    }
});