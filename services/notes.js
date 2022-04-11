import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      console.log(e)
    }
  }
const setData = async (note) => {
    try {
        const jsonValue = JSON.stringify(note)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    }   catch(e) {
        console.log(e)
    }
}