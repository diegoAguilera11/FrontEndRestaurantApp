import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, Modal, SafeAreaView } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import IngresarProducto from './IngresarProducto';

const Inicio = ({ navigation }) => {

    const producto = {
        codigo: '20202222dddf',
        nombre: 'pollo con papas',
        descripcion: 'es muy rico',
        precio: 4500,
        categoria: 'comida'
    }

    const [modalIngresarProducto, setModalIngresarProducto] = useState(false)
    const [modalNuevaOrden, setModalNuevaOrden] = useState(false)

    const visitarOpcionesAdministrador = () => {
        navigation.navigate('OpcionesAdmin')
    }

    return (
        <SafeAreaView style={styles.contenedor}>
            <View>
                <Text style={styles.titulo}>Bienvenido a Restaurant APP</Text>
                <View>
                    <Pressable
                        style={styles.btn}
                        onPress={() => visitarOpcionesAdministrador()}
                    >
                        <Text style={styles.btnTexto}>Administrador</Text>
                    </Pressable>

                    <Pressable
                        style={styles.btn}
                        onPress={() => visitarNuevoProducto()}
                    >
                        <Text style={styles.btnTexto}>Cliente</Text>
                    </Pressable>
                </View>

            </View>
            {modalIngresarProducto && (
                <Modal
                    animationType='slide'
                    visible={modalIngresarProducto}
                >
                    <IngresarProducto
                        setModal={setModalIngresarProducto}
                    />
                </Modal>
            )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#E16E01'
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 50,
        marginBottom: 60,
        color: '#000',
        fontWeight: 'bold'
    },
    btn: {
        marginBottom: 20,
        backgroundColor: '#EEFF03',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 40
    },
    btnTexto: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#353130'
    },
    label: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
        textTransform: 'uppercase',
        color: '#1E1D1D',
        fontWeight: 'bold'
    }
})

export default Inicio;