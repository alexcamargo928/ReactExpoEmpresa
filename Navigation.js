import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
//Screens
import Cv from "./Screen/ScreenCv";
import Dashboard from "./Screen/ScreenDashboard";
import Login from "./Screen/ScreenLogin";
import Ofertas from "./Screen/ScreenOfertas";
import Register from "./Screen/ScreenRegister";

const HomeStackNavigation = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigation.Navigator initialRouteName="Login">
            <HomeStackNavigation.Screen name="Inicio de Sesion" component={Login} />
            <HomeStackNavigation.Screen name="Cerrar" component={Dashboard} />
            <HomeStackNavigation.Screen name="Registro" component={Register}/>
            <HomeStackNavigation.Screen name="Ofertas" component={Ofertas} />
            <HomeStackNavigation.Screen name="Perfil" component={Cv} />
        </HomeStackNavigation.Navigator>
    );
};

function Navigetion () {
    
}

export default  function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}