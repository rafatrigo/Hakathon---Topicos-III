import React from "react";

import { Text, View, StyleSheet, ScrollView } from "react-native";

import baseStyles from "../utils/Styles";

import NoticesCard from "../components/NoticesCard";

import Footer from "../components/Footer";

import BtnCreateNotice from "../components/BtnCreateNotice";

// import { useNavigation } from "expo-router";

export default function BusSchedules()
{
    // const navigation = useNavigation();

    return (

        <View style={baseStyles.container}>
            
            <ScrollView >

                <View style={baseStyles.header}>

                    <Text style={baseStyles.text}>Avisos</Text>


                </View>

                <View style={styles.notices}>

                    <NoticesCard />

                    <NoticesCard />

                    <NoticesCard />

                    <NoticesCard />
                    
                    <NoticesCard />

                    
                </View>
                
            </ScrollView>

            <BtnCreateNotice />

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