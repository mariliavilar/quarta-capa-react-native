import React from "react";
import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Title } from "react-native-paper";

import defaultStyles from "../config/styles";

function DividerForm({ icon, title }) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name={icon}
				size={70}
				color={defaultStyles.colors.primary}
				style={styles.boxTitle}
			/>
			<Title style={styles.boxTitle}>{title}</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	boxTitle: {
		alignSelf: "center",
		marginBottom: -10,
	},
	container: {
		flexDirection: "column",
		paddingTop: 40,
	},
});

export default DividerForm;
