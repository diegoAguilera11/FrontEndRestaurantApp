import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, Pressable, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from './styles/globalStyles'
import IngresarProducto from './IngresarProducto'
import Categoria from '../components/Categoria'

const OpcionesAdmin = ({ navigation }) => {

    // Props
    const [consultarAPI, setConsultarAPI] = useState(true);


    // Functions
    const volver = () => {
        navigation.navigate('Inicio')
    }

    const visitarIngresarProducto = () => {
        navigation.navigate('IngresarProducto', { setConsultarAPI, consultarAPI})
    }


    const visitarAgregarCategoria = () => {
        navigation.navigate('AgregarCategoria', { setConsultarAPI, consultarAPI })
    }


    return (
        <ScrollView style={styles.contenedor}>

            <Pressable style={styles.btnVolver} onPress={() => volver()} >
                <Text style={styles.btnVolverTexto}>Volver</Text>
            </Pressable>

            <View>
                <Text style={styles.titulo}>Bienvenido Administrador</Text>

                <View style={styles.btnn}>
                    <Pressable style={styles.btnCategoria} onPress={() => visitarAgregarCategoria()} >
                        <Text style={styles.btnCategoriaTexto}> Agregar Categoría </Text>
                    </Pressable>

                    <Pressable style={styles.btnCategoria} onPress={() => visitarIngresarProducto()} >
                        <Text style={styles.btnCategoriaTexto}> Agregar Producto </Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#CDCDCB'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 30,
    },
    btn: {
        backgroundColor: '#EEFF03',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        marginLeft: 10,
        marginRight: 180,
        marginBottom: 20
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353130',
        textAlign: 'center'
    },
    btnVolver: {
        ...globalStyles.btnVolver
    },
    btnVolverTexto: {
        ...globalStyles.btnVolverTexto
    },
    btnCategoria: {
        backgroundColor: '#9D0D04',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    btnCategoriaTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
    btnn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    }
})

export default OpcionesAdmin