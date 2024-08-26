/*
Desarrollado por: Israel Steven Camargo Menjura
Institución: SENA
Año: 2024
*/
import { Text, View, StyleSheet,TouchableOpacity,TextInput} from 'react-native'


export const Ofertas = () => {
    return (
        <View style={styles.Container}>

            <View style = {styles.contenedorT}>
                <Text style={styles.Titulo}>Ofertas de Trabajo</Text>
                <TextInput style={styles.buscar} placeholder="Buscar ofertas..." />
            </View>

            <View style={styles.Ofert}>
                <View style = {styles.contenedorA}>
                    
                    <View style={styles.card}>
                        <Text style={styles.tituloOfert}>Desarrollador Frontend</Text>
                        <Text style={styles.describcionOfert}>Buscamos un desarrollador frontend con experiencia en React y TypeScript.</Text>
                        <View style={styles.Footer}>
                            <View>
                                <Text>Remoto</Text>
                            </View>
                            <View>
                                <Text>Tiempo completo</Text>
                            </View>
                            <View>
                                <Text>Salario de 2,000,000Cop</Text>
                            </View>
                        </View>
                        <TouchableOpacity style = {styles.boton}>
                            <Text style={styles.aplicar}>Aplicar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.tituloOfert}>Diseñador UX/UI</Text>
                        <Text style={styles.describcionOfert}>Necesitamos un diseñador con habilidades en investigación de usuarios y diseño de interfaces.</Text>
                        <View style={styles.Footer}>
                            <View>
                                <Text>Madrid, España</Text>
                            </View>
                            <View>
                                <Text>Tiempo completo</Text>
                            </View>
                            <View>
                                <Text>Salario de 40,000 - 60,000 EUR</Text>
                            </View>
                        </View>
                        <TouchableOpacity style = {styles.boton}>
                            <Text style={styles.aplicar}>Aplicar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.tituloOfert}>Analista de Datos</Text>
                        <Text style={styles.describcionOfert}>Buscamos un analista de datos con conocimientos en SQL y herramientas de visualización.</Text>
                        <View style={styles.Footer}>
                            <View>
                                <Text>Remoto</Text>
                            </View>
                            <View>
                                <Text>Tiempo completo</Text>
                            </View>
                            <View>
                                <Text>Salario de 35,000 - 50,000 USD</Text>
                            </View>
                        </View>
                        <TouchableOpacity style = {styles.boton}>
                            <Text style={styles.aplicar}>Aplicar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.tituloOfert}>Gerente de Proyecto</Text>
                        <Text style={styles.describcionOfert}>Necesitamos un gerente de proyecto con experiencia en gestión ágil de proyectos.</Text>
                        <View style={styles.Footer}>
                            <View>
                                <Text>Buenos Aires, Argentina</Text>
                            </View>
                            <View>
                                <Text>Tiempo completo</Text>
                            </View>
                            <View>
                                <Text>Salario de 60,000 - 80,000 USD</Text>
                            </View>
                        </View>
                        <TouchableOpacity style = {styles.boton}>
                            <Text style={styles.aplicar}>Aplicar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    Container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#bbebbb",
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorT:{
        marginTop:'15%',
        marginBottom:'5%',
        alignItems: 'center',
        gap: 12,
    },
    Titulo:{
        marginTop:'15%',
        fontSize: 34,
        fontWeight: 'bold',
    },
    buscar:{
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor:'lightgray',
        borderColor: '#D0D0D0',
        paddingHorizontal: '30%'
    },

    Ofert:{
        width: "100%",
        height: "90%",
        backgroundColor: '#39c834',
        borderRadius: 25,
        padding:12,
    },
    
    contenedorA:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 13,
    },

    card: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        borderWidth: 14,
        borderColor: '#D0D0D0',
        padding: 10,
        width: "100%",
        gap: 12,
    },

    tituloOfert: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    describcionOfert: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },

    Footer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    aplicar:{
        fontSize: 15,
        fontWeight: 'bold',
    },

    boton:{
        backgroundColor: '#27ae60',
        paddingVertical: 9,
        paddingHorizontal: 9,
        borderRadius: 8,
        marginTop: 10, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default Ofertas;