import Secciones from "../navBar/Secciones";
import Footer from "../Footer/Footer";
import ArchivoU from "./ArchivoU";
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { logos } from "../../data/constantes";

const Archivo=()=>{
    const styles=StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#E4E4E4',
          },
          section: {
            margin: 10,
            padding: 10,
            display:'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
            gridColumnGap: '0px',
            gridRowGap: '0px',
          },
          image: {
            width: '100%',
            height: 'auto',
          },
          item:{
            gridArea: '1 / 1 / 2 / 2',
          }
    })


    return(
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View >
                        <View style={styles.section}>
                            <View style={styles.item}>
                                <Text>Apellido:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Nombre:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Fecha:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Fecha de nacimiento:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Sexo:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Domicilio:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Localidad:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Provincia:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Telefono:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Mail:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Profesión:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Profesión:</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Observaciones:</Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    )


}

export default Archivo;