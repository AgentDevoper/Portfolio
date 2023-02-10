import { ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading'
import {
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';
import { useFonts } from '@expo-google-fonts/josefin-sans';


const Contact = ({ navigation }) => {

    let [fontsLoad] = useFonts({
        bold700: JosefinSans_700Bold,
        JosefinSans_600SemiBold,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_500Medium,
        JosefinSans_700Bold_Italic
    });

    if (!fontsLoad) {
        return <AppLoading />;
    }

    return (
        <ScrollView>
            <ImageBackground
                source={require("../../assets/bg5.jpg")}
                style={{
                    height: 725,
                    width: "100%",
                    flex: 1,
                }}
            >

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
                        onPress={() => navigation.navigate("Skills")}>
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


                <View styles={styles.mainContainer}>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL("https://www.linkedin.com/in/ayush-sengar-0b6575229/") }}
                    >
                        <Text
                            style={[styles.btnText, styles.btn1]}
                        >
                            LinkedIn
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL("https://twitter.com/Ayushse96342326") }}
                    >
                        <Text
                            style={[styles.btnText]}
                        >
                            Twitter
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL("https://github.com/AgentDevoper") }}
                    >
                        <Text
                            style={[styles.btnText]}
                        >
                            Github
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default Contact

const styles = StyleSheet.create({
    mainContainer: {
        
    },
    btnText: {
        fontSize: 30,
        textAlign: "center",
        paddingVertical: 20,
        color: "#4F7CFA",
        fontFamily:"JosefinSans_600SemiBold_Italic"
    },
    btn1: {
        marginTop: 30,

    },

    navbarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        marginTop: 8,
    },
    navbarbtn: {
        paddingTop: 15,
    },
    navbarTxt: {
        marginHorizontal: 15,
        fontSize: 20,
        color: "#32353c",
        fontFamily: "bold700",
    },
})