import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function listTareas() {

    const seleccionarItem = (item) => {
        setItemSeleccionado(item)
        setModalVisible(true)
      
      };
    
    
      const removeItem = (id) => {
        console.log('borrrad')
       setLista((lista) => lista.filter((item) => item.id !== id));
        setModalVisible(false);
     
       };





  return (
    <View>

    <FlatList style={styles.Flat}
         data={lista}
        keyExtractor={item => item.id}
       renderItem={(itemdata) => (
          <Pressable onPress={() => {
             seleccionarItem(itemdata.item)
           }}>

   <Text style={styles.lista}>{itemdata.item.value}</Text>
   </Pressable>
         )}
        renderItem={({ item}) => onPress={() => {
          seleccionarItem(item) 
          }}/>}

       ItemSeparatorComponent={() => <View style={{ height: 1, marginBottom:10, backgroundColor: 'black' }} />}
        />

    </View>
  )
}

const styles = StyleSheet.create({})