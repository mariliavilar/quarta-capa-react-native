import React from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native"
import axios from 'axios';
import { useEffect, useState } from 'react';

const data= [
  {
    "anuncioStatus": "DISPONIVEL",
    "criadoEm": "2021-10-05",
    "descricao": "Melhor preço",
    "destaque": null,
    "fotoLivro": "https://firebasestorage.googleapis.com/v0/b/quarta-capa.appspot.com/o/qu%C3%ADmica.jpeg?alt=media&token=79093e8d-3a27-41af-bed8-57a1425b1376",
    "id": "87710264-a002-4ca7-8462-d9236089833e",
    "livro": {
      "ano": 2014,
      "anoEscolar": "PRIMEIRO_ANO_MEDIO",
      "autor": "João Usberco",
      "descricaoEstado": "USADO",
      "disciplina": {
        "id": "b96e26fd-cac1-49be-8233-6307217876b6",
        "nome": "Química",
      },
      "disponivelParaDoacao": false,
      "editora": "Saraiva Didáticos",
      "id": "46582a9a-64c3-45d7-a132-2bbcaeef8505",
      "isbn": "8502223291",
      "titulo": "Química ",
      "valor": 150,
    },
    "titulo": "Química - Volume único",
    "usuario": {
      "cpf": "58462031087",
      "email": "Jully@gmail.com",
      "id": "0593d811-10fc-4a4e-97a4-67a6647000e2",
      "instituicao": null,
      "nome": "Jully",
      "numeroCelular": "5581991318758",
    }
  }
];

const AnunciosCard = ({ urlApi }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getAnuncios();
  }, [null]);

  const getAnuncios = async () => {
    try {
      const resp = await axios.get(urlApi);
      setData(resp.data)
      console.log(resp.data)
    } catch (err) {
      console.error(err);
    }
  }

  const Item = ({ titulo, anoEscolar, valor,fotoLivro }) => (
    <View style={styles.container}>
      <Text style={styles.letras}>{titulo}</Text>
      <Text>{anoEscolar}</Text>
      <Text>{valor}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item titulo={item.titulo}
          anoEscolar={`ANO ESCOLAR: ${item.livro.anoEscolar}`} valor={`PREÇO DO LIVRO: ${item.livro.valor}`}
           />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  letras:{
    fontWeight: 'bold',
    fontSize: 30,
  }
});


export default AnunciosCard