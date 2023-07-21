import { FlatList, View, } from 'react-native';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json'
import { styles } from './styles';
import useOrientation from '../../hooks/useOrientation';
import { ORIENTATION } from '../../constants/orientation';

function Categories({onSelectCategory}) {
  const orientation = useOrientation()
  return (
    <View style={styles.container}>
        <FlatList
        data={CATEGORIES}
        style={styles.categoryContainer}
        contentContainerStyle={styles.listCategory}
        renderItem={({item})=>( 
        <CategoryItem 
          {... item} 
          onSelectCategory={() => 
            onSelectCategory( {categoryId: item.id, color: item.backgroundColor} )
          } 
        style={
          orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape: {}
        }
        />
  )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        />
    </View>
  );
}



export default Categories