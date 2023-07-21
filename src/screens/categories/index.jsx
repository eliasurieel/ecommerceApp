import { FlatList, View } from 'react-native';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json'
import { styles } from './styles';

function Categories({onSelectCategory}) {
  return (
    <View style={styles.container}>
        <FlatList
        data={CATEGORIES}
        style={styles.categoryContainer}
        contentContainerStyle={styles.listCategory}
        renderItem={({item})=> <CategoryItem {... item} onSelectCategory={() => onSelectCategory( {categoryId: item.id, color: item.backgroundColor} )} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        />
    </View>
  );
}



export default Categories