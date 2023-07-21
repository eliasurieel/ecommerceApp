import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
    },
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    goBackText: {
        fontSize: 15,
        color: COLORS.text,
    },
    products: {
        flex: 1,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {

    },
    productContainer:{
        backgroundColor: COLORS.background,
        borderRadius: 10,
        width: '45%',
        marginHorizontal: 10,

    },
    productContent:{
        gap:15,
        paddingVertical: 25,
    },
    productImage:{
        width:'100%',
        height: 150,
    },
    productDetail:{
        padding:10,
        gap:5,
    },
    productName:{
        fontSize:14,

    },
    productPrice:{
        fontSize:15,
        fontWeight:"bold",
    },
})