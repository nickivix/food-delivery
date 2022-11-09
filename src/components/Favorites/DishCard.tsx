import React from 'react'
import { View, ImageSourcePropType } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { Heading2, Heading3 } from 'uikit/Typography'
import { HeartFill, HeartStroke } from 'uikit/Icons'

interface DishCardProps {
  image: ImageSourcePropType
  isLiked: boolean
  description: string
  price: number
}

const DishCard = ({ image, isLiked, description, price }: DishCardProps) => {
  const theme = useTheme()
  const rub = ' ₽'
  return (
    <Container>
      <ImageContainer>
        <DishImage source={image} />
      </ImageContainer>
      <DescriptionContainer>
        <DescriptionText color="black" weight="bold">
          {description}
        </DescriptionText>
        <AddInfoContainer>
          <PriceText color="gray">{price + rub}</PriceText>
          <IsLiked>
            {isLiked ? (
              <HeartFill width={20} height={20} fill={theme.colors.red} />
            ) : (
              <HeartStroke width={35} height={35} fill={theme.colors.gray} />
            )}
          </IsLiked>
        </AddInfoContainer>
      </DescriptionContainer>
    </Container>
  )
}

export default DishCard

const Container = styled.View`
  margin-top: 30px;
  padding-bottom: 27px;
  border-bottom-color: rgba(85, 85, 85, 0.1);
  border-bottom-width: 0.5px;
  flex-direction: row;
`

const ImageContainer = styled.View`
  justify-content: center;
`

const DescriptionContainer = styled.View`
  flex: 1;
`

const DishImage = styled.Image`
  width: 133px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

const DescriptionText = styled(Heading2)`
  margin-left: 15px;
`

const AddInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const PriceText = styled(Heading3)`
  margin-left: 15px;
`

const IsLiked = styled.TouchableOpacity`
  margin-right: 10px;
`
