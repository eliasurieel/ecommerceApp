import { ActivityIndicator, FlatList, View, } from 'react-native';
import { CategoryItem } from '../../components';
import { styles } from './styles';
import useOrientation from '../../hooks/useOrientation';
import { ORIENTATION } from '../../constants/orientation';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

function Categories({ navigation }) {
  const { data, error, isLoading } = useGetCategoriesQuery()
  const categories = useSelector((state) => state.categories.data)
  const orientation = useOrientation()
  const onSelectCategory = ({ categoryId, color, name }) =>{
    navigation.navigate('Products', {categoryId, color, name })
  }

  if(isLoading) 
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  ) 
  return (
    <View style={styles.container}>
        <FlatList
        data={categories}
        style={styles.categoryContainer}
        contentContainerStyle={styles.listCategory}
        renderItem={({item})=>( 
        <CategoryItem 
          {... item} 
          onSelectCategory={() => 
            onSelectCategory( {categoryId: item.id, color: item.backgroundColor, name: item.name } )
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