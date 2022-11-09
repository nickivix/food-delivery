import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { Pointer } from 'uikit/Icons'
import { Heading2 } from 'uikit/Typography'

interface SettingCardProps {
  title: string
  focused: boolean
}

const AddressCard = ({ title, focused }: SettingCardProps) => {
  const theme = useTheme()
  return (
    <TouchableOpacity onPress={() => console.log('test')}>
      <CardContainer focused={focused} style={theme.shadow.basic}>
        <IconWrapper>
          <Pointer width={25} />
        </IconWrapper>
        <CardText color="black" weight="semibold">
          {title}
        </CardText>
      </CardContainer>
    </TouchableOpacity>
  )
}

export default AddressCard

const CardContainer = styled.View<{ focused: boolean }>`
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.little};
  border-color: ${({ theme }) => theme.colors.blue};
  border-width: ${({ focused }) => (focused ? '1px' : '0px')};
  background: #ffffff;
  height: 75px;
`
const IconWrapper = styled.View`
  margin-left: 25px;
`

const CardText = styled(Heading2).attrs({
  numberOfLines: 2,
})`
  margin-left: 22px;
  width: 75%;
`
