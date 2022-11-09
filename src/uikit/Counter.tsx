import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { Heading3 } from 'uikit/Typography'

interface CounterProps {
  num: number
}

const Counter = ({ num }: CounterProps) => {
  const [number, useNumber] = useState(num)
  return (
    <Container>
      <MinusButton onPress={() => useNumber(number - 1)}>
        <Heading3 color="blue" weight="bold">
          -
        </Heading3>
      </MinusButton>
      <NumText color="black" weight="bold">
        {number}
      </NumText>
      <PlusButton onPress={() => useNumber(number + 1)}>
        <Heading3 color="white" weight="bold">
          +
        </Heading3>
      </PlusButton>
    </Container>
  )
}

export default Counter

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

const MinusButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  width: 36px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.little};
`

const PlusButton = styled.TouchableOpacity`
  width: 36px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.blue};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.little};
`

const NumText = styled(Heading3)`
  margin: 0 20px;
`
