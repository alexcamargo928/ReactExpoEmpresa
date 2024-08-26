/*
Desarrollado por: Israel Steven Camargo Menjura
Institución: SENA
Año: 2024
*/
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image ,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Photo= require('../assets/Logo.png');

export const Dashboard = () => {
    const navigation = useNavigation();
    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContenedor}>
                    <Image style={styles.foto} source={Photo} />
                    <Text style={styles.headerTitulo}>EmpleoIsra</Text>
                </View>
            </View>

            <View style={styles.nav}>
                <View style={styles.navC}>
                    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Ofertas")} >
                        <Text style={styles.navText}>Ofertas de Trabajo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Perfil")}>
                        <Text style={styles.navText}>Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.contenedorA}>
                <Text style={styles.titulaA}>Bienvenido a EmpleoIsra</Text>
                <Text style={styles.subtituloA}>Es un software que creado por el sena ayuda a buscar tranajo a atraves de la diferentes ofertas laborales</Text>
            </View>
            <View style={styles.Categorias}>
                <Text style={styles.subtituloC}>Categorias</Text>
                <View style={styles.contenedorB}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Frontend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Backend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Full-Stack</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>DevOps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mobile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tablaContenedor}>
                <View style={styles.titulosTabla}>
                    <Text style={styles.titulosTablaText}>Titulo</Text>
                    <Text style={styles.titulosTablaText}>Compañia</Text>
                    <Text style={styles.titulosTablaText}>Ubicación</Text>
                    <Text style={styles.titulosTablaText}>Salario</Text>
                    <Text style={styles.titulosTablaText}>Acciones</Text>
                </View>

                <View style={styles.tablaRow}>
                    <Text style={styles.tablaCelda}>Frontend Developer</Text>
                    <Text style={styles.tablaCelda}>Acme Inc</Text>
                    <Text style={styles.tablaCelda}>New York, NY</Text>
                    <Text style={styles.tablaCelda}>$80,000 - $100,000</Text>
                    <TouchableOpacity style={styles.aplicarButton}>
                    <Text style={styles.aplicarText}>Applicar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tablaRow}>
                    <Text style={styles.tablaCelda}>Backend Developer</Text>
                    <Text style={styles.tablaCelda}>Tech Solutions</Text>
                    <Text style={styles.tablaCelda}>San Francisco</Text>
                    <Text style={styles.tablaCelda}>$90,000 - $120,000</Text>
                    <TouchableOpacity style={styles.aplicarButton}>
                    <Text style={styles.aplicarText}>Applicar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tablaRow}>
                    <Text style={styles.tablaCelda}>Full-Stack Developer</Text>
                    <Text style={styles.tablaCelda}>Digital Innovations</Text>
                    <Text style={styles.tablaCelda}>Chicago, IL</Text>
                    <Text style={styles.tablaCelda}>$100,000 - $130,000</Text>
                    <TouchableOpacity style={styles.aplicarButton}>
                    <Text style={styles.aplicarText}>Applicar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tablaRow}>
                    <Text style={styles.tablaCelda}>DevOps Engineer</Text>
                    <Text style={styles.tablaCelda}>Cloud Solutions</Text>
                    <Text style={styles.tablaCelda}>Seattle, WA</Text>
                    <Text style={styles.tablaCelda}>$80,000 - $100,000</Text>
                    <TouchableOpacity style={styles.aplicarButton}>
                    <Text style={styles.aplicarText}>Applicar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tablaRow}>
                    <Text style={styles.tablaCelda}>Mobile Developer</Text>
                    <Text style={styles.tablaCelda}>Mobile Apps Inc.</Text>
                    <Text style={styles.tablaCelda}>Austin, TX</Text>
                    <Text style={styles.tablaCelda}>$75,000 - $95,000</Text>
                    <TouchableOpacity style={styles.aplicarButton}>
                    <Text style={styles.aplicarText}>Applicar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tablaRow}></View>



            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        width: "100%",
        height: "100%",
        backgroundColor: "#bbebbb",
    },
    header: {
        backgroundColor: '#273746',
        padding: 16,
        borderRadius: 8,
        marginTop: 17,
        marginBottom: 16,
        alignItems: 'center'
    },
    headerContenedor: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 8,
    },
    foto: {
        height: 70,
        width: 75,
        objectFit:'fill',
        
    },

    nav:{
        marginBottom: 16,
        backgroundColor: '#1e8449',
    },

    navC:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        gap: '30%'
    },

    navButton:{
        backgroundColor: '#145a32',
        width: "15%",
        height: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        padding :'1%',
        borderRadius: 4
    },

    navText:{
        color: '#FFFFFF',
        fontSize: 10
    },

    contenedorA: {
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
        height: "35%",
        backgroundColor:'#138d75'
    },
    titulaA: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 2,
        paddingTop:100,
        textAlign: 'center',
    },
    subtituloA: {
        fontSize: 16,
        color: '#B0B0B0',
        textAlign: 'center',
    },
    Categorias: {
        marginBottom: 16
    },
    subtituloC: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8
    },
    contenedorB: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        gap: 6
    },
    button: {
        backgroundColor: '#566573',
        paddingVertical: 1,
        paddingHorizontal: 6,
        borderRadius: 4
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16
    },
    tablaContenedor: {
        borderColor: '#DDDDDD',
        backgroundColor:'#F7F7F7'
    },
    titulosTabla: {
        flexDirection: 'row',
        backgroundColor: '#00897b',
        paddingVertical: 8,
        paddingHorizontal: 1,
        alignItems:'flex-end',
        borderBottomWidth: 2,
        borderColor: '#DDDDDD'
    },
    titulosTablaText: {
        flex: 1,
        fontSize:14,
        fontWeight: 'bold'
    },
    tablaRow: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
        alignItems:'flex-end',
    },
    tablaCelda: {
        flex: 1,
        alignItems:'flex-end',
    },
    aplicarButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    aplicarText: {
        color: '#FFFFFF'
    }
});

export default Dashboard;
