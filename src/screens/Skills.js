import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
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

const Skills = ({ navigation }) => {
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
          height: "100%",
          width: "100%"
        }}
        resizeMode="cover"
        source={require("../../assets/bg2.jpg")}
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
        <View style={{
          marginTop: 40
        }}>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 280,
              fontSize: 22,
              marginBottom: 265,
              fontWeight: 'bold',
              fontFamily: " JosefinSans_700Bold_Italic",
              color: "#707B7C",
              letterSpacing:1,
              lineHeight:25,
            }}
          >
              I know React Native, HTML, CSS, JavaScript etc. {'\n'}I know web development fundamentals.{'\n'} I am very good in cloning.  {'\n'}I am very good in React Native.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default Skills

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
    color: "black",
    fontFamily: "bold700",
  },
})