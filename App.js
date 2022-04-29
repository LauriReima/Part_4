import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  ActivityIndicator
} from "react-native";
import styles from "./Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import noteService from './services/notes'

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
    notes: [],
    newNote: "",
  };
  constructor(props) {
    super(props)
  }
  handleNoteChange = (e) => { 
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
    
  };
  save = async () => {
    try {
      let nootit = await AsyncStorage.setItem('Nootit')
      if (nootit !== null) {
        this.setState({
          notes: nootit
        })
      }
    } catch(err){
      console.log(err)
    }
  }
  load = async () => {
    try {
      await AsyncStorage.getItem('Nootit', this.state.notes)
    } catch(err){
      console.log(err)
    }
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Notes notes={this.state.notes} />
        <Input
          kirjoitus={this.handleNoteChange}
          arvo={this.state.newNote}
          paino={this.addNote}
          tallennus={this.save}
        />
      </View>
    );
  }
}
class List extends React.Component {
  state = {
    loading: true,
    notes: notes,
  };
 
  
  render() {
    // if (this.state.loading) {
    //   return (
    //     <View>
    //       <ActivityIndicator animating={true}/>
    //     </View>
    //   )
    // }
    
    return (
      <View style={styles.container}>
        <Notes notes={this.state.notes} />
        <Button
          title="Add notes"
          onPress={() => this.props.navigation.navigate("input")}
        />
      </View>
    );
  }
}
const Notes = ({ notes }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map((n) => (
          <Text key={n.id} style={styles.text}>
            {n.content}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
const Input = ({ arvo, kirjoitus, paino, tallennus }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Write the note here"
        defaultValue={arvo}
        onChangeText={kirjoitus}
      />
      <TouchableOpacity onPress={tallennus}>
        <Text>Save the list</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={paino}>
        <Text style={{ textAlign: "center", fontSize: 30 }}>ADD NOTE</Text>
      </TouchableOpacity>
    </View>
  );
};
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="notes"
          component={List}
          options={{ title: "Notes" }}
        /> */}
        <Stack.Screen
          name="input"
          component={NoteList}
          options={{ title: "Input" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
