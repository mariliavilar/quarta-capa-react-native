import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Pressable } from "react-native";

function PressableChildren({ children }) {
	const navigation = useNavigation();

	const _onPressCarousel = () => {
		navigation.navigate("MeusAnuncios");
	};

	return <Pressable onPress={_onPressCarousel}>{children}</Pressable>;
}

export default PressableChildren;