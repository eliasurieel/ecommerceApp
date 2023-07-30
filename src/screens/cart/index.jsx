import { View, Text } from 'react-native'
import CART from '../../constants/data/cart.json'
import { styles } from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { CartItem } from '../../components'

const Cart = () =>{
    return(
        <View style={styles.container}>
            <FlatList 
                data={CART}
                renderItem={({ item }) => <CartItem {...item} />}
                keyExtractor={(item) => item.id.toString()} 
                style={styles.listContainer}
            />
        </View>
    )
}

export default Cart