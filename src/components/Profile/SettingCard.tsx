import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { SvgProps } from 'react-native-svg'
import { theme } from 'utils/themes'
import { Heading2 } from 'uikit/Typography'

interface SettingCardProps {
  title: string
  Icon: React.FC<SvgProps>
  onPress(): void
}

const SettingCard = ({ title, Icon, onPress }: SettingCardProps) => {
  const theme = useTheme()
  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer style={theme.shadow.basic}>
        <IconWrapper>
          <Icon width={25} height={25} />
        </IconWrapper>
        <CardText color="black" weight="semibold">
          {title}
        </CardText>
      </CardContainer>
    </TouchableOpacity>
  )
}

export default SettingCard

const CardContainer = styled.View`
  height: 75px;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.little};
  background: #ffffff;
`
const IconWrapper = styled.View`
  margin-left: 25px;
`

const CardText = styled(Heading2).attrs({
  numberOfLines: 1,
})`
  margin-left: 22px;
  width: 75%;
`
