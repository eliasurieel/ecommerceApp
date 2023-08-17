import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    content: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.text,
        paddingBottom: 15,
    },
    label: {
        fontWeight: '300',
        fontSize: 14,
        color: COLORS.text,
    },
    input: {
        height: 45,
        borderBottomWidth: 1,
        width: '90%',
        fontWeight: '500',
        marginBottom: 5,
    },
    linkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    linkText: {
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.secondary,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    button: {
        backgroundColor: COLORS.secondary,
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.white,
    },
})