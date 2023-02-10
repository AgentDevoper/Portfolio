import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
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

const Main = ({ navigation }) => {
    const developerName = " Ayush"
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
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    height: 720,
                    width: "100%"
                }}
                resizeMode="cover"
                source={require("../../assets/bg1.jpg")}
            >
                <View style={styles.mainContainer}>
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
                    <View>
                        <View style={styles.introContainer}>
                            <Text style={styles.introtxt}> Hi, I'm
                                {developerName}
                            </Text>
                            <Text style={{
                                fontSize: 31,
                                color: "#6E7071",
                                fontFamily: "JosefinSans_600SemiBold_Italic",
                                marginTop: 8,
                            }}>Frontend developer</Text>


                            <TouchableOpacity
                                style={{
                                    textAlign: "center",
                                }}
                                onPress={() => navigation.navigate("About")}
                            >
                                <Text style={{
                                    marginVertical: 12,
                                    fontSize: 18,
                                    textAlign: "center",
                                    fontFamily: "bold700",
                                    paddingTop: 7,
                                }}>
                                    About me
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default Main

const styles = StyleSheet.create({
    mainContainer: {

    },
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
    introContainer: {
        marginTop: 230,
        textAlign: "center",
    },
    introtxt: {
        fontSize: 47,
        fontWeight: "bold",
        fontFamily: "JosefinSans_600SemiBold_Italic",
    },
    imgContainer: {
        textAlign: "center",
        justifyContent: "center",
    },
})