import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import SettingCard from 'components/Profile/SettingCard'
import { Pointer } from 'uikit/Icons'
import { ProfileScreenNavigationProp } from 'screens/types'

const ProfileSettingsScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <Container>
      <SettingCardContainer>
        <SettingCard
          title={'Адреса доставки'}
          Icon={Pointer}
          onPress={() => navigation.navigate('SettingAddresses')}
        />
      </SettingCardContainer>
    </Container>
  )
}

export default ProfileSettingsScreen

const Container = styled.SafeAreaView``

const SettingCardContainer = styled.View`
  margin-top: 20px;
  align-self: center;
  width: 90%;
`
