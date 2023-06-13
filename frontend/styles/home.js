import { Platform, StyleSheet } from "react-native";

const device = Platform.OS
let styles;

if (device === 'web') {

  styles = StyleSheet.create({
    container: {
      
      backgroundColor: "#fff",
      // paddingTop: 300,
    },
    
    scrollView: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    
    logo: {
      width: 80,
      height: 80,
    },
    
    bigText: {
      fontSize: 40,
    },
    
    button: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#55bb55",
    borderRadius: 10,
    height: 'auto',
    width: '80%',
    padding: 5,
    margin: 5,
  },
  
  main: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    height: 300,
  },

  sideMain: {
    // width: 
  },
});
}

if (device !== 'web') {

  styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      // paddingTop: 200,
    },
    
    scrollView: {
    },
    
    logo: {
      width: 80,
      height: 80,
  },

  bigText: {
    fontSize: 25,
  },
  
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#55bb55",
    borderRadius: 10,
    height:150,
    width: '97%',
    padding: 5,
    margin: 5,
  },
  
});
}


export default styles;