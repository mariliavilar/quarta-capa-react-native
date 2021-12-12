import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = SLIDER_WIDTH * 0.40

const CarrosselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.fotoLivro }}
                style={styles.image}
            />
            <Text style={styles.header}>{item.titulo}</Text>
            <Text style={styles.body}>{item.anoEscolar}</Text>
            <Text style={styles.value}>R$ {item.valor}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 14,
        shadowColor: "#000",
    },
    image: {
        height: 200,
        resizeMode: 'contain',
    },
    header: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 14,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 4
    },
    value: {
        fontWeight: 'bold',
        color: '#222',
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    }
})

export default CarrosselCardItem