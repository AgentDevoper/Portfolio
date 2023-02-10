import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main'
import About from './src/screens/About';
import Skills from './src/screens/Skills';
import Contact from './src/screens/Contact';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home">
          {(props) => <Main {...props} developerName={" Ayush"} />}
        </Stack.Screen> */}


        <Stack.Screen
        name="Home" component={Main}
        />
        <Stack.Screen
          name="About" component={About}
        />
        <Stack.Screen
          name="Skills" component={Skills}
        />
        <Stack.Screen
          name="Contact" component={Contact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App