import { View, Text } from 'react-native'
import { styles } from './styles'
import { ImageSelector } from '../../components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetProfileQuery, useUpdateImageProfileMutation } from '../../store/settings/api'



const Profile = () => {
    const localId = useSelector((state) => state.auth.user.localId)
    const [uploadImageProfile, { data }] = useUpdateImageProfileMutation()
    const {data: userData,} = useGetProfileQuery(localId)
    const onHandlerImage = async({ uri, base64 }) => {
        await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}`})
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageSelector profileImage={userData?. profileImage} onSelect={onHandlerImage} />
            </View>
        </View>
    )
}

export default Profile