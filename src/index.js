import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import { Categories, Products } from './screens';
import { useFonts } from 'expo-font'
import { useState } from 'react';
import { COLORS } from './themes';
import RootNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './store'

// const categoryDefault ={
//   categoryId: null,
//   color: COLORS.primary
// }

export default function App() {
    const [loaded] = useFonts({
      'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
      'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
      'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
      'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    })
    // const [isCategorySelected, setIsCategorySelected] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

    // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

    // const onHandleSelectCategory = ({categoryId, color}) => {
    //     setSelectedCategory({categoryId, color});
    //     setIsCategorySelected(!isCategorySelected);
    // }
    // const onHandleNavigate = () => {
    //     setIsCategorySelected(false);
    //     setSelectedCategory(categoryDefault);
    // }

    if(!loaded){
      return(
      <View style={styles.loaderContainer}>
      <ActivityIndicator color={COLORS.primary} size={'large'}/>
      </View>
      )
    }

  return (
    <Provider store={store}>
    <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});