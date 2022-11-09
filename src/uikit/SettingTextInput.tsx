import React from 'react'
import { KeyboardType } from 'react-native'
import styled from 'styled-components/native'
import { Details } from 'uikit/Typography'

interface SettingTextInputProps {
  description: string
  security?: boolean
  keyboardType?: KeyboardType
  value: string
  onChange: (newValue: string) => void
}

const SettingTextInput = ({
  description,
  security,
  keyboardType,
  value,
  onChange,
}: SettingTextInputProps) => {
  return (
    <InputContainer>
      <InputText color="lightGray">{description}</InputText>
      <SettingInput
        returnKeyType="done"
        defaultValue={value}
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
  height: 40px;
  font-size: ${({ theme }) => theme.typeScale.heading2};
  line-height: ${({ theme }) => theme.lineHeight.heading2};
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.12);
`
