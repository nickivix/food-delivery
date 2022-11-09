import React from 'react'
import styled from 'styled-components/native'
import PlaceCard from 'components/Home/PlaceCard'
import ImagesCarousel from 'components/Home/ImagesCarousel'
import CardImage1 from 'assets/images/card_image1.jpg'
import DishCard from 'components/Dish/DishCard'
import DishImage from 'assets/images/dish_Image.jpg'

const HomeMainScreen = () => {
  return (
    <Container>
      <CardsContainer>
        <ImagesCarousel />
      </CardsContainer>
    </Container>
  )
}

export default HomeMainScreen

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

const CardsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 30,
    marginHorizontal: 15,
  },
})``
