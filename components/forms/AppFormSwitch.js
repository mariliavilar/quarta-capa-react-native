import React from "react";
import { StyleSheet, View } from "react-native";

import { useFormikContext } from "formik";
import { Switch } from "react-native-paper";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";

function AppFormSwitch({ label, name, ...otherProps }) {
	const { values, setFieldValue } = useFormikContext();

	const [doacao, setDoacao] = React.useState(false);

	const onToggleSwitch = () => {
		console.log("parametro ", doacao);
		setDoacao(doacao ? false : true);
		console.log("setDoacao ", doacao);
		setFieldValue(name, doacao);
		console.log("setFieldValue ", doacao);
		console.log(doacao);
	};

	return (
		<View style={styles.container}>
			<AppText style={styles.label}>{label}</AppText>

			<Switch value={doacao} onValueChange={onToggleSwitch} />
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		color: defaultStyles.colors.light,
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default AppFormSwitch;
