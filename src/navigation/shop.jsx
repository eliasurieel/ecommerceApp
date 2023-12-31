import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../screens";
import { COLORS } from "../themes";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import SettingsNavigator from "./settings";
const Stack = createNativeStackNavigator()

function ShopNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTitleStyle: {
                    fontFamily: 'Inter-Bold',
                    fontSize: 19,
                },
                animation: 'fade_from_bottom',
                headerRight: () => (
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('SettingsStack')}>
                        <Ionicons name="settings-outline" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                ),
            })}>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Products" component={Products}
                options={({ route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },
                    title: route.params.name,
                })}

            />
            <Stack.Screen name="ProductDetail" component={ProductDetail}
                options={({ route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },
                    title: route.params.name,
                })} />
            <Stack.Screen
                name="SettingsStack"
                component={SettingsNavigator}
                options={({ navigation, route }) => ({
                    title: 'Settings',
                    headerShown: false,
                })} />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: Platform.OS === 'android' ? 15 : 0,
    },
})



export default ShopNavigator;