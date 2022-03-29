import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { Text, View, TextInput, Button, ScrollView } from "react-native";
import styles from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";

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
    const notes = this.state.notes.concat(noteObject);

    this.setState({
      notes: notes,
      newNote: "",
    });
  };
  render() {
    return (
      <View>
        <ScrollView>
          {this.state.notes.map((note) => (
            <Text key={note.id}>Note {note.id}</Text>
          ))}
        </ScrollView>
        <TextInput
            placeholder="Write the note here"
            defaultValue={this.state.newNote}
            onChangeText={this.handleNoteChange}
          />
        <Button title="ADD NOTE" onPress={this.addNote} />
      </View>
    );
  }
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NoteList />
    </SafeAreaView>
  );
};

export default App;
