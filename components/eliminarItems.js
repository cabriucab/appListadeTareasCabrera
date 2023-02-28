import { TouchableOpacity, Modal, StyleSheet, Text, View, Button } from 'react-native'





export default function eliminarItems({ modalVisible, removeItem, cancelar, tarea }) {






  return (



    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
    >
      <View style={styles.modalContainer}>

        <View style={styles.modalTitle}>
          <Text >Eliminar Item</Text>
        </View>

        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Está seguro que desea eliminar el item?</Text>
        </View>

        <View style={styles.modalActions}>

          <TouchableOpacity style={styles.botonDel}>
            <Button title='Eliminar' onPress={() => {
              removeItem(tarea.id)
            }}></Button>
          </TouchableOpacity>


          <TouchableOpacity style={styles.botonCancel}>
            <Button style={styles.botonCancel} title='Cancelar' onPress={() => {
              cancelar()
            }}></Button>
          </TouchableOpacity>

        </View>


      </View>

    </Modal>

  )
}

const styles = StyleSheet.create({

  botonCancel: {
    padding: 20,
  },



  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    alignItems: 'center',
  },



  modalText: {
    fontSize: 25,
    color: 'black',
    marginBottom: 15,
    textAlign: "center"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },



})