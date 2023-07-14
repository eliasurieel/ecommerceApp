import { TouchableHighlight, ImageBackground, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CategoryItem = ({
    id,
    name,
    backgroundColor,
    backgroundImage, onSelectCategory
}) =>{
    return(
        <TouchableOpacity onPress={() => onSelectCategory(id)} 
        style={[styles.container, { backgroundColor }]}
        underlayColor={COLORS.primary}>
            <ImageBackground 
            source={{uri: backgroundImage }} 
            style={styles.imageBackground}
            resizeMode="cover">
                <Text style={styles.categoryName}>{name}</Text>
            </ImageBackground>
        
        </TouchableOpacity>
    );
};

export default CategoryItem;