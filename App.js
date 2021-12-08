import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';





const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home3 </Text>
    </View>
  )
}

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Profile </Text>
    </View>
  )
}

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
            labelStyle: 
            { 
              //color: 'red',// labelStyle sẽ chồng màu lên activeTintColor và inactiveTintColor
              fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'green',
        }}
      >
        <Tab.Screen name='Home1' component={Home}
          options={{
            tabBarLabel:  'HOME2',
            tabBarIcon: () => <FontAwesome name="home" size={30}/>
          }}
        />
        <Tab.Screen name='Profile' component={Profile}
          options={{
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({color}) => <FontAwesome name="gear" size={30} color={color}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



/*
const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  return(
    <View style = {styles.container}>
      <Text style = {styles.text}>Login screen</Text>
      <Button title='Login' onPress={() => {
        navigation.replace('Home');
       }}/>
    </View>
  );
};

const Home = ( {navigation} ) => {
  const [number, setNumber] =useState(0);
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.text}> {number} </View>
      <Button title='Go to Detail' 
        onPress={() => {
          navigation.navigate('Detail',{
            id: 1,
            count: 1,
            number,
            setNumber,
          });
        }}/>
    </View>
  )
}

const Detail = ( {navigation, route} ) => {
  const [number, setNumber] = useState(route.params.number)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
      <Text style={styles.text}>{route.params.number}</Text>
      <Button title="Increase"
        onPress={() =>{
          setNumber(number+1),
          route.params.setNumber(number + 1);
        }}/>
    </View>
  )
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>  
        <Stack.Screen name='Detail' 
          component={Detail}
          initialParams={{
            count: '1',
            obj: {a: 1, b:1},
          }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/