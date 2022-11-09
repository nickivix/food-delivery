import React from 'react'
import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AddressInput from 'uikit/AddressInput'
import TextArea from 'uikit/TextArea'
import Button from 'uikit/Button'
import Select from 'uikit/Select'
import { Heading4 } from 'uikit/Typography'

const ProfileAddAddressScreen = () => {
  return (
    <Container>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <ContentContainer>
          <AddressContainer>
            <DescriptionText color="blue" weight="bold">
              Адрес
            </DescriptionText>
            <AddressInputContainer>
              <AddressInput description="Город" />
            </AddressInputContainer>
            <AddressInputContainer>
              <AddressInput description="Улица" />
            </AddressInputContainer>
            <AddressInputContainer>
              <AddressInput description="Номер дома" />
            </AddressInputContainer>
            <AddressInputContainer>
              <AddressInput description="Номер квартиры/офис" />
            </AddressInputContainer>
          </AddressContainer>
          <DeliveryTypeContainer>
            <DescriptionText color="blue" weight="bold">
              Тип доставки
            </DescriptionText>
            <Select
              onChange={(newValue) => console.log(newValue)}
              options={[
                { label: 'К входу в здание', value: 'building' },
                { label: 'В квартиру', value: 'flat' },
                { label: 'Оставить на охране', value: 'leave' },
              ]}
            />
          </DeliveryTypeContainer>
          <CommentContainer>
            <DescriptionText color="blue" weight="bold">
              Комментарий к адресу доставки
            </DescriptionText>
            <TextAreaContainer>
              <TextArea multiline={true} numberOfLines={4} />
            </TextAreaContainer>
          </CommentContainer>
        </ContentContainer>
        <ButtonContainer>
          <ButtonWrapper>
            <Button
              title="Добавить адрес"
              onPress={() => console.log('success!')}
            />
          </ButtonWrapper>
        </ButtonContainer>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default ProfileAddAddressScreen

const Container = styled.SafeAreaView`
  flex: 1;
`

const ContentContainer = styled.ScrollView`
  flex: 1;
`

const AddressContainer = styled.View`
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.white};
`

const DescriptionText = styled(Heading4)`
  margin: 15px 0 0 20px;
`

const DeliveryTypeContainer = styled.View`
  margin-top: 15px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.white};
`

const CommentContainer = styled.View`
  margin-top: 15px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.white};
`

const ButtonContainer = styled.View`
  margin-top: 15px;
  padding: 10px 0 10px 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`

const ButtonWrapper = styled.View`
  width: 90%;
`

const AddressInputContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  width: 90%;
`

const TextAreaContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  width: 90%;
`
