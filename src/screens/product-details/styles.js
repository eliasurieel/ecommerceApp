import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";
import {FONTS} from '../../themes'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerImage:{
    },
    image:{
        width: '100%',
        height: 300,
    },
    content:{
        flex: 1,
        padding: 20,
        gap: 8,
    },
    
    name:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 14,
    },
})