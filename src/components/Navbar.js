import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Navbar = ({ navigation }) => {
    return (
        <View>
            <View style={styles.navbarContainer}>

                <TouchableOpacity
                    style={styles.navbarbtn}
                    onPress={() =>
                        navigation.navigate("Home")
                    }>
                    <Text style={styles.navbarTxt}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navbarbtn}
                    onPress={() => navigation.navigate("Skills")
                    }>
                    <Text style={styles.navbarTxt}>Skills</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navbarbtn}
                    onPress={() => navigation.navigate("About")}>
                    <Text style={styles.navbarTxt}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navbarbtn}
                    onPress={() => navigation.navigate("Contact")}>
                    <Text style={styles.navbarTxt}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    navbarbtn: {
        paddingTop: 23
    },
    navbarTxt: {
        marginHorizontal: 15,
        fontSize: 20,
        color: "#32353c",
        fontFamily: "bold700",
    },
})