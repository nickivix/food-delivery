import React from 'react'
import styled from 'styled-components/native'
import SettingCard from 'components/Profile/SettingCard'
import { useNavigation } from '@react-navigation/native'
import { List } from 'uikit/Icons'
import { ProfileScreenNavigationProp } from 'screens/types'

const ProfileInfoScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <Container>
      <SettingCardWrapper>
        <SettingCard
          title={'Работа у нас'}
          Icon={List}
          onPress={() => console.log('Success!')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title={'Новости'}
          Icon={List}
          onPress={() => console.log('Success!')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title={'О приложении'}
          Icon={List}
          onPress={() => console.log('Success!')}
        />
      </SettingCardWrapper>
      <SettingCardWrapper>
        <SettingCard
          title={'О нас'}
          Icon={List}
          onPress={() => navigation.navigate('AboutUs')}
        />
      </SettingCardWrapper>
    </Container>
  )
}

export default ProfileInfoScreen

const Container = styled.SafeAreaView``

const SettingCardWrapper = styled.View`
  margin-top: 20px;
  align-self: center;
  width: 90%;
`
