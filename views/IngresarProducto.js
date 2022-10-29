import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView, Pressable, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from './styles/globalStyles'

const IngresarProducto = ({ navigation, route }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');
    const { setConsultarAPI, consultarAPI } = route.params;

    useEffect(() => {
        const obtenerCategoriasAPI = async () => {

            try {
                if (Platform.OS === "android") {
                    // Local host del equipo.. ANDROID
                    const url = 'http://192.168.0.2:3000/category';
                    fetch(url)
                        .then(respuesta => respuesta.json())
                        .then(resultado => {
                            setCategorias(resultado)
                            setConsultarAPI(false)
                            console.log(resultado)
                        })
                } else {
                    // Local host de la api.. IOS
                    const url = 'http://localhost:3000/category';
                    fetch(url)
                        .then(respuesta => respuesta.json())
                        .then(resultado => {
                            setCategorias(resultado)
                            setConsultarAPI(false)
                            // console.log(resultado)
                        })
                }

            } catch (error) {
                console.log(error)
            }

        }
        obtenerCategoriasAPI();
        
    }, [consultarAPI]);

    const obtenerCategoria = categoria => {
        setCategoria(categoria)
    }

    const volver = () => {
        navigation.navigate('OpcionesAdmin')
    }
    return (
        <ScrollView style={styles.contenedor}>
            {/* <View>
                    <Pressable
                        style={styles.btnCancelar}
                        onLongPress={() => setModal(false)}
                    >
                        <Text style={styles.btnCancelarTexto}>Volver</Text>
                    </Pressable>
                </View> */}

            <Pressable style={styles.btnVolver} onPress={() => volver()}>
                <Text style={styles.btnVolverTexto}>Volver</Text>
            </Pressable>

            <View style={styles.formulario}>

                <Text style={styles.titulo}>Ingrese los datos del nuevo producto</Text>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del producto. ej. Fideos con salsa'
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Descripción</Text>
                    <TextInput
                        style={[styles.input, styles.descripcionInput]}
                        placeholder='Ingresa la descripción del producto'
                        multiline={true}
                        numberOfLines={5}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Precio</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ingresa la descripción del producto'
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Producto</Text>
                    <Picker selectedValue={categoria} onValueChange={categoria => obtenerCategoria(categoria)}>
                        <Picker.Item label="- Seleccione -" value="" />
                        {categorias.map(categoria => (
                            <Picker.Item key={categoria.id} label={categoria.nombre} value={categoria.nombre} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Imagen</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Imagen del producto'
                        keyboardType='numeric'
                    />
                </View>

                <Pressable style={styles.submitBtn}>
                    <Text style={styles.submitBtnTexto}>Agregar Producto</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#E84F26'
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
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 15
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
    btnCancelar: {
        backgroundColor: '#F1B111',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 10,
    },
    btnCancelarTexto: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    descripcionInput: {
        height: 100
    },
    btnVolver: {
        ...globalStyles.btnVolver,
    },
    btnVolverTexto: {
        ...globalStyles.btnVolverTexto
    }
})

export default IngresarProducto;