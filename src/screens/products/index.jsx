import { View, Text, TouchableOpacity, FlatList, Image, ImageBackground} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../themes';
import { Input } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json';

function Product({ onHandleGoBack, categorySelected }) {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filteredBySearch(text);
  };
  const onHandleFocus = () => {};

  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categorySelected.categoryId
  );

  const filteredBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];

    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredProducts(updatedProductList);
  };

  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={34} color={COLORS.black} />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={(e) => onHandleChangeText(e) }
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Search"
          borderColor={borderColor}
        />
        <Ionicons onPress={clearSearch} name="close-circle" size={34} color={COLORS.black} />
      </View>
      <FlatList
        style={styles.products}
        data={ search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => null} style={styles.productContainer}>
            <ImageBackground source={{uri: item.image}} style={[styles.productImage,{backgroundColor: categorySelected.color}]} />
            <View style={styles.productDetail}>
            <Text style={styles.productName} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
            <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productContent}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found</Text>
        </View>
      )}
    </View>
  );
}

export default Product;
