import * as React from 'react'
import { StatusBar } from 'expo-status-bar';

import {  Text, View, TextInput, Button, ScrollView } from 'react-native';
import styles from './Styles'
import { SafeAreaView } from 'react-native-safe-area-context';

const notes = [
  {
    id: 1,
    content: 'HTML on helppoa',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Selain pystyy suorittamaan vain javascriptiä',
    date: '2017-12-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-10T19:20:14.298Z',
    important: true
  }
]

const rivit = notes.map(note => <Text key={note.id}>Note {note.id}</Text>)
const Input = () => {
  return (
    <View>
        <TextInput placeholder='Write the note here'/>
        <Button 
          title='ADD NOTE' 
          onPress={() => alert('Nothing implemented yet!')} 
        />
    </View>
  )
}
const App = () => {
  console.log(rivit)
  return (
    <SafeAreaView style={styles.container}>
      <View>{
        rivit}
      </View>
      <View>
        <Input />
      </View>   
    </SafeAreaView>
  );
}

export default App

