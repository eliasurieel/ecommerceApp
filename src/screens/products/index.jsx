import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { COLORS } from "../../themes";
import { Input } from "../../components";
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json'

function Product({ onHandleGoBack, categoryId }) {
    const [search, setSearch] = useState('')
    const [borderColor, setBorderColor] = useState(COLORS.primary)
    const onHandleBlur = () => {}
    const onHandleChangeText = (text) => {
        setSearch(text);
    }
    const onHandleFocus = () => {};

    const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
                <Ionicons name= 'arrow-back-circle' size={34} color={COLORS.black} />
                    <Text style={styles.goBackText}>Go back</Text>
            </TouchableOpacity>
            <View style={styles.header}>
            <Input
            onHandleBlur={onHandleBlur}
            onHandleChangeText={onHandleChangeText}
            onHandleFocus={onHandleFocus}
            value ={search}
            placeholder= "Search"
            borderColor= {borderColor}
        />
          <Ionicons name="search-circle" size={34} color={COLORS.text} />
          <Ionicons name="close-circle" size={34} color={COLORS.black} />
          </View>
          <FlatList
          data={filteredProducts}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id.toString()}
         />
        </View>
    )
};

export default Product