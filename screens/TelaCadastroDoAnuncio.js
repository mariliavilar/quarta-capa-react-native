import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(5).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
});

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Cloathing", value: 2 },
	{ label: "Cameras", value: 3 },
];

export function TelaCadastroDoAnuncio({ navigation }) {
	return (
		<View style={styles.container}>
			{/* Header */}

			<Text>HEADER</Text>

			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField maxLength={255} name="title" placeholder="Title" />

				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="Price"
					placeholder="Price"
				/>

				<AppFormPicker
					items={categories}
					name="category"
					placeholder="Category"
				/>

				<AppFormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>

				<SubmitButton title="Post" />
			</AppForm>

			{/* 
            <AppTextInput placeholder="Username" icon="email"/>

            <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />

            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                items={categories}
                icon="apps"
                placeholder="Anything" /> */}

			{/* <TextInput 
                onChangeText={text => setFirstName(text)}
                placeholder="First Name"
                style={{
                    borderBottomColor: "#ccc",
                    borderBottomWidth: 1,
                }} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
