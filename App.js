import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

let notes = [
  {
    id: 1,
    content: "HTML on helppoa",
    date: "2017-12-10T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Selain pystyy suorittamaan vain javascriptiä",
    date: "2017-12-10T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "HTTP-protokollan tärkeimmät metodit ovat GET ja POST",
    date: "2017-12-10T19:20:14.298Z",
    important: true,
  },
];

class NoteList extends React.Component {
  state = {
    loading: true,
    error: false,
    notes: notes,
    newNote: "",
  };
  handleNoteChange = (e) => {
    console.log(e);
    this.setState({ newNote: e });
  };
  addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5,
      id: this.state.notes.length + 1,
    };
    const sameNote = this.state.notes
      .map((n) => n.content)
      .includes(noteObject.content);
    
    const notes = this.state.notes.concat(noteObject);
    {
      !sameNote
        ? this.setState({
            notes: notes,
            newNote: "",
          })
        : Alert.alert("Note allready exists");
    }
    console.log('lisätty')
  };
  render() {
    
    return (
      <View style={styles.container}>
        <Notes
          notes={this.state.notes}
        />
        <Button title='Add note'  onPress={(e) => this.navigation.navigate('Add note')} />
        <Input
          kirjoitus={this.handleNoteChange}
          arvo={this.state.newNote}
          paino={this.addNote}
        />
      </View>
    );
  }
}

const Notes = ( {notes} ) => {
  console.log(notes)
  return (
    <View style={styles.container}>
    <ScrollView >
      {notes.map((n) => (
        <Text key={n.id} style={styles.text}>{n.content}</Text>
      ))}
    </ScrollView>
    
    </View>
  );
};
const Input = ( {arvo, kirjoitus, paino} ) => {
  
  return (
    <View >
      <TextInput
        style={styles.input}
        placeholder="Write the note here"
        defaultValue={arvo}
        onChangeText={kirjoitus}
      />
      <TouchableOpacity style={styles.button} onPress={paino}>
        <Text style={{ textAlign: "center", fontSize: 30 }}>ADD NOTE</Text>
      </TouchableOpacity>
    </View>
  );
};
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Notes" component={NoteList} />
        <Stack.Screen name='Add note' component={Input}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
