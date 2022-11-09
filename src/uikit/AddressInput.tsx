import React from 'react'
import styled from 'styled-components/native'
import { Details } from 'uikit/Typography'

interface SettingTextInputProps {
  description: string
  security?: boolean
  keyboardType?: undefined
}

const SettingTextInput = ({
  description,
  security,
  keyboardType,
}: SettingTextInputProps) => {
  return (
    <InputContainer>
      <InputText color="lightGray">{description}</InputText>
      <SettingInput
        returnKeyType="done"
        secureTextEntry={security}
        keyboardType={keyboardType}
      />
    </InputContainer>
  )
}

export default SettingTextInput

const InputContainer = styled.View``

const InputText = styled(Details)``

const SettingInput = styled.TextInput`
  padding: 3px 0 3px 0;
  font-size: ${({ theme }) => theme.typeScale.heading2};
  line-height: ${({ theme }) => theme.lineHeight.heading2};
  font-weight: 600;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.12);
`
