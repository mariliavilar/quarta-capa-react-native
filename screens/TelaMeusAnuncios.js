import React, {useState,useEffect} from 'react'
import {  View,StatusBar,FlatList, ScrollView, StyleSheet,Text } from 'react-native'
import AnunciosCardItem from '../components/AnuncioCard'
import { useQuery } from 'react-query';
import carregaItensGet from '../Api'
import axios from 'axios';



export function TelaMeusAnuncios({ navigation }) {
        const [anunciosUsuario, setAnunciosUsuario] = useState([]);

	useEffect(() => {
		console.log("useEffect");
		getAnunciosUsuario();
	}, [null]);

	const getAnunciosUsuario = async () => {
		try {
			let idUser = '0593d811-10fc-4a4e-97a4-67a6647000e2';
			let response = await axios.get(
				`https://quartacapa.herokuapp.com/api/v1/usuarios/0593d811-10fc-4a4e-97a4-67a6647000e2`
			);
			setAnunciosUsuario(response.data);
		} catch (error) {
			console.error(error);
		}
	}
    console.log(anunciosUsuario)
        return(
            <FlatList
            data={anunciosUsuario} 
            keyExtractor={item => item.id}
            renderItem={({item})=> (
                <View>
                    <AnunciosCardItem item={item}></AnunciosCardItem>
                </View>
            )}
            style={styles.scrollView}>
            </FlatList>
          );
        }
    
    

  const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#e8f1f2',
    },
    container: {
        flex: 1
    }
});


