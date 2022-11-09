import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import AddressCard from 'components/Profile/AddressCard'
import { ProfileScreenNavigationProp } from 'screens/types'
import Button from 'uikit/Button'

const ProfileAddressesScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <Container>
      <AddressCardsContainer>
        <AddressCardWrapper>
          <AddressCard
            title={'Москва, \n пер. Филипповский, 4с1, кв.24'}
            focused={true}
          />
        </AddressCardWrapper>
        <AddressCardWrapper>
          <AddressCard
            title={'Москва, \n ул. Большая Якимонка 6, офис 5'}
            focused={false}
          />
        </AddressCardWrapper>
      </AddressCardsContainer>
      <AddAddressWrapper>
        <ButtonWrapper>
          <Button
            title={'Добавить адрес'}
            onPress={() => navigation.navigate('AddAddress')}
          />
        </ButtonWrapper>
      </AddAddressWrapper>
    </Container>
  )
}

export default ProfileAddressesScreen

const Container = styled.SafeAreaView`
  flex: 1;
`

const AddressCardsContainer = styled.ScrollView`
  flex: 0.8;
`

const AddAddressWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.2;
  background: ${({ theme }) => theme.colors.white};
`

const AddressCardWrapper = styled.View`
  margin-top: 20px;
  align-self: center;
  width: 90%;
`

const ButtonWrapper = styled.View`
  width: 90%;
`
