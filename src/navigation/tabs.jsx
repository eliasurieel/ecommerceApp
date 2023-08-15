import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";
import CartNavigator from "./cart";
import { COLORS } from "../themes";
import { useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {
    const numberCartItem = useSelector((state) => state.cart.items)
    return(
        <BottomTab.Navigator 
        initialRouteName="ShopTab" 
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle:{
                fontSize: 10,
            },
            tabBarStyle:{
                backgroundColor: COLORS.white,
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIconStyle:{
                fontSize: 20,
            }

        }}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'home' : 'home-outline'} size={size} color={color} />
                ),
            }} />
            <BottomTab.Screen name="CartTab" component={CartNavigator} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'cart' : 'cart-outline'} size={size} color={color} />
                ),
                tabBarBadge: numberCartItem.length,
                tabBarBadgeStyle:{
                    backgroundColor: COLORS.secondary, 
                    color: COLORS.white,
                    fontSize: 11,
                },
            }} />
            <BottomTab.Screen name="OrdersTab" component={OrdersNavigator} options={{
                tabBarLabel: 'Orders',
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name={ focused ? 'file-tray' : 'file-tray-outline'} size={size} color={color} />
                ),
            }} />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator