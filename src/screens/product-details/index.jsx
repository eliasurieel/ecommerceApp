import { View, Text, Image, ActivityIndicator } from "react-native";
import { addToCart } from "../../store/cart/cart.slice";
import { styles } from './styles'
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useGetProductByIdQuery } from "../../store/products/api";
import { COLORS } from "../../themes";

function ProductDetail({ navigation, route }){
    const dispatch = useDispatch()
    const { color, productId } = route.params
    // const products = useSelector((state) => state.products.data)
    const { data, isLoading, error } = useGetProductByIdQuery(productId)

    const product = data?.find((product) => product.id === productId)

    const onAddToCart = () => {
        dispatch(addToCart(product)) 
    };

    if(isLoading) 
      return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  ) 

    return(
        <View style={styles.container}>
            <View style={[styles.containerImage, {backgroundColor: color}]}>
            <Image source={{uri: product.image}} style={styles.image} resizeMode="contain"/>
            </View>
            <View style={styles.content}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>USD {product.price}</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default ProductDetail