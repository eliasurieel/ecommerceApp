import { TouchableHighlight, ImageBackground, Text, TouchableOpacity, useWindowDimensions } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CategoryItem = ({
    id,
    name,
    backgroundColor,
    backgroundImage, 
    onSelectCategory,
    style,
}) =>{
    const { width } = useWindowDimensions()
    const isTablet = width > 650

    return(
        <TouchableOpacity onPress={() => onSelectCategory(id)} 
        style={[styles.container, { backgroundColor }, style]}
        underlayColor={COLORS.primary}>
            <ImageBackground 
            source={{uri: backgroundImage }} 
            style={isTablet ? styles.imageBackgroundTablet : [styles.imageBackground, style]}
            resizeMode={isTablet ? 'contain' : "cover"}>
                <Text style={isTablet ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
            </ImageBackground>
        
        </TouchableOpacity>
    );
};

export default CategoryItem;