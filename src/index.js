import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CategoryItem, Header } from './components';
import CATEGORIES from './constants/data/categories.json'


export default function App() {
    const onSelectCategory = (categoryId) =>{
        console.warn({ categoryId })
    }
  return (
    <View style={styles.container}>
        <Header title= "Categories" />
        <FlatList
        data={CATEGORIES}
        style={styles.categoryContainer}
        contentContainerStyle={styles.listCategory}
        renderItem={({item})=> <CategoryItem {... item} onSelectCategory={onSelectCategory} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  listCategory:{
    gap:14,
  },
});