import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
     shadowColor: "#000",
     shadowOffset: {
    	width: 0,
    	height: 3,
     },
     shadowOpacity: 0.27,
     shadowRadius: 4.65,

     elevation: 6,
     borderRadius: 10,
    },
    imageBackground: {
        width: '100%',
        height: 150,
        justifyContent:'flex-end'
    },
    imageBackgroundTablet: {
        width: '100%',
        height: 260,
        justifyContent:'flex-end',
    },
    categoryName: {
        fontSize: 20,
        fontFamily:'Inter-Bold',
        color: COLORS.white,
        padding: 20,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
    categoryNameTablet:{
        fontSize: 40,
        fontFamily:'Inter-Bold',
        color: COLORS.white,
        padding: 20,
        textShadowColor: 'rgba(0,0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
    },
    
});