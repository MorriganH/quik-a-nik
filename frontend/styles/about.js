import { StyleSheet, Platform } from "react-native";


const device = Platform.OS;
let styles;

if (device === "web") {

styles = StyleSheet.create({
  aboutWrapper: {
    display: "flex",
    flexDirection: "row",
    width: 950,
    height: 850,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "rgba(34, 61, 26, 0.5)",
    shadowOffset: { width:3, height: 3 },
    shadowRadius: 3,
    overflow: "hidden"
  },
  paragraphWrapper: {
    display: "flex",
    
  },
  bearBox: {
    display: "flex",
    alignSelf: 'flex-end'
    
  },
  paragraph: {
    padding: 7,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    maxWidth: 600
    
  },
  paragraphL: {
    padding: 10,
    // maxWidth: 600
    
  },
  qnBear: {
    height: 500,
    width: 240,
  },
  base: {
    position:"absolute",
    bottom: 0,
    height: 26,
    width: 950,
    backgroundColor: "#92a864",
  }

});
}

if (device !== "web") {
  styles = StyleSheet.create({
    aboutWrapper: {
      display: "flex",
      // flexDirection: "row",
      // width: 950,
      alignSelf: "center",
      backgroundColor: "white",
      borderRadius: 20,
      shadowColor: "rgba(34, 61, 26, 0.5)",
      shadowOffset: { width:3, height: 3 },
      shadowRadius: 3,
      overflow: "hidden"
    },
    paragraphWrapper: {
      display: "flex",
      
    },
    bearBox: {
      display: "flex",
      alignSelf: 'center'
      
    },
    paragraph: {
      padding: 7,
      paddingTop: 20,
      paddingRight: 20,
      paddingLeft: 20,
      maxWidth: 600
      
    },
    paragraphL: {
      padding: 10,
      // maxWidth: 600
      
    },
    qnBear: {
      height: 500,
      width: 240,
    },
    base: {
      position:"absolute",
      bottom: 0,
      height: 26,
      width: 950,
      backgroundColor: "#92a864",
    }
  
  });
  
}

export default styles;
