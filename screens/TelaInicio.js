import React from 'react';
import { View, StatusBar, ScrollView, StyleSheet } from 'react-native';
import CarouselCards from '../components/CarouselCards';


export function TelaInicio({ navigation }) {
    return (
        <ScrollView
            style={styles.scrollView}>
            <View style={styles.container}>
                <CarouselCards urlApi="https://quartacapa.herokuapp.com/api/v1/anuncios" />
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#e8f1f2',
    },
    container: {
        flex: 1
    }
});