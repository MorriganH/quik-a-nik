import { Platform, StyleSheet } from "react-native";

const device = Platform.OS
let styles;

if (device === 'web') {

  styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 300,
      height: 1000
    },
    
    logo: {
      width: 200,
      height: 200,
  },

  bigText: {
    fontSize: 40,
  },
  
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: "#2196f3",
    height:100,
    width: '80%',
    padding: 5,
    margin: 5,
  },
  
});
}

if (device !== 'web') {

  styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 200,
    },
    
    logo: {
      width: 200,
      height: 200,
  },

  bigText: {
    fontSize: 25,
  },
  
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: "#2196f3",
    height:100,
    width: '80%',
    padding: 5,
    margin: 5,
  },
  
});
}


export default styles;