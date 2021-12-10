import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH_DESTAQUE = Dimensions.get('window').width
export const ITEM_WIDTH_DESTAQUE = SLIDER_WIDTH_DESTAQUE * 0.80

const CarrosselDestaque = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.fotoLivro }}
                style={styles.image}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: ITEM_WIDTH_DESTAQUE,
        marginTop: 40
    },
    image: {
        height: 140,
        borderRadius: 10,
    }
})

export default CarrosselDestaque