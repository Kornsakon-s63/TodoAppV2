import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Avatar, Searchbar, Button, Portal, Provider, TextInput, Text, Dialog, Drawer, Checkbox } from 'react-native-paper';
import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const theme = {
  colors: {
    primary: '#2196f5',
  },
};

function NowScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [inputVal, setInputVal] = useState('test');
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const [checked, setChecked] = React.useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
      <Provider>
        <View style={styles.mainbox}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        </View>
        <View style={styles.container}>
          <Drawer.Item style={{ backgroundColor: '#fff' }} icon="star" label="First Item" />
          <Drawer.Item style={{ backgroundColor: '#fff' }} icon="star" label="First Item" />
        </View>
        
        <Portal>
          <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
            <Dialog.Title>ADD NEW TO DO</Dialog.Title>
            <Dialog.Content>
              <TextInput label='Title' value={inputVal} onChangeText={text => setInputVal(text)} mode="outlined" theme={theme} />
            </Dialog.Content>
            <Dialog.Content>
              <TextInput label='Detail' value={inputVal} onChangeText={text => setInputVal(text)} mode="outlined" theme={theme} />
            </Dialog.Content>
            <Dialog.Content>
              <Button onPress={showDatepicker} mode='outlined' color='#ff6347'> Pick Due Date </Button>
            </Dialog.Content>
            <Dialog.Content>
              <Button onPress={showTimepicker} mode='outlined'color='#ff6347'> Pick Due Time </Button>
            </Dialog.Content>
            <Dialog.Content>
            <Text style={[styles.todotext,{textAlign: 'center',marginTop: 5, marginBottom: 5,}]}>Selected: {date.toLocaleString()}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setIsDialogVisible(false)} theme={theme}>ADD</Button>
            </Dialog.Actions>
              {show && ( <DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} onChange={onChange} /> )}
          </Dialog>
          <View style={styles.addButton} >
            <Button color='#ff6347' icon="plus" mode="contained" onPress={() => setIsDialogVisible(true)}> Add New To Do </Button>
          </View>
        </Portal>
      </Provider>
      
    
  );
}

function CompletedScreen({ navigation }) {
  return (
    <Provider>
      <Text>dadweda</Text>
    </Provider>
  );
}

function ExpireScreen({ navigation }) {
  return (
    <Provider>
      <Text>dadweda</Text>
    </Provider>
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
    margin: 15,
  

  },
  mainbox: {
    textAlign:'center',
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addButton: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,

  }
});