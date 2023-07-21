import { StyleSheet, } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container:{
        marginTop:40,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    tabletContainer:{
        marginTop:40,
        backgroundColor: COLORS.primary,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    title:{
        fontSize: 20,
        color: COLORS.text,
        fontFamily:'Inter-Bold',
    },
    tabletTitle: {
        fontSize: 35,
        color: COLORS.text,
        fontFamily:'Inter-Bold',
    },
});
