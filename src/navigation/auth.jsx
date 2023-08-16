import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "../screens";
import { COLORS } from "../themes";

const Stack = createStackNavigator()

const AuthNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Auth" 
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Auth" component={Auth}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator