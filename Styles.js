import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex:1, 
      flexDirection: 'column',
      backgroundColor: '#b3d9ff',
      alignItems: 'center',
      //justifyContent: 'space-around',
      padding: 50,
      
      width: '100%'
    },
    text: {
      fontSize: 19,
      padding:15,
      
    },
    input: {
      backgroundColor: '#f2f2f2',
      height: 40,
      borderRadius: 5,
      width: 250,
      margin: 14
    },
    button: {
      backgroundColor: '#00aeef',
      borderRadius: 5,
      height:45,
         
   },
   inputContainer: {
     width: '100%',
     alignItems:'center'
   }
  });

export default styles