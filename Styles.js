import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#b3d9ff',
      alignItems: 'center',
      //justifyContent: 'space-around',
      padding: 50,
      height: '100%'
    },
    text: {
      fontSize: 19,
      padding:15
    },
    input: {
      backgroundColor: '#f2f2f2',
      height: 40,
      borderRadius: 5,
      width: '79%',
      margin: 14
    },
    button: {
      backgroundColor: '#00aeef',
      borderRadius: 5,
      height:45       
   }
  });

export default styles