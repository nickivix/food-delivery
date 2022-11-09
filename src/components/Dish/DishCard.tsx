import React, { StrictMode } from 'react'
import { ImageSourcePropType } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { Heading3, Heading4, Description, Paragraph } from 'uikit/Typography'
import Counter from 'uikit/Counter'
import { Fullscreen } from 'uikit/Icons'

interface DishCardProps {
  image: ImageSourcePropType
  title: string
  description: string
  price: number
  num: number
}

const DishCard = ({ image, title, description, price, num }: DishCardProps) => {
  const rub = ' ₽'
  return (
    <Container>
      <DishImage source={image}>
        <FullScreenContainer>
          <Fullscreen width={24} height={24} />
        </FullScreenContainer>
        <PriceContainer>
          <Heading3 color="white" weight="bold">
            {price + rub}
          </Heading3>
        </PriceContainer>
      </DishImage>
      <DescriptionContainer>
        <Heading4 color="black" weight="bold">
          {title}
        </Heading4>
        <DishDescription color="gray">{description}</DishDescription>
        <AddInfoContainer>
          <NumContainer>
            <Paragraph color="black" weight="bold">
              Количество:
            </Paragraph>
            <CounterContainer>
              <Counter num={num} />
            </CounterContainer>
          </NumContainer>
          <SummaryContainer>
            <Paragraph color="black" weight="bold">
              Всего:
            </Paragraph>
            <PriceText color="gray">{price + rub}</PriceText>
          </SummaryContainer>
        </AddInfoContainer>
      </DescriptionContainer>
    </Container>
  )
}

export default DishCard

const Container = styled.View`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`

const DescriptionContainer = styled.View`
  margin: 15px 5px 0px 5px;
  flex: 1;
`

const DishImage = styled.ImageBackground`
  height: 220px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
`

const DishDescription = styled(Description)`
  margin-top: 5px;
`

const AddInfoContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 25px;
  flex-direction: row;
`
const NumContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const SummaryContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const PriceText = styled(Heading3)`
  margin-left: 10px;
  margin-bottom: 2px;
`

const CounterContainer = styled.View`
  margin-left: 20px;
`

const FullScreenContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
`

const PriceContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.blue};
  justify-content: center;
  align-items: center;
  width: 73px;
  height: 43px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
`
