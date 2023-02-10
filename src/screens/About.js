import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
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



const About = ({navigation}) => {

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
        source={require("../../assets/bg3.jpg")}
        resizeMode="cover"
        style={{
          height: 728,
          width: "100%",
          flex: 1,
        }}>
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
          <View>

            <Text
              style={{
                textAlign: "center",
                paddingTop: 300,
                fontSize: 30,
                color: "white",
                fontFamily: "bold700",
                letterSpacing: 2,
              }}
            >
              My name is Ayush.{'\n'} I am a Frontend developer.  {'\n'}I love to build apps (Frontend) with{'\n'} great user experience.  {'\n'} From India, Uttar Pradesh.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView >
  )
}

export default About

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
    color: "#fff",
    fontFamily: "bold700",
  },
}) 