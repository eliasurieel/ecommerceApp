import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        height:145,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
    },
    imageContainer: {
        maxWidth: 120,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    image:{
        width:100,
        height:100,
    },
    detailContainer:{
        justifyContent: 'space-between',
        maxWidth: 190,
        gap: 5,
    },
    name:{
        fontSize: 13,
        fontWeight: 'normal',
    },
    price:{
        fontSize: 13,
        fontWeight: 'bold',
    },
    qty:{
        fontSize: 12,
        fontWeight: 'normal',
    },
    stock:{
        fontSize: 12,
        fontWeight: 'normal',
    },
    actionContainer:{
        flexDirection: 'row',
        gap: 20,
    },
    increaseButton:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
    },
    increaseButtonText:{
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    decreaseButton:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
    },
    decreaseButtonText:{
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    deleteContainer:{
        flex:1,
    },
    deleteButton:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
    },
})