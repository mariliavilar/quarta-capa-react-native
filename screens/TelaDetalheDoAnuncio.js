import React from 'react';
import { Button, Text, Image, StatusBar, StyleSheet, ScrollView, Linking } from 'react-native';
//import { Button } from 'react-native-paper';

import defaultStyles from "../config/styles";
import { DetalheDoLivro } from '../components/DetalheDoLivro';


export function TelaDetalheDoAnuncio({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
            <StatusBar style="auto" />
        
            <DetalheDoLivro baseUrlApi={`https://quartacapa.herokuapp.com/api/v1`} />
               
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    buttonsView: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
      },

    scrollView: {
        backgroundColor: defaultStyles.colors.mariliaGreenLight,
    },

    image: {
        height: 230,
        width: 150,
        marginTop: 20,
        alignSelf: 'center',
        tintColor: "pink",
    },
})