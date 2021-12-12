import React, { useState } from "react";
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
	icon,
	items,
	onSelectItem,
	placeholder,
	selectedItem,
	...otherProps
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}

					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.nome}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Button title="Close" onPress={() => setModalVisible(false)} />
				<FlatList
					data={items}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<PickerItem
							label={item.nome}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		borderColor: defaultStyles.colors.mariliaGreenDark,
		borderWidth: 3,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: defaultStyles.colors.mariliaGreenDark,
		flex: 1,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;
