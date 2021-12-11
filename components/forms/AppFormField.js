import React from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import defaultStyles from "../../config/styles";

function AppFormField({ label, name, ...otherProps }) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	return (
		<>
			<AppText style={styles.label}>{label}</AppText>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({
	label: {
		color: defaultStyles.colors.secundary,
		fontSize: 20,
	},
});

export default AppFormField;
