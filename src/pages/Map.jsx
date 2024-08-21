import React from "react";

import { View, Image, Dimensions, StyleSheet, Text, Button } from "react-native";

import Footer from "../components/Footer";

import { GestureHandlerRootView, Gesture, GestureDetector } from "react-native-gesture-handler";

import Animated, { withTiming, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { Entypo } from "@expo/vector-icons"

import Pin from '../components/Pin';


import baseStyles from "../utils/Styles";
import Colors from "../utils/Colors";
import LocalName from "../components/LocalName";

const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [-wWidth, 0, wWidth];
const aspectRatio = 1;
const CARD_WIDTH = wWidth;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;

export default function Map() 
{
    // const offset = useSharedValue({ x: 0, y: 0 });
    // const translateX = useSharedValue(0);
    // const translateY = useSharedValue(-height);
    // const scale = useSharedValue(1);
    
    // const gesture = Gesture.Pan()
    //     .onBegin(() => {
    //         offset.value = { x: translateX.value, y: translateY.value };
    //         scale.value = withTiming(1.1);
    //     })
    //     .onUpdate(({ translationX, translationY }) => {
    //         translateX.value = offset.value.x + translationX;
    //         translateY.value = offset.value.y + translationY;
    //     });

    // const style = useAnimatedStyle(() => ({
    //     transform: [
    //         { translateX: translateX.value },
    //         { translateY: translateY.value },
    //     ],
    // }));

    // chutei esse 2.7 pra ficar numa posição bonitinha
    // as vezes a gambiarra é a solução mais facil
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const drag = Gesture.Pan()
        .onChange((event) => {
            translateX.value += event.changeX;
            translateY.value += event.changeY;
        });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
            {
                translateX: translateX.value,
            },
            {
                translateY: translateY.value,
            },
            {
                scale: 4,
            },
            ],
        };
    });

    return (

        <View style={baseStyles.container}>

            <View style={[baseStyles.header, styles.header]}>

                <Text style={baseStyles.text}>Mapa do Campus</Text>

            </View>
            
            <GestureHandlerRootView>

                <GestureDetector gesture={drag}>

                    <Animated.View style={[containerStyle, styles.animatedView]}>
                        <Image 
                        source={'./src/assets/Mapa-ifet.png'}
                        style={{
                            width: 500,
                            height: 300,
                            zIndex: 90,
                            overflow: 'visible',
                            marginStart: -50,
                        }}
                        resizeMode="contain"
                        />
                        <Pin title={'Prédio Central'} x={-130} y={28} />
                        {/* <Pin title={'DACC'} x={-145} y={-70} /> */}
                        
                    </Animated.View>
                        
                </GestureDetector>
                
            </GestureHandlerRootView>
            <Footer />
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    animatedView: {
        minWidth: '100%',
        minHeight: '100%',
        justifyContent: 'center',
        position: 'relative'
    },
    header: {
        zIndex: 100,
    },
    dacc: {
        position: 'relative',
        top: -128,
        left: 113,
        zIndex: 150,
    },
    zoo: {
        position: 'relative',
        top: -140,
        left: 100,
        zIndex: 150,
    },
    pc: {
        position: 'relative',
        top: -150,
        left: 210,
        zIndex: 150,
    },
});