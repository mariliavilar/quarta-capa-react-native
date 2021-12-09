import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";

import * as options from "../components/resource/campos";

const validationSchema = Yup.object().shape({
	tituloDoAnuncio: Yup.string().required().min(5).label("Título do Anúncio"),
	descricao: Yup.string().label("Descrição"),

	titulo: Yup.string().required().label("Título do Livro"),
	isbn: Yup.number().min(1000000000).max(9999999999999).label("ISBN"),
	autor: Yup.string().required().label("Autores"),
	editora: Yup.string().required().label("Editora"),
	anoLivro: Yup.object().required().nullable().label("Ano do Livro"),

	idDisciplina: Yup.object().required().nullable().label("Disciplina"),
	anoEscolar: Yup.object().required().nullable().label("Ano Escolar"),

	valor: Yup.number().label("Valor"),
	estadoLivro: Yup.object().required().nullable().label("Estado do Livro"),
});

export function TelaCadastroDoAnuncio({ navigation }) {
	const [doacao, setDoacao] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/* Header */}

				<Text>HEADER</Text>

				<AppForm
					initialValues={{
						tituloDoAnuncio: "",
						descricao: "",

						titulo: "",
						isbn: "",
						autor: "",
						editora: "",
						anoLivro: null,

						idDisciplina: null,
						anoEscolar: null,

						disponivelParaDoacao: false,
						valor: "",
						estadoLivro: null,
					}}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
					{/* dadosAnuncio */}
					<View>
						<AppFormField
							// icon="email"
							maxLength={255}
							name="tituloDoAnuncio"
							placeholder="Título do Anúncio"
						/>

						<AppFormField
							maxLength={255}
							multiline
							name="descricao"
							numberOfLines={3}
							placeholder="Descrição"
						/>
					</View>

					{/* dadosLivro */}
					<View>
						<AppFormField
							maxLength={255}
							name="titulo"
							placeholder="Título do Livro"
						/>
						<AppFormField
							keyboardType="numeric"
							maxLength={13}
							name="isbn"
							placeholder="ISBN"
						/>
						<AppFormField maxLength={255} name="autor" placeholder="Autores" />
						<AppFormField
							maxLength={255}
							name="editora"
							placeholder="Editora"
						/>
						<AppFormPicker
							items={options.anoLivro}
							name="anoLivro"
							placeholder="Ano do Livro"
						/>
					</View>

					{/* dadosAluno */}
					<View>
						<AppFormPicker
							items={options.disciplinas}
							name="idDisciplina"
							placeholder="Disciplina"
						/>
						<AppFormPicker
							items={options.anoEscolar}
							name="anoEscolar"
							placeholder="Ano escolar"
						/>
					</View>

					{/* dadosVenda */}
					<View>
						<Switch
							value={doacao}
							onValueChange={(newValue) => setDoacao(newValue)}
						/>
						<AppFormField
							keyboardType="numeric"
							maxLength={6}
							name="valor"
							placeholder="Valor de venda"
						/>
						<AppFormPicker
							items={options.estadoLivro}
							name="estadoLivro"
							placeholder="Estado do Livro"
						/>
					</View>

					<View style={styles.btnSubmit}>
						<SubmitButton title="Post" />
					</View>
				</AppForm>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	btnSubmit: {
		paddingVertical: 10,
		margin: 30,
	},
	container: {
		padding: 10,
	},
});
