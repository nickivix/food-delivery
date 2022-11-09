import React from 'react'
import styled from 'styled-components/native'
import Carousel from 'react-native-snap-carousel'
import carouselData from 'mocks/carouselData'

const ImagesCarousel = () => {
  const renderItem = ({ item }) => (
    <Wrapper>
      <CarouselImage source={item.image} />
    </Wrapper>
  )

  return (
    <CarouselContainer>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={345}
        itemWidth={345}
      />
    </CarouselContainer>
  )
}

export default ImagesCarousel

const CarouselContainer = styled.View``

const CarouselImage = styled.Image`
  height: 260px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

const Wrapper = styled.View`
  height: 260px;
`
