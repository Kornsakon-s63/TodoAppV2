import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Avatar, BottomNavigation, Card, Searchbar } from 'react-native-paper';
import 'react-native-gesture-handler';

const theme = {
  colors: {
    primary: '#2196f5',

  },
};

function NowScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.mainbox}>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
    </View>
  );
}

function CompletedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>dadweda</Text>
    </View>
  );
}

function ExpireScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>dadweda</Text>
    </View>
  );
}

function CustomNavigationBar() {
  return (
    <Appbar.Header theme={theme}>
        <Appbar.Content title="ToDo App" subtitle="Kornsakon Dumrongkullanit" />
        <Avatar.Image size={40} source={require('./assets/images/4.png')}  />
      </Appbar.Header>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Now" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Now') {
              iconName = focused ? 'alarm' : 'alarm';
            } else if (route.name === 'Completed') {
              iconName = focused ? 'checkmark' : 'checkmark';
            } else if (route.name === 'Expire') {
              iconName = focused ? 'close' : 'close';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          header: CustomNavigationBar,
        })}>
        <Tab.Screen name="Now" component={NowScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
        <Tab.Screen name="Expire" component={ExpireScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainbox:{
    textAlign:'center',
    margin: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
});