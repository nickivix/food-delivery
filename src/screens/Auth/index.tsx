import React from 'react'
import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import TextInput from 'uikit/TextInput'
import Button from 'uikit/Button'
import { Heading1 } from 'uikit/Typography'

const Auth = () => {
  const { bottom: bottomInset } = useSafeAreaInsets()
  return (
    <Container {...bottomInset}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <LogoContainer>
          <Logo color="blue">ЛОГО</Logo>
        </LogoContainer>
        <InputsContainer>
          <FirstInputWrapper>
            <TextInput
              placeholder="Ваш номер телефона"
              keyboardType="phone-pad"
              returnKeyType="done"
            />
          </FirstInputWrapper>
          <SecondInputWrapper>
            <TextInput
              placeholder="Введите код из смс"
              keyboardType="phone-pad"
              returnKeyType="done"
            />
          </SecondInputWrapper>
        </InputsContainer>
        <ButtonContainer>
          <Button title={'Отправить'} onPress={() => console.log('Success!')} />
        </ButtonContainer>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default Auth

const Container = styled.SafeAreaView.attrs({ bottomInset: 20 })`
  flex: 1;
`

const Logo = styled(Heading1)``

const InputsContainer = styled.View`
  flex: 1;
  padding: 0 15px;
`

const SecondInputWrapper = styled.View`
  margin-top: 17px;
  width: 50%;
`

const FirstInputWrapper = styled.View`
  width: 100%;
`

const ButtonContainer = styled.View`
  margin: 30px 15px;
`

const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
