import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import defaultStyles from "../config/styles";

function AppButton({ title, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: defaultStyles.colors.mariliaAccentOrange,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
		borderWidth: 2,
		borderColor: defaultStyles.colors.white,
	},
	text: {
		color: defaultStyles.colors.white,
		fontSize: 18,
	},
});

export default AppButton;
