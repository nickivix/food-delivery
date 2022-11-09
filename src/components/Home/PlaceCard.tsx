import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import {
  HeartStroke,
  HeartFill,
  Stars0,
  Stars1,
  Stars2,
  Stars3,
  Stars4,
  Stars5,
  Clock,
} from 'uikit/Icons'
import { Paragraph, Details, Heading1, Description } from 'uikit/Typography'

interface PlaceCardProps {
  isLiked: boolean
  image: ImageSourcePropType
  rating: number
  numOfReviews: number
  deliveryTime: string
  name: string
  cuisineCategories: Array<string>
}

const getStars = (rating: number) => {
  if (rating > 4) return <Stars5 />
  if (rating > 3) return <Stars4 />
  if (rating > 2) return <Stars3 />
  if (rating > 1) return <Stars2 />
  if (rating > 0) return <Stars1 />
  return <Stars0 />
}

const PlaceCard = ({
  isLiked,
  image,
  rating,
  numOfReviews,
  deliveryTime,
  name,
  cuisineCategories,
}: PlaceCardProps) => {
  const theme = useTheme()

  return (
    <Container>
      <CardContainer>
        <CardImage source={image}>
          <CoverBackground />
          <BottomContainer>
            <RatingContainer>
              <RatingText color="white" weight="bold">
                {rating.toFixed(1)}
              </RatingText>
              <StarsWrapper>{getStars(rating)}</StarsWrapper>
              <ReviewsNumber color="white">({numOfReviews})</ReviewsNumber>
            </RatingContainer>

            <DeliveryContainer>
              <Clock width={14} height={14} />
              <TimeText color="white">{deliveryTime}</TimeText>
            </DeliveryContainer>
          </BottomContainer>
        </CardImage>

        <IsLiked>
          {isLiked ? (
            <HeartFill width={20} height={20} fill={theme.colors.red} />
          ) : (
            <HeartStroke width={20} height={20} fill={theme.colors.gray} />
          )}
        </IsLiked>
      </CardContainer>

      <CardTitle color="black" weight="bold">
        {name}
      </CardTitle>
      <CuisineCategoriesContainer>
        {cuisineCategories.map((category, index) => (
          <>
            <CuisineCategory key={index} color="gray">
              {category}
            </CuisineCategory>
            {index !== cuisineCategories.length - 1 && (
              <CuisineCategoryDivider />
            )}
          </>
        ))}
      </CuisineCategoriesContainer>
    </Container>
  )
}

export default PlaceCard

const Container = styled.View`
  margin-top: 30px;
  padding-bottom: 27px;
  border-bottom-color: rgba(85, 85, 85, 0.1);
  border-bottom-width: 0.5px;
`

const CardContainer = styled.View``

const CardImage = styled.ImageBackground`
  height: 220px;
  justify-content: flex-end;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
`

const CoverBackground = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`

const IsLiked = styled.TouchableOpacity`
  position: absolute;
  right: 9px;
  top: 9px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
`

const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 13px 16px;
`

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const RatingText = styled(Paragraph)``

const StarsWrapper = styled.View`
  margin: 0 5px;
`

const ReviewsNumber = styled(Details)``

const DeliveryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`

const TimeText = styled(Details)`
  margin-left: 5px;
`

const CardTitle = styled(Heading1).attrs({
  numberOfLines: 1,
})`
  margin-top: 18px;
  text-transform: uppercase;
`

const CuisineCategoriesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 7px;
`

const CuisineCategory = styled(Description)`
  margin: 2px 0;
`

const CuisineCategoryDivider = styled.View`
  width: 3px;
  height: 3px;
  margin: 0 9px;
  border-radius: 1.5px;
  background-color: ${({ theme }) => theme.colors.gray};
`
