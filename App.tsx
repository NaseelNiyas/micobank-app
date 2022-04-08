import { NativeBaseProvider, extendTheme, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Balance from './pages/Balance';
import Home from './pages/Home';
import Reward from './pages/Reward';
import Settings from './pages/Settings';
import Store from './pages/Store';
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const theme = extendTheme({
  config,
  components: {
    Button: {
      baseStyle: {
        rounded: 'lg',
      },
      defaultProps: {
        colorScheme: 'green',
        transition: 'background-color 0.2s',
      },
    },
  },
});

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home',
              animation: 'slide_from_left',
              headerStyle: {
                backgroundColor: 'rgb(17, 24, 39)',
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Reward'
            component={Reward}
            options={{
              title: 'Reward',
              animation: 'slide_from_left',
              headerStyle: {
                backgroundColor: 'rgb(17, 24, 39)',
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Settings'
            component={Settings}
            options={{
              title: 'Settings',
              animation: 'slide_from_left',
              headerStyle: {
                backgroundColor: 'rgb(17, 24, 39)',
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Store'
            component={Store}
            options={{
              title: 'Settings',
              animation: 'slide_from_left',
              headerStyle: {
                backgroundColor: 'rgb(17, 24, 39)',
              },
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Balance'
            component={Balance}
            options={{
              title: 'Balance',
              animation: 'slide_from_left',
              headerStyle: {
                backgroundColor: 'rgb(17, 24, 39)',
              },
              headerTintColor: '#fff'
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
