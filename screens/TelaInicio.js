import React from 'react';
import { View, StatusBar, ScrollView, StyleSheet } from 'react-native';
import CarrosselCards from '../components/CarrosselCards';

import defaultStyles from "../config/styles";


export function TelaInicio({ navigation }) {
    return (
        <ScrollView
            style={styles.scrollView}>
            <View style={styles.container}>
                <CarrosselCards urlApi="https://quartacapa.herokuapp.com/api/v1/anuncios" />
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: defaultStyles.colors.mariliaGreenLight,
    },
    container: {
        flex: 1
    }
});