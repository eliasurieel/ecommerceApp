import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../screens";
import { COLORS } from "../themes";
const Stack = createNativeStackNavigator()

function ShopNavigator(){
    return(
        <Stack.Navigator 
            initialRouteName="Categories" 
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
            <Stack.Screen name= "Categories" component={Categories} />
            <Stack.Screen name= "Products" component={Products}
            options={({ route }) =>({
                headerStyle:{
                    backgroundColor: route.params.color,
                },
                title: route.params.name,
            }) }
            
            />
            <Stack.Screen name="ProductDetail" component={ProductDetail} 
            options={({ route }) =>({
                headerStyle:{
                    backgroundColor: route.params.color,
                },
                title: route.params.name,
            }) }/>
        </Stack.Navigator>

    )
}



export default ShopNavigator;