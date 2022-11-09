import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import SettingCard from 'components/Profile/SettingCard'
import {
  SettingProfile,
  SettingSettings,
  SettingList,
  SettingFav,
  SettingInfo,
} from 'uikit/Icons'
import { ProfileScreenNavigationProp } from 'screens/types'

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()

  return (
    <Container>
      <SettingCardWrapper>
        <SettingCard
          title="Личные данные"
          Icon={SettingProfile}
          onPress={() => navigation.navigate('SettingProfile')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title="Настройки"
          Icon={SettingSettings}
          onPress={() => navigation.navigate('SettingSettings')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title="Список заказов"
          Icon={SettingList}
          onPress={() => console.log('Success')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title="Избранное"
          Icon={SettingFav}
          onPress={() => console.log('Success')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title="Справка"
          Icon={SettingInfo}
          onPress={() => navigation.navigate('SettingInfo')}
        />
      </SettingCardWrapper>
    </Container>
  )
}

export default ProfileScreen

const Container = styled.SafeAreaView``

const SettingCardWrapper = styled.View`
  margin-top: 20px;
  align-self: center;
  width: 90%;
`
