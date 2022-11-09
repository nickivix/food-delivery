import React from 'react'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  padding: 13px 0 13px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(100, 3, 23, 0.2);
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  line-height: ${({ theme }) => theme.lineHeight.paragraph};
`
export default TextInput
