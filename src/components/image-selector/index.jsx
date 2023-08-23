import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View, Text, Image } from "react-native";
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, launchCameraAsync, requestCameraPermissionsAsync } from 'expo-image-picker'
import { styles } from './styles';
import { COLORS } from '../../themes';
import { useState } from 'react';

const ImageSelector = ({ profileImage, onSelect }) =>{
    const [image, setImage] = useState(null)
    const verifyPermissions = async () => {
        // const { status } = await requestMediaLibraryPermissionsAsync()
        const { status } = await requestCameraPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert(
                "Permission Denied",
                "You need to grant camera permissions to use this app.",[
                    {text: "Okay"},
                ]);
            return false
        }
        return true
    }

    const onHnadleTakePhoto = async () => {
        // const isMediaPermission = await verifyPermissions()
        const isCameraPermission = await verifyPermissions()
        if (!isCameraPermission) return
        // const result = await launchImageLibraryAsync({
        //     mediaTypes: 'Images',
        //     allowsEditing: true,
        //     aspect: [16, 9],
        //     quality: 0.5,
        // })
        const result = await launchCameraAsync({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
            base64: true,
        })
        
        setImage(result.assets[0].uri)
        onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 })
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={onHnadleTakePhoto}>
                {image || profileImage ?(
                    <Image source={{ uri: image }} style={styles.image}  />
                ) : (
                    <Ionicons name='ios-camera' size={24} color={COLORS.primary} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector