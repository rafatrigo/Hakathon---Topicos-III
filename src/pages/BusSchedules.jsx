import React from "react";

import { ScrollView, Text, View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useState } from "react";

import baseStyles from "../utils/Styles";
import Colors from "../utils/Colors";

import Footer from "../components/Footer";

import BtnPrimary from "../components/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary";
import Schedule from "../components/Schedule";

export default function BusSchedules()
{

    const navigation = useNavigation();

    const [semana, SetSemana] = useState(false)
    const [FimSemana, SetFimSemana] = useState(false)

    return (

        <View style={baseStyles.container}>

            <ScrollView>

                <View style={baseStyles.header}>

                    <Text style={baseStyles.text}>Horários de Ônibus</Text>
                    
                </View>

                <View style={styles.btnContainer}>

                    <BtnSecondary onPress={() => {SetSemana(!semana)}} title='Segunda a Sexta' />

                    <Schedule display={semana} />

                    <BtnSecondary onPress={() => {SetFimSemana(!FimSemana)}} title='Finais de Semana' />

                    <Schedule display={FimSemana} />

                </View>

            </ScrollView>
            
            <Footer />

        </View>
    )
    
}

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom: 60,
        marginStart: 20,
        marginEnd: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});