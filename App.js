import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screen/ScreenDashboard';
import Login from './Screen/ScreenLogin';
import Ofertas from './Screen/ScreenOfertas';
import Cv from './Screen/ScreenCv';
import Register from './Screen/ScreenRegister';

const Stack = createNativeStackNavigator();

export default function App() {
  const handleLogin = () => {
    console.log("Usuario ha iniciado sesión");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login">
          {props => <Login {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Ofertas" component={Ofertas} />
        <Stack.Screen name="funciones" component={Cv} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
