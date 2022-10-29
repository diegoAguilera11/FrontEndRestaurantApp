import React, { useState } from 'react'
import { View, StyleSheet, Pressable, TextInput, Text, Alert } from 'react-native'
import globalStyles from '../views/styles/globalStyles'

const Categoria = ({ navigation, route }) => {

    const { setConsultarAPI, consultarAPI } = route.params;

    const [nombre, setNombre] = useState('');
    const volver = () => {
        navigation.navigate('OpcionesAdmin')
    }

    // Almacenar cateogria en la BD
    const guardarCategoria = async () => {
        const categoria = {
            nombre
        }

        // Validacion
        if (Object.values(categoria).includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }

        // Guardar cliente en la api
        try {

            if (Platform.OS === "android") {
                // Local host del equipo.. ANDROID
                const url = 'http://192.168.0.2:3000/category';
                await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(categoria),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                mostrarAlerta(true)
            } else {
                // Local host de la api.. IOS
                const url = 'http://localhost:3000/category';
                await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(categoria),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                mostrarAlerta(true)
            }

        } catch (error) {
            mostrarAlerta('error')
            console.log(error)
        }

        // Limpiar Formulario
        setNombre('');

        // cambiar a true para refrescar la nueva categoria
        setConsultarAPI(false)
    }

    const mostrarAlerta = (tipo) => {
        if (!tipo) {
            Alert.alert('Error', 'La categoría no se ha podido agregar')
            return
        }
        Alert.alert('Exito', 'La categoría ha sido agregada con exito')


    }

    return (
        <View style={styles.contenedor}>
            <Pressable style={styles.btnVolver} onPress={() => volver()} >
                <Text style={styles.btnVolverTexto}>Volver</Text>
            </Pressable>

            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Nombre de la Categoría</Text>
                    <TextInput
                        style={styles.input}
                        label="Nombre"
                        placeholder='Ingresa el nombre de la categoría'
                        onChangeText={texto => setNombre(texto)}
                        value={nombre}
                    />
                </View>

                <Pressable style={styles.submitBtn} onPress={() => guardarCategoria()}>
                    <Text style={styles.submitBtnTexto}>Agregar Categoría</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#CDCDCB'
    },
    formulario: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 10,
        paddingVertical: 35,
        paddingHorizontal: 20,
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    btnVolver: {
        ...globalStyles.btnVolver
    },
    btnVolverTexto: {
        ...globalStyles.btnVolverTexto
    },
    label: {
        color: '#64748B',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    submitBtn: {
        backgroundColor: '#E7C90A',
        padding: 15,
        marginTop: 20,
        borderRadius: 10
    },
    submitBtnTexto: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})

export default Categoria