import React from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

import AppText from "../AppText";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import defaultStyles from "../../config/styles";

function AppFormPicker({ items, label, name, placeholder }) {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<AppText style={styles.label}>{label}</AppText>
			<AppPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({
	label: {
		color: defaultStyles.colors.light,
	},
});

export default AppFormPicker;
