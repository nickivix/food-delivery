import React from 'react'
import styled from 'styled-components/native'
import SettingTextInput from 'uikit/SettingTextInput'

const ProfileUserScreen = () => {
  return (
    <Container>
      <Avatar source={require('assets/images/profile_avatar.jpg')} />
      <TextInputContainer>
        <SettingTextInputContainer>
          <SettingTextInput
            value="Александр"
            description="Имя"
            security={false}
            onChange={() => {
              console.log('')
            }}
          />
        </SettingTextInputContainer>
        <SettingTextInputContainer>
          <SettingTextInput
            value="+7 958 581 54 20"
            description="Мобильный"
            keyboardType="phone-pad"
            security={false}
            onChange={() => {
              console.log('')
            }}
          />
        </SettingTextInputContainer>
        <SettingTextInputContainer>
          <SettingTextInput
            value="alex@mail.ru"
            description="E-mail"
            keyboardType="email-address"
            security={false}
            onChange={() => {
              console.log('')
            }}
          />
        </SettingTextInputContainer>
        <SettingTextInputContainer>
          <SettingTextInput
            value="qwerty12345"
            description="Пароль"
            security={true}
            onChange={() => {
              console.log('')
            }}
          />
        </SettingTextInputContainer>
      </TextInputContainer>
    </Container>
  )
}

export default ProfileUserScreen

const Container = styled.SafeAreaView``

const Avatar = styled.Image`
  margin: 20px auto 0;
  width: 104px;
  height: 104px;
  border-radius: 52px;
`

const TextInputContainer = styled.View`
  margin-top: 20px;
  padding: 10px 0 40px 0;
  background-color: ${({ theme }) => theme.colors.white};
`

const SettingTextInputContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  width: 90%;
`
