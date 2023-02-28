import { View, Text, StyleSheet, Dimensions, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import ItemTarea from '../components/itemTarea';

const screenHeight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;




const Home = () => {

    const [lista, setLista] = useState([])
    const [item, setItem] = useState('')
    const [estados, setEstados] = useState(false)
    const onHandlerChangeItem = (text) => { setItem(text) }
    const [agregarNuevoItem, setAgregarNuevoItem] = useState(false)


    const agregarItem = () => {

        setLista([...lista, { id: Math.random(), value: item}])
        setItem('')
        setAgregarNuevoItem(false)

    }

 const removeItem = (id) => {
   
    setLista((lista) => lista.filter((item) => item.id !== id));
   
 
};







    return (
        <View style={styles.container} >

            {agregarNuevoItem &&
                (



                    <TouchableOpacity >
                        <TextInput style={styles.input} placeholder='Ingrese un Items a su lista Lista'
                            onChangeText={onHandlerChangeItem} value={item} />
                        <View style={styles.contenedorBoton}>
                            <View style={styles.botonAgregar}>
                            <Button title='Agregar ' onPress={agregarItem}></Button>
                            </View>
                            <Button title='Cancelar ' onPress={() => setAgregarNuevoItem(false)}></Button>
                            
                        </View>

                    </TouchableOpacity>


                )
            }




            <FlatList style={styles.Flat}
                data={lista}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ItemTarea tarea={item} removeItem={removeItem} />}
                ItemSeparatorComponent={() => <View style={{ height: 1, marginBottom: 10, backgroundColor: 'black' }} />}
                ListHeaderComponent={() => <Text style={{ backgroundColor: 'white', marginTop: 20, marginBottom: 20, fontSize: 30 }}>Lista de  Tareas</Text>} />



            <View style={styles.posicionBoton}>
                < TouchableOpacity

                    onPress={() => setAgregarNuevoItem(true)}>

                    <Text style={styles.addBoton} >+</Text>


                </TouchableOpacity>


            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50,
        margin: 15,
        color: '#FFF',
    },

    posicionBoton: {
        top: screenHeight - 150,
        paddingLeft: screenwidth - 80,
        position: 'absolute',

    },

    addBoton: {
        width: 60,
        height: 60,
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: 43,
        fontWeight: 'bold',
        borderRadius: 50,
        textAlign: 'center',


    },


    Flat: {
        width: '100%',

    },


    ingreso: {

        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imagen: {
        width: 100,
        height: 100,
    },

    input: {
        fontSize: 20,
        width: '80%',
        height: 50,
        backgroundColor: '#aed6f1',
        borderRadius: 10,
        padding: 10,



    },

    contenedorBoton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        
    },
    
    botonAgregar: {

        marginEnd: 10,
      


    },

    botonCancelar: {

       
        backgroundColor: 'red',

    },



    titulo: {
        marginTop: 20,
        fontSize: 25,

    }
});

export default Home