import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Image } from "react-native";
import { useQuery } from 'react-query'; 

import { ButtonWhatsapp } from './ButtonWhatsapp';
import { carregaItensGet } from "../Api";
import defaultStyles from "../config/styles";


export const DetalheDoLivro = ({baseUrlApi}) => {

    const idLivro = "59dbbeb3-ecc0-4fdb-8777-15bcb351cf57"

    const { isLoading, error, data } = useQuery(`getAnuncioById`, carregaItensGet(`${baseUrlApi}/anuncios/${idLivro}`));
    console.log("data = ", data);

    if (isLoading) {
        return  <ActivityIndicator size="large" color="grey" />;
    }

    if (error) {
    return (
            <View>
                <Text style={styles.error}>Erro: {error || "Not Found"}</Text>
            </View>
        );
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.textTitulo}>{data.titulo}</Text>
            <Image source={{ uri: data.fotoLivro }} style={styles.imagem}/>
            <Text style={styles.textDescricao}>{data.anoEscolar}</Text>
            <Text style={styles.textDescricao}>{data.disciplina}</Text>
            <Text style={styles.textEstadoDoLivro}>{data.descricaoEstadoDoLivro}</Text>
            <Text style={styles.textPreco}>R$ {data.valor}</Text>
            <ButtonWhatsapp data={data} />
            <Text style={styles.textVendedor}>Vendido por {data.nome}</Text>
            
        </View>
     );
};


const styles = StyleSheet.create({
    container: {
        color: "white",
        paddingHorizontal: 40,
    },

    error: {
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 40,
        paddingVertical:60,
        backgroundColor: "grey",
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },

    imagem: {
        height: 200,
        resizeMode: 'contain',
        marginVertical: 10
    },

    textVendedor: {
        alignSelf: "center",
        fontSize: 12,
        marginTop: 6,
        color: defaultStyles.colors.mariliaGreenDark,    
    },

    textPreco: {
        alignSelf: "center",
        color: defaultStyles.colors.mariliaGreenDark,
        fontSize: 26,
        marginTop: 32,
        fontWeight: "bold"
    },

    textDescricao: {
        alignSelf: "center",
        fontSize: 16,
        paddingTop: 4,
        color: defaultStyles.colors.medium,    
    },

    textEstadoDoLivro: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 10,
        color: defaultStyles.colors.mariliaAccentPink,    
    },

    textTitulo : {
        color: defaultStyles.colors.mariliaGreenDark,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 44,
        marginBottom: 10,
        textAlign: "center",
    },
});