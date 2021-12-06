import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import defaultStyle from '../config/styles';

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyle.colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%"
    },
    text: {
        color: defaultStyle.colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})

export default AppButton;