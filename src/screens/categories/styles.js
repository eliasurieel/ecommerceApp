import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: COLORS.background,
    },
    categoryContainer: {
      marginTop: 20,
      marginHorizontal: 10,
    },
    listCategory:{
      gap:14,
    },
    categoryItemLandscape: {
      height: 100, 
    },
  });