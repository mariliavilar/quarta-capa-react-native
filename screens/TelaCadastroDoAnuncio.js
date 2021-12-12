import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Yup from "yup";
import axios from "axios";
import { Title } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";
import DividerForm from "../components/DividerForm";
import defaultStyles from "../config/styles";
import * as options from "../components/resource/campos";

const validationSchema = Yup.object().shape({
	tituloDoAnuncio: Yup.string().required().min(5).label("Título do Anúncio"),
	descricao: Yup.string().label("Descrição"),

	titulo: Yup.string().required().label("Título do Livro"),
	isbn: Yup.string().matches("^[0-9]{10}|[0-9]{13}$").label("ISBN"),
	autor: Yup.string().required().label("Autores"),
	editora: Yup.string().required().label("Editora"),
	anoLivro: Yup.object().required().nullable().label("Ano do Livro"),

	idDisciplina: Yup.object().required().nullable().label("Disciplina"),
	anoEscolar: Yup.object().required().nullable().label("Ano Escolar"),

	disponivelParaDoacao: Yup.object()
		.nullable()
		.required()
		.label("Disponível para doação"),
	valor: Yup.string().matches("^[0-9]{0,6}(.[0-9]{1,2})?$").label("Valor"),
	estadoLivro: Yup.object().required().nullable().label("Estado do Livro"),
});

export function TelaCadastroDoAnuncio({ navigation }) {
	const [disciplinas, setDisciplinas] = useState([]);

	useEffect(() => {
		console.log("Getting disciplinas from back-end");
		getDisciplinas();
	}, [null]);

	const getDisciplinas = async () => {
		try {
			let response = await axios.get(
				"https://quartacapa.herokuapp.com/api/v1/disciplinas"
			);
			setDisciplinas(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const postAnuncio = async (product) => {
		console.log("# Executing POST");
		console.log(product);
		try {
			axios
				.post(`https://quartacapa.herokuapp.com/api/v1/anuncios`, product)
				.then((res) => {
					console.log(res);
				});
		} catch (error) {
			console.log(error);
		}
	};

	function postAnuncioFetch(data) {
		console.log(data);
		return fetch("https://quartacapa.herokuapp.com/api/v1/anuncios", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((apiResponse) => {
				console.log("api response", apiResponse);
			})
			.catch(function (error) {
				return console.log(error);
			});
	}

	const tranformJson = (values) => {
		let hennan = {
			isbn: "8508193424",
			titulo: "Teláris - Matemática - 8º ano",
			autor: "Fernando Viana e Luiz Roberto Dante",
			editora: "Ática Didáticos",
			ano: 2019,
			valor: 169.99,
			descricaoEstado: "seminovo",
			disponivelParaDoacao: false,
			idDisciplina: "7ba63a34-07bd-4f02-9061-dfdc495fd9f3",
			anoEscolar: "PRIMEIRO_ANO_FUNDAMENTAL",
			destaque: true,
			tituloDoAnuncio: "Vendo livro seminovo de Matemática 8o ano",
			descricao: "blablablablabalala",
			fotoLivro: "imagine uma foto bem bonita",
			anuncioStatus: "INDISPONIVEL",
			idUsuario: "537d007b-d8e4-4fbb-875e-e28433ee07cd",
		};

		let valuesTransformed = {
			isbn: values.isbn,
			titulo: values.titulo,
			autor: values.autor,
			editora: values.editora,
			ano: values.anoLivro.id,
			valor: parseFloat(values.valor),
			descricaoEstado: values.estadoLivro.id,
			disponivelParaDoacao: values.disponivelParaDoacao.id,
			idDisciplina: values.idDisciplina.id,
			anoEscolar: values.anoEscolar.id,
			destaque: values.destaque.id,
			tituloDoAnuncio: values.tituloDoAnuncio,
			descricao: values.descricao,
			fotoLivro: "null",
			anuncioStatus: "INDISPONIVEL",
			idUsuario: "0593d811-10fc-4a4e-97a4-67a6647000e2",
		};

		return valuesTransformed;
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/* Header */}
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
						destaque: null,

						disponivelParaDoacao: null,
						valor: 0,
						estadoLivro: null,
					}}
					onSubmit={(values) => {
						let product = tranformJson(values);
						postAnuncioFetch(product);
					}}
					validationSchema={validationSchema}
				>
					{/* dadosAnuncio */}
					<DividerForm icon="numeric-1-circle" title="Dados do seu anúncio" />
					<View style={styles.boxForm}>
						<AppFormField
							icon="bullhorn-outline"
							label="Título do Anúncio"
							maxLength={255}
							name="tituloDoAnuncio"
							placeholder=""
						/>

						<AppFormField
							label="Descrição"
							maxLength={255}
							multiline
							name="descricao"
							numberOfLines={3}
							placeholder=""
						/>
					</View>

					{/* dadosLivro */}
					<DividerForm icon="numeric-2-circle" title="Dados do Livro" />
					<View style={styles.boxForm}>
						<AppFormField
							icon="book"
							label="Título do Livro"
							maxLength={255}
							name="titulo"
							placeholder=""
						/>
						<AppFormField
							icon="numeric"
							label="ISBN"
							keyboardType="numeric"
							maxLength={13}
							name="isbn"
							placeholder="10 a 13 dígitos"
						/>
						<AppFormField
							icon="account"
							label="Autores"
							maxLength={255}
							name="autor"
							placeholder=""
						/>
						<AppFormField
							icon="domain"
							label="Editora"
							maxLength={255}
							name="editora"
							placeholder=""
						/>
						<AppFormPicker
							label="Ano do Livro"
							items={options.anoLivro}
							name="anoLivro"
							placeholder="Selecione..."
						/>
					</View>

					{/* dadosAluno */}
					<DividerForm icon="numeric-3-circle" title="Dados do Aluno" />
					<View style={styles.boxForm}>
						<AppFormPicker
							items={disciplinas}
							label="Disciplina"
							name="idDisciplina"
							placeholder="Selecione..."
						/>
						<AppFormPicker
							items={options.anoEscolar}
							label="Ano Escolar"
							name="anoEscolar"
							placeholder="Selecione..."
						/>
						<AppFormPicker
							items={options.destque}
							label="Destaque seu anúncio"
							name="destaque"
							placeholder="Selecione..."
						/>
					</View>

					{/* dadosVenda */}
					<DividerForm icon="numeric-4-circle" title="Dados da Venda" />
					<View style={styles.boxForm}>
						<AppFormPicker
							items={options.disponivelParaDoacao}
							label="Disponível para Doação"
							name="disponivelParaDoacao"
							placeholder="Selecione..."
						/>
						{/* <AppFormSwitch
							label="Disponível para Doação"
							name="disponivelParaDoacao"
						/> */}
						<AppFormField
							icon="currency-brl"
							keyboardType="numeric"
							label="Valor da Venda"
							maxLength={6}
							name="valor"
							placeholder="0.00"
						/>
						<AppFormPicker
							items={options.estadoLivro}
							label="Estado do Livro"
							name="estadoLivro"
							placeholder="Selecione..."
						/>
					</View>

					<View style={styles.btnSubmit}>
						<SubmitButton title="Enviar" />
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
		backgroundColor: defaultStyles.colors.mariliaGreenLight,
	},
	boxForm: {
		marginTop: 25,
		marginBottom: 35,
	},
});
