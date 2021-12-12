import React from 'react'
import { View, Text, Image } from 'react-native'


const AnuncioCardItem = ({item})=> { 
  return(
        <View>
          <View>
            <Image source={{ uri: item.fotoLivro }}/>
            <View>
              <Text>{ item.titulo }</Text>
              <Text>{ item.descricao }</Text>
              <Text>{ item.isbn }</Text>
              <Text>{ item.tituloDoLivro }</Text>
              <Text>{ item.autor }</Text>
              <Text>{ item.editora }</Text>
              <Text>{ item.ano}</Text>
              <Text>{ item.valor }</Text>
              <Text>{ item.descricaoEstadoDoLivro }</Text>
              <Text>{ item.disponivelParaDoacao }</Text>
              <Text>{ item.disciplina }</Text>
              <Text>{ item.nome }</Text>
              <Text>{ item.email }</Text>
              <Text>{ item.numeroCelular }</Text>
              <Text>{ item.anuncioStatus }</Text>
              <Text>{ item.anoEscolar }</Text>
            </View>
          </View>
        </View>
      )
}

export default AnuncioCardItem