import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './views/Inicio';
import IngresarProducto from './views/IngresarProducto';
import NuevaOrden from './views/NuevaOrden';
import OpcionesAdmin from './views/OpcionesAdmin';
import Categoria from './components/Categoria';

const Stack = createStackNavigator();

const App = () => {

  return (

    <>
      <NavigationContainer>

        <Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              title: "Selección de Usuario",
              headerStyle: {
                backgroundColor: '#E5391D'
              },
              headerTintColor: '#FFF',
              headerTitleAlign: 'center'
            }}
          />

          <Stack.Screen
            name='OpcionesAdmin'
            component={OpcionesAdmin}
            options={({ navigation, route }) => ({
              title: "Opciones Administrador"
            })}
          />

          <Stack.Screen
            name='AgregarCategoria'
            component={Categoria}
            options={{
              title: "Agregar Categoria"
            }}
          />
          <Stack.Screen
            name='IngresarProducto'
            component={IngresarProducto}
            options={{
              title: "Nuevo Producto"
            }}
          />
          <Stack.Screen
            name='NuevaOrden'
            component={NuevaOrden}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  btnAdmin: {
    backgroundColor: 'FFF'
  }
})

export default App;
