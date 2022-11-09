import React from 'react'
import styled from 'styled-components/native'
import { Heading2 } from 'uikit/Typography'

interface ButtonProps {
  title: string
  onPress(): void
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText color="white">{title}</ButtonText>
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.TouchableOpacity`
  height: 45px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.colors.blue};
  justify-content: center;
`

const ButtonText = styled(Heading2)`
  text-align: center;
`
