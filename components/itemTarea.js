import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import EliminarItems from './eliminarItems'


const ItemTarea = ({ tarea, removeItem }) => {
    
    const [checked, setChecked] = useState(false);
    const [estado, setEstado] = useState('Pendiente')
    const [itemseleccionado, setItemSeleccionado] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

   
    const verificarEstado = (value) => {

        if (value) {
            setEstado('Completada')
        } else {
            setEstado('Pendiente')
        }

    }


    const cancelar = () => {
        setModalVisible(false)
    }


    const seleccionarItem = (item) => {
     
        setItemSeleccionado(item)
         setModalVisible(true)
    
     
    };

    



    return (



        <View style={styles.container} >

            <View style={styles.renglon}>
                <Text style={styles.texto}>{tarea.value}</Text>


                <View style={styles.botonera}>
                    <View style={styles.verificacion}>
                        <Text style={styles.textoSwitch}>{estado.toString()}</Text>
                        <Switch
                            style={styles.switch}
                            value={checked}
                            onValueChange={(value) => { verificarEstado(value), setChecked(value) }
                            }
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            seleccionarItem(tarea)
                        
                        }}
                    >
                    
                        <Image source={require('../assets/eliminar.png')} style={styles.imagenBoton} />

                    </TouchableOpacity>
                </View>
            </View>
            <EliminarItems   tarea={tarea} removeItem={removeItem} cancelar={cancelar} modalVisible={modalVisible} itemseleccionado={itemseleccionado}> </EliminarItems>
        </View>
        
    )
}






const styles = StyleSheet.create({

    imagenBoton: {
        width: 30,
        height: 30,
        marginLeft: 10
    },

    textoSwitch: {
        fontSize: 18,
        color: 'blue',
        fontStyle: 'bold',
    },
    verificacion: {
        flexDirection: 'column',
        alingItems: 'center',
        justifyContent: 'center',
    },
    renglon: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100 %',
    },
    switch: {
        marginLeft: 20,
        width: 50,
        height: 50,
    },

    botonera: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },


    container: {
        alingItems: 'center',
        backgroundColor: '#AAFA',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    boton: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        heigth: 30,
        width: 30,
    },
    texto: {
        width: '55%',
        marginRight: 10,
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
    },




})




export default ItemTarea