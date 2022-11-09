import React from 'react'
import { useTheme } from 'styled-components/native'
import RNPickerSelect from 'react-native-picker-select'
import ArrowDownIcon from 'assets/icons/arrow_down.svg'

interface SelectProps {
  placeholder?: { label: string; value: string }
  options: Array<{ label: string; value: string }>
  onChange: (newValue: string) => void
  disabled?: boolean
}

const Select = ({ placeholder, options, onChange, disabled }: SelectProps) => {
  const theme = useTheme()

  return (
    <RNPickerSelect
      placeholder={placeholder || {}}
      onValueChange={onChange}
      Icon={() => (disabled ? null : <ArrowDownIcon width={24} height={24} />)}
      items={options}
      useNativeAndroidPickerStyle={false}
      style={{
        inputIOS: {
          alignSelf: 'center',
          marginTop: 15,
          borderColor: theme.colors.transparentGray,
          borderBottomWidth: 1,
          color: theme.colors.black,
          height: 35,
          width: '90%',
          fontSize: 17,
          lineHeight: 20,
          fontWeight: '600',
        },
        inputAndroid: {
          paddingVertical: 10,
          paddingHorizontal: 15,
          paddingRight: 40,
          backgroundColor: theme.colors.white,

          color: theme.colors.black,
        },
        placeholder: {
          color: theme.colors.black,
        },
        iconContainer: {
          top: '42%',
          right: 15,
        },
      }}
      disabled={disabled}
    />
  )
}

export default Select
