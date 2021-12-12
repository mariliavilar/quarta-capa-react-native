import React from 'react';
import { Button, View, StyleSheet, Linking } from 'react-native';


export const ButtonWhatsapp = ({data}) => {

   const message = `Olá ${data.nome} ! Tenho interesse no livro ${data.titulo}, podemos conversar?`
   //const telefone = `${data.telefone}`
   const telefone = "5581997730481"

const entrarEmContatoPress = () => {
   Linking.canOpenURL(`whatsapp://send?text=${message}`).then(supported => {
        if (supported) {
          return Linking.openURL(
            `whatsapp://send?phone=${telefone}&text=${message}`
          );
        } else {
         return Linking.openURL(
           `https://api.whatsapp.com/send?phone=${telefone}&text=${message}`
         );
        }
     })
 };

return(
   <View style={styles.buttonsView}>
   <Button 
       title="Entrar em Contato" 
       color="#F29966"    
       accessibilityLabel="Entrar em contato pelo whatsapp"
       onPress={entrarEmContatoPress}
   />

   </View>
   )
}


const styles = StyleSheet.create({

   buttonsView: {
       marginTop: 8,
       flexDirection: "row",
       justifyContent: "center",
     },

})