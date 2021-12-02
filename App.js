import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TelaInicio } from './screens/TelaInicio';
import { TelaCadastroDoAnuncio } from './screens/TelaCadastroDoAnuncio';
import { TelaMeusAnuncios } from './screens/TelaMeusAnuncios';
import { TelaDetalheDoAnuncio } from './screens/TelaDetalheDoAnuncio';
import { TelaPerfil } from './screens/TelaPerfil';


const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    //Todas as telas foram inicialmente colocadas no tab navigation para facilitar o desenvolvimento de cada integrante, uma vez que ainda não temos a passagem de uma tela para outra através de outros componentes que não a tab navigation
      //Telas pertencentes à tab navigation: Inicio / Meus Anuncios / Perfil
      //Tela Cadastro do Anuncio virá de btn dentro de Meus Anuncios
      //Tela Detalhe do Anuncio virá ao clicar em um dos anuncios disponíveis na tela de Inicio
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Inicio" component={TelaInicio} options={{ title: 'Início' }} />
          <Tab.Screen name="DetalheDoAnuncio" component={TelaDetalheDoAnuncio} options={{ title: 'Detalhe do Anúncio' }} />
          <Tab.Screen name="MeusAnuncios" component={TelaMeusAnuncios} options={{ title: 'Meus Anúncios' }} />
          <Tab.Screen name="CadastroDoAnuncio" component={TelaCadastroDoAnuncio} options={{ title: 'Cadastrar' }} />
          <Tab.Screen name="Perfil" component={TelaPerfil} options={{ title: 'Perfil' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
