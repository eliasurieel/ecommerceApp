import { createStackNavigator } from "@react-navigation/stack";
import { Cart } from "../screens";
import { COLORS } from "../themes";

const Stack = createStackNavigator()

const CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Cart" 
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTitleStyle: {
                fontFamily: 'Inter-Bold',
                fontSize: 19,
            },
            animation:'fade_from_bottom'
        }}>
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartNavigator 